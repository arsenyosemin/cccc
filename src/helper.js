import {
  addDays,
  isAfter,
  isSameDay,
  startOfToday,
  endOfMonth,
  format,
  startOfWeek,
  startOfMonth,
  endOfWeek,
  isWeekend
} from "date-fns";
import { computeSchedule } from "ccc-solver";

export const alg = {
  generateSchedule: (
    unavailabilities,
    currentDate,
    latestDate,
    enableWeekends
  ) => {
    const availabilities = [];
    const numberOfFamilies = unavailabilities.length;
    let day = currentDate;
    while (!isAfter(day, latestDate) || isSameDay(day, latestDate)) {
      const cloneDay = day;
      const availabilityOnDay = unavailabilities.reduce((acc, curr, i) => {
        if (!(isWeekend(cloneDay) && !enableWeekends)) {
          if (
            !curr.some(unavailableDay => isSameDay(unavailableDay, cloneDay))
          ) {
            acc.push(i);
          }
        }
        return acc;
      }, []);
      day = addDays(day, 1);
      availabilities.push(availabilityOnDay);
    }
    return computeSchedule(numberOfFamilies, availabilities);
  }
};

export const downloadCalendar = (
  schedule,
  families,
  startDate,
  endDate,
  enableWeekends
) => {
  const today = startOfToday();
  const monthStart = startOfMonth(startDate);
  const monthEnd = endOfMonth(endDate);
  const calStart = startOfWeek(monthStart);
  let calEnd = endOfWeek(monthEnd);
  if (isSameDay(endDate, endOfWeek(endOfMonth(monthStart)))) {
    calEnd = endDate;
  }
  const isAvailability = (index, day) => {
    const dayAfterToday = addDays(today, index);
    if (isSameDay(day, dayAfterToday) && !(isWeekend(day) && !enableWeekends)) {
      return true;
    }
    return false;
  };
  let day = calStart;
  let text = `<div class="calendar"><span class="day-name">Sun</span><span class="day-name">Mon</span><span class="day-name">Tue</span><span class="day-name">Wed</span><span class="day-name">Thu</span><span class="day-name">Fri</span><span class="day-name">Sat</span>`;
  let formattedDate = "";
  while (day <= calEnd) {
    formattedDate = `${format(day, "M")}/${format(day, "d")}`;
    const cloneDay = day;
    const disabled = isWeekend(cloneDay) && !enableWeekends;

    text += `<div class="day`;
    let familyText = "";
    let isFamScheduled = false;
    if (disabled) {
      text += ` greyed">${formattedDate}</div>`;
    } else {
      schedule.forEach((famScheduled, i) => {
        if (isAvailability(i, cloneDay)) {
          isFamScheduled = true;
          familyText += `
          ${families[famScheduled].value}`;
        }
      });
      if (isFamScheduled) {
        text += `">${formattedDate}${familyText}</div>`;
      } else {
        text += ` crossed">${formattedDate}</div>`;
      }
    }
    day = addDays(day, 1);
  }

  text += `</div>
  <style>
  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    background: #f5f7fa;
    padding: 40px 0;
    box-sizing: border-box;
    font-family: Montserrat, "sans-serif";
    color: #51565d;
  }

  .calendar {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(7, minmax(120px, 1fr));
    grid-template-rows: 50px;
    grid-auto-rows: 120px;
    overflow: auto;
  }

  .day {
    white-space: pre;
    border-bottom: 1px solid rgba(166, 168, 179, 0.12);
    border-right: 1px solid rgba(166, 168, 179, 0.12);
    text-align: right;
    padding: 14px 20px;
    letter-spacing: 1px;
    font-size: 12px;
    box-sizing: border-box;
    color: #98a0a6;
    position: relative;
    pointer-events: none;
    z-index: 1;
  }
  .crossed{
    background-image: linear-gradient(to bottom right,  transparent calc(50% - 1px), red, transparent calc(50% + 1px));
  }
  .greyed{
    background-color: lightGrey;
  }
  </style>
  `;
  const data = new Blob([text], { type: "text/plain" });

  const url = window.URL.createObjectURL(data);

  document.getElementById("download-schedule").href = url;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "count_schedule_sharing", true);
  xhr.send(null);
};
