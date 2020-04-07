import React, { useState } from "react";

import "./Family.css";

const Family = ({
  familyNames,
  locale,
  setAvailabilities,
  setCurrentFamily,
  setFamilyNames,
  setShowSchedule
}) => {
  let numberOfCaregivers;
  let family;
  switch (locale ? locale.code : "en-US") {
    case "es":
      numberOfCaregivers = "Número de cuidadores";
      family = "Familia";
      break;
    case "zh-CN":
      numberOfCaregivers = "可承担托儿工作的人数";
      family = "家庭";
      break;
    case "pt":
      numberOfCaregivers = "Número de cuidadores/famílias";
      family = "Família";
      break;
    case "de":
      numberOfCaregivers = "Anzahl der Betreuer";
      family = "Familie";
      break;
    case "fr":
      numberOfCaregivers = "Nombre de Gardiens";
      family = "Famille";
      break;
    case "el":
      numberOfCaregivers = "Αριθμός νταντάδων";
      family = "Οικογένεια";
      break;
    default:
      numberOfCaregivers = "Number of caregivers";
      family = "Family";
  }
  const [families, setFamilies] = useState(familyNames || null);
  const [numberOfFamilies, setNumberOfFamilies] = useState(4);
  const [selectedFamily, setSelectedFamily] = useState(
    families ? families[0] : null
  );

  const setFamilyConfig = num => {
    const availabilities = [];
    const fams = [];
    for (let i = 0; i < num; i++) {
      fams.push({ id: i, value: `${family} #${i + 1}` });
      availabilities.push([]);
    }
    setFamilies(fams);
    setNumberOfFamilies(num);
    setFamilyNames(fams);
    setAvailabilities(availabilities);
    setSelectedFamily(fams[0]);
    setCurrentFamily(fams[0]);
  };

  if (!families) setFamilyConfig(numberOfFamilies);

  return (
    <>
      <div className="col-xs-12 col-md-3">
        <div className="form-group form-inline">
          <label
            htmlFor="familyNumber"
            style={{ fontSize: "14px", width: "75%" }}
          >
            {numberOfCaregivers}
          </label>
          <input
            id="familyNumber"
            style={{ textAlign: "right", width: "25%" }}
            className="form-control"
            type="number"
            min="1"
            max="7"
            value={numberOfFamilies}
            onChange={e => setFamilyConfig(parseInt(e.target.value))}
          />
        </div>
        {families &&
          families.length &&
          families.map((fam, i) => (
            <div
              key={i}
              className="family row"
              onClick={() => {
                setSelectedFamily(fam);
                setCurrentFamily(fam);
              }}
            >
              <div className={`colorbox color${i}`} />
              <div
                className={`namebox${
                  selectedFamily && selectedFamily.id === i
                    ? ` currentColor${i}`
                    : ""
                }`}
              >
                <input
                  className={`name${
                    selectedFamily && selectedFamily.id === i
                      ? ` currentColor${i}`
                      : ""
                  }`}
                  type="text"
                  value={fam.value}
                  onChange={e => {
                    const update = families.reduce((acc, curr) => {
                      if (curr.id === i) {
                        curr.value = e.target.value;
                      }
                      acc.push(curr);
                      return acc;
                    }, []);
                    setFamilies(update);
                    setFamilyNames(update);
                  }}
                />
                {selectedFamily &&
                  selectedFamily.id === i && (
                    <i class="fas fa-pencil-alt edit" />
                  )}
              </div>
            </div>
          ))}
        <div className="addfamily row">
          <div className="colorbox" style={{ background: "#F1F5F9" }} />
          <div className="namebox" style={{ background: "white" }}>
            <div className="name">+ Add Name</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Family;
