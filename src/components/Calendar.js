import React, { useState } from "react";
import {
  addDays,
  subDays,
  endOfMonth,
  format,
  startOfToday,
  startOfWeek,
  startOfMonth,
  endOfWeek,
  isAfter,
  isSameDay,
  isWeekend,
  addMonths,
  subMonths
} from "date-fns";
import { alg, downloadCalendar } from "../helper.js";
import QueryString from "query-string";

import Family from "./Family.js";
import Instructions from "./Instructions.js";

import "./Calendar.css";

const colors = [
  "#f37942",
  "#a85ca0",
  "#87c1f7",
  "#10237e",
  "#007c14",
  "#eb4636",
  "#eb12e2"
];

const Calendar = ({ locale }) => {
  const xhr = new XMLHttpRequest();
  let advancedOptions;
  let instructions;
  let weekendsNo;
  let weekendsYes;
  let scheduleYes;
  let scheduleNo;
  let createSchedule;
  let downloadSchedule;
  let linkCalendar;
  let linkCopied;
  let family;

  switch (locale ? locale.code : "en-US") {
    case "es":
      advancedOptions = {
        toggle: "Advanced Options",
        startDate: "Start Date",
        endDate: "End Date"
      };
      instructions = "Instrucciones";
      weekendsNo = "Fin de Semanas NO";
      weekendsYes = "Fin de Semanas SI";
      scheduleYes = "Cambiar Disponibilidad";
      scheduleNo = "Muestra Horario";
      createSchedule = "crear horario";
      downloadSchedule = "descargar horario";
      linkCalendar = "enlace a horario";
      linkCopied = "enlace es copiado";
      family = "Familia";
      break;
    case "zh-CN":
      advancedOptions = {
        toggle: "Advanced Options",
        startDate: "Start Date",
        endDate: "End Date"
      };
      instructions = "使用指南";
      weekendsNo = "不包括周末";
      weekendsYes = "包括周末";
      scheduleYes = "修改日程";
      scheduleNo = "展示日程";
      createSchedule = "创建日程";
      downloadSchedule = "下载日程";
      linkCalendar = "链接日程";
      linkCopied = "链接已复制";
      family = "家庭";
      break;
    case "pt":
      advancedOptions = {
        toggle: "Advanced Options",
        startDate: "Start Date",
        endDate: "End Date"
      };
      instructions = "Instruções";
      weekendsNo = "Fins-de-semana NÃO";
      weekendsYes = "Fins-de-semana SIM";
      scheduleYes = "Mudar disponibilidades";
      scheduleNo = "Mostrar horário";
      createSchedule = "Criar horário";
      downloadSchedule = "Fazer download do horário";
      linkCalendar = "Fazer link do calendário";
      linkCopied = "Link copiado";
      family = "Família";
      break;
    case "de":
      advancedOptions = {
        toggle: "Advanced Options",
        startDate: "Start Date",
        endDate: "End Date"
      };
      instructions = "Anleitung";
      weekendsNo = "Wochenenden NEIN";
      weekendsYes = "Wochenenden JA";
      scheduleYes = "Terminplaner Verügbarkeit";
      scheduleNo = "Terminplaner anzeigen";
      createSchedule = "Zeitplan erstellen";
      downloadSchedule = "Zeitplan herunterladen";
      linkCalendar = "Verknüpfe Kalendar";
      linkCopied = "Link kopiert";
      family = "Familie";
      break;
    case "fr":
      advancedOptions = {
        toggle: "Advanced Options",
        startDate: "Start Date",
        endDate: "End Date"
      };
      instructions = "Instructions";
      weekendsNo = "Weekends NON";
      weekendsYes = "Weekends OUI";
      scheduleYes = "Changer Mes Disponibilités";
      scheduleNo = "Montrer l'Emploi du Temps";
      createSchedule = "Créer En Emploi du Temps";
      downloadSchedule = "Télécharger l'Horaire";
      linkCalendar = "Lien à l'Emploi du Temps";
      linkCopied = "Lien Copié";
      family = "Famille";
      break;
    case "el":
      advancedOptions = {
        toggle: "Advanced Options",
        startDate: "Start Date",
        endDate: "End Date"
      };
      instructions = "Οδηγίες";
      weekendsNo = "Σ/Κ Μη ενεργοποιημένα";
      weekendsYes = "Σ/Κ Ενεργοποιημένα";
      scheduleYes = "Άλλαξτε διαθεσιμότητα";
      scheduleNo = "Δείξτε το πρόγραμμα";
      createSchedule = "Δημιουγία προγράμματος";
      downloadSchedule = "Κατέβαστε το πρόγραμμα";
      linkCalendar = "Σύνδεση ημερολογίου";
      linkCopied = "Αντιγραφή συνδέσμου";
      family = "Οικογένεια";
      break;
    case "hi":
      advancedOptions = {
        toggle: "Advanced Options",
        startDate: "Start Date",
        endDate: "End Date"
      };
      instructions = "अनुदेश";
      weekendsNo = "सप्ताहांत बंद ";
      weekendsYes = "सप्ताहांत खुला ";
      scheduleYes = "Change Availabilities";
      scheduleNo = "कार्यक्रम दिखाएँ ";
      createSchedule = "शेड्यूल बना";
      downloadSchedule = "डाउनलोड शेड्यू ";
      linkCalendar = "लिंक कैलेंडर";
      linkCopied = "लिंक कॉपी किया गया!";
      family = "परिवार";
      break;
    default:
      advancedOptions = {
        toggle: "Advanced Options",
        startDate: "Start Date",
        endDate: "End Date"
      };
      instructions = "Instructions";
      weekendsNo = "Disable Weekends";
      weekendsYes = "Enable Weekends";
      scheduleYes = "Change Availabilities";
      scheduleNo = "Show Schedule";
      createSchedule = "Create Schedule";
      downloadSchedule = "Download Schedule";
      linkCalendar = "Generate Link";
      linkCopied = "✔ Link Copied!";
      family = "Family";
  }

  const today = startOfToday();
  const search = QueryString.parse(window.location.search);
  const [availabilities, setAvailabilities] = useState(
    search.availabilities ? JSON.parse(search.availabilities) : [[], [], [], []]
  );
  const [assignments, setAssignments] = useState(search.assignments || []);

  const [monthStart, setMonthStart] = useState(startOfMonth(today));
  const [monthEnd, setMonthEnd] = useState(
    endOfWeek(endOfMonth(startOfMonth(today)))
  );
  const [startDate, setStartDate] = useState(
    search.startDate ? new Date(search.startDate) : new Date()
  );
  const [endDate, setEndDate] = useState(monthEnd);
  const [families, setFamilies] = useState(
    search.families
      ? JSON.parse(search.families)
      : [
          { id: 0, value: `${family} #1` },
          { id: 1, value: `${family} #2` },
          { id: 2, value: `${family} #3` },
          { id: 3, value: `${family} #4` }
        ]
  );
  const [enableWeekends, setEnableWeekends] = useState(
    search.enableWeekends ? search.enableWeekends === "true" : false
  );
  const [showSchedule, setShowSchedule] = useState(
    search.showSchedule ? search.showSchedule === "true" : false
  );
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [currentFamily, setCurrentFamily] = useState(
    families ? families[0] : null
  );
  const [shareLink, setShareLink] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);

  const famText = RegExp(family);
  if (!famText.test(families[0].value)) {
    const update = families.map((fam, i) => ({
      id: fam.id,
      value: `${family} #${i + 1}`
    }));
    setFamilies(update);
  }

  // Set dates for start/end date pickers
  const startDates = [];
  const endDates = [];
  (() => {
    let day = addDays(startDate, 1);
    while (day < endDate) {
      const cloneDay = day;
      startDates.push(cloneDay);
      day = addDays(day, 1);
    }
  })();

  (() => {
    let day = addDays(endDate, 1);
    endDates.push(...startDates);
    while (day <= endOfMonth(addMonths(endDate, 1))) {
      const cloneDay = day;
      endDates.push(cloneDay);
      day = addDays(day, 1);
    }
  })();

  const isAvailability = (fam, index, day) => {
    const dayAfterToday = addDays(startDate, index);
    if (isSameDay(day, dayAfterToday) && !(isWeekend(day) && !enableWeekends)) {
      return true;
    }
    return false;
  };

  const isUnavailable = (family, day) =>
    family.some(unavailableDay => isSameDay(new Date(unavailableDay), day));

  const getCellStyle = (day, disabled) => {
    let style = "";
    if (disabled) {
      style = "lightgrey";
    } else if (!isAfter(day, today) && !isSameDay(day, today)) {
      style = "#d3d3d33b";
    } else if (!showSchedule) {
      const dividend = 100 / availabilities.length;
      style = "linear-gradient(to bottom,";
      availabilities.forEach((fam, i) => {
        if (isUnavailable(fam, day)) {
          if (i === 0) {
            style += ` ${colors[i]} ${dividend * 1}%`;
          } else {
            style += ` ${colors[i]} ${dividend * i}%, ${colors[i]} ${dividend *
              (i + 1)}%`;
          }
        } else {
          if (i === 0) {
            style += ` white ${dividend * 1}%`;
          } else {
            style += ` white ${dividend * i}%, white ${dividend * (i + 1)}%`;
          }
        }
        if (i + 1 === availabilities.length) {
          style += ")";
        } else {
          style += ",";
        }
      });
    } else {
      const indexOfAssignment = assignments.find((famScheduled, i) =>
        isAvailability(famScheduled, i, day)
      );
      style =
        indexOfAssignment >= 0
          ? colors[indexOfAssignment]
          : "linear-gradient(to bottom right,  transparent calc(50% - 1px), red, transparent calc(50% + 1px))";
    }
    return { background: style };
  };

  const generateLink = () => {
    const link = shareLink
      ? null
      : window.location.origin +
        "/?" +
        QueryString.stringify({
          availabilities: JSON.stringify(availabilities),
          assignments,
          startDate,
          families: JSON.stringify(families),
          enableWeekends,
          showSchedule
        });
    setShareLink(link);
    navigator.clipboard.writeText(link || "");

    xhr.open("GET", "count_schedule_linking", true);
    xhr.send(null);
  };

  const days = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDay = startOfWeek(startDate);
    for (let i = 0; i < 7; i++) {
      const day = addDays(startDay, i);
      const disabled = isWeekend(day) && !enableWeekends;
      days.push(
        <th
          key={i}
          style={disabled ? { background: "lightgrey" } : {}}
          className={disabled ? "disabled" : "weekday"}
          onClick={() => onHeaderClick(day)}
        >
          {format(day, dateFormat, { locale })}
        </th>
      );
    }
    return <tr>{days}</tr>;
  };
  const cells = () => {
    const calStart = startOfWeek(monthStart);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = calStart;
    let formattedDate = "";
    while (day <= monthEnd) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat, { locale });
        const cloneDay = day;
        const disabled = isWeekend(cloneDay) && !enableWeekends;
        days.push(
          <td
            style={getCellStyle(cloneDay, disabled)}
            className={disabled ? "disabled" : "day"}
            key={day}
            onClick={() => currentFamily && onDateClick(cloneDay)}
          >
            {isSameDay(cloneDay, startOfMonth(cloneDay)) && (
              <div className="nextMonth">
                {format(cloneDay, "MMM", { locale })}
              </div>
            )}
            <span>{formattedDate}</span>
          </td>
        );
        day = addDays(day, 1);
      }
      rows.push(<tr key={day}>{days}</tr>);
      days = [];
    }
    return rows;
  };

  const nextMonth = () => {
    const start = startOfMonth(addMonths(monthStart, 1));
    const end = endOfWeek(endOfMonth(addMonths(monthStart, 1)));
    setMonthEnd(end);
    setMonthStart(start);
    setEndDate(end);
  };

  const prevMonth = () => {
    const start = startOfMonth(subMonths(monthStart, 1));
    const end = endOfWeek(endOfMonth(subMonths(monthStart, 1)));
    setMonthEnd(end);
    setMonthStart(start);
    setEndDate(end);
  };

  const onDateClick = day => {
    if (
      currentFamily &&
      !(isWeekend(day) && !enableWeekends) &&
      !showSchedule &&
      (isSameDay(day, startOfWeek(startDate)) ||
        isAfter(day, startOfWeek(startDate)))
    ) {
      const availabilityUpdate = availabilities;
      const index = families.findIndex(fam => fam.id === currentFamily.id);
      if (availabilities[index].some(d => isSameDay(d, day))) {
        const indexToRemove = availabilityUpdate[index].findIndex(d =>
          isSameDay(d, day)
        );
        availabilityUpdate[index].splice(indexToRemove, 1);
      } else {
        availabilityUpdate[index].push(day);
      }
      setAvailabilities([...availabilityUpdate]);
      if (isAfter(day, endDate)) {
        setEndDate(day);
      }
    }
  };

  const onHeaderClick = day => {
    if (
      currentFamily &&
      !(isWeekend(day) && !enableWeekends) &&
      !showSchedule
    ) {
      const endDate = endOfWeek(monthEnd);
      let weekday = day;
      const availabilityUpdate = availabilities;
      const index = families.findIndex(fam => fam.id === currentFamily.id);
      if (
        !isAfter(weekday, startOfWeek(startDate)) &&
        !isSameDay(weekday, startOfWeek(startDate))
      ) {
        weekday = addDays(weekday, 7);
      }
      while (weekday <= endDate) {
        const cloneDay = weekday;
        if (availabilities[index].some(d => isSameDay(d, cloneDay))) {
          const indexToRemove = availabilityUpdate[index].findIndex(d =>
            isSameDay(d, cloneDay)
          );
          availabilityUpdate[index].splice(indexToRemove, 1);
        } else {
          availabilityUpdate[index].push(cloneDay);
        }
        weekday = addDays(cloneDay, 7);
      }
      setAvailabilities([...availabilityUpdate]);
      if (isAfter(subDays(weekday, 7), endDate)) {
        setEndDate(subDays(weekday, 7));
      }
    }
  };

  return (
    <>
      <div className="row Instructions">
        <div className="w-100 col-xs-12">
          <div className="dropdown show">
            <div
              className="w-100 btn instructions"
              onClick={() => setShowInstructions(!showInstructions)}
              data-toggle="collapse"
              href="#instructions"
              role="button"
              tabIndex="0"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <i
                className={`fas instructionChev fa-chevron-${
                  showInstructions ? "up" : "down"
                }`}
              />
              {instructions}
            </div>
            <div className="collapse" id="instructions">
              <div className="card card-body">
                <Instructions lang={locale} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="calendar">
        <div className="row Calendar-Top">
          <div className="col-xs-12 col-md-3 New-Sched">
            <div
              id="reset"
              className="text-btn"
              onClick={() => {
                setAvailabilities(families.map(f => []));
                setAssignments([]);
                setShowSchedule(false);
              }}
            >
              + Start New Schedule
            </div>
          </div>
          <div className="col-md-9 Calendar-Nav">
            <div className="row">
              <div
                id="prev"
                className="text-btn chev"
                role="button"
                tabIndex="0"
                onClick={prevMonth}
              >
                <i className="fas fa-chevron-left" />
              </div>
              <div
                id="next"
                className="text-btn chev"
                role="button"
                tabIndex="0"
                onClick={nextMonth}
              >
                <i className="fas fa-chevron-right" />
              </div>
              <div id="week" className="dropdown date">
                {format(monthStart, "MMM yyyy", { locale })}
              </div>
              <div id="right-top-cal-options" className="ml-auto">
                {!showSchedule && (
                  <input
                    type="button"
                    id="schedule"
                    className="ml-auto btn btn-primary"
                    value={createSchedule}
                    onClick={() => {
                      setAssignments(
                        alg.generateSchedule(
                          availabilities,
                          startDate,
                          endDate,
                          enableWeekends
                        )[0]
                      );
                      setShowSchedule(true);

                      xhr.open("GET", "count_calendar_generation", true);
                      xhr.send(null);
                    }}
                  />
                )}
                <input
                  type="button"
                  id="schedule"
                  className="btn btn-outline-primary showSchedule"
                  value={showSchedule ? scheduleYes : scheduleNo}
                  onClick={() => setShowSchedule(!showSchedule)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row advancedOptions">
          <div className="col-md-3" />
          <div className="col-md-9">
            <div className="row">
              <div
                role="button"
                tabIndex="0"
                className="text-btn ml-auto"
                onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
              >
                {advancedOptions.toggle}
                <i
                  className={`fas instructionChev fa-chevron-${
                    showAdvancedOptions ? "up" : "down"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-9">
            <div className="row">
              {showAdvancedOptions && (
                <div className="ml-auto pickers">
                  <div id="week" className="dropdown range">
                    {advancedOptions.startDate + ":"}
                    <a
                      className="dropdown-toggle date"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {format(startDate, "MMM dd", { locale })}
                    </a>
                    <div
                      className="dropdown-menu datesMenu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      {startDates.map(date => (
                        <a
                          key={`${date}_start`}
                          className="dropdown-item"
                          href="#"
                          onClick={() => setStartDate(date)}
                        >
                          {format(date, "MMM dd", { locale })}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div id="week" className="dropdown range">
                    {advancedOptions.endDate + ":"}
                    <a
                      className="dropdown-toggle date"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {format(endDate, "MMM dd", { locale })}
                    </a>
                    <div
                      className="dropdown-menu datesMenu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      {endDates.map(date => (
                        <a
                          key={`${date}_end`}
                          className="dropdown-item"
                          href="#"
                          onClick={() => setEndDate(date)}
                        >
                          {format(date, "MMM dd", { locale })}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row Current-Edit">
          <div className="col-md-3" />
          <div className="col-md-9">
            <div className="row">
              <div className="form-inline">
                <label htmlFor="current-family">
                  Editing unavailability for:
                </label>
                <div
                  className={`current-family ${
                    currentFamily
                      ? `currentFamily${families.findIndex(
                          fam => fam.id === currentFamily.id
                        )}`
                      : ""
                  }`}
                  id="current-family"
                >
                  {currentFamily && currentFamily.value}
                </div>
              </div>
              <div
                role="button"
                tabIndex="0"
                className="text-btn ml-auto"
                onClick={() => setEnableWeekends(!enableWeekends)}
              >
                {enableWeekends ? weekendsNo : weekendsYes}
              </div>
            </div>
          </div>
        </div>
        <div className="row calendarMain">
          <div className="col-xs-12 col-md-3">
            {families &&
              families.length &&
              families.map((fam, i) => (
                <div key={i} className="family row">
                  <div
                    className={`colorbox color${i}`}
                    onClick={() => {
                      setCurrentFamily(fam);
                    }}
                  />
                  <div
                    className={`namebox${
                      currentFamily && currentFamily.id === fam.id
                        ? ` currentColor${i}`
                        : ""
                    }`}
                  >
                    <input
                      className={`name${
                        currentFamily && currentFamily.id === fam.id
                          ? ` currentColor${i}`
                          : ""
                      }`}
                      type="text"
                      value={fam.value}
                      onChange={e => {
                        const fams = [...families];
                        const updatedFam = {
                          id: fam.id,
                          value: e.target.value
                        };
                        const update = fams.splice(i, 1, updatedFam);
                        setFamilies(fams);
                      }}
                    />
                    {currentFamily && currentFamily.id === fam.id ? (
                      <i className="fas fa-pencil-alt edit" />
                    ) : (
                      <i
                        className="far fa-trash-alt edit"
                        onClick={() => {
                          const famUpdate = [...families];
                          famUpdate.splice(i, 1);
                          setFamilies(famUpdate);
                          const availabilitiesUpdate = [...availabilities];
                          availabilitiesUpdate.splice(i, 1);
                          setAvailabilities(availabilitiesUpdate);
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
            {families.length < 7 && (
              <div
                className="addfamily row"
                onClick={() => {
                  setFamilies([
                    ...families,
                    {
                      id: families[families.length - 1].id + 1,
                      value: `${family} #${families.length + 1}`
                    }
                  ]);
                  setAvailabilities([...availabilities, []]);
                }}
              >
                <div className="colorbox" style={{ background: "#F1F5F9" }} />
                <div className="namebox" style={{ background: "white" }}>
                  <div className="name">+ Add Name</div>
                </div>
              </div>
            )}
          </div>

          <div className="col-md-9">
            <table id="av_cal" className="cal table table-bordered">
              <colgroup>
                <col className="weekend" />
                <col className="weekday" span="5" />
                <col className="weekend" />
              </colgroup>
              <thead>{days()}</thead>
              <tbody>{cells()}</tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3" />
          <div className="col-xs-12 col-md-9">
            <hr className="solid" />
            <div id="links">
              <a
                type="button"
                id="download-schedule"
                className="w-100 btn btn-info link"
                style={{ background: "#7C1AB9" }}
                href=""
                download="schedule.html"
                onClick={() =>
                  downloadCalendar(
                    assignments,
                    families,
                    monthStart,
                    monthEnd,
                    enableWeekends
                  )
                }
              >
                {downloadSchedule}
              </a>
              <input
                type="button"
                id="copy-link"
                className="w-100 btn btn-info link"
                value={shareLink ? linkCopied : linkCalendar}
                onClick={() => generateLink()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
