import React from "react";
import EnrollmentForm from "../assets/enrollmentform.png";
import AllergyInformation from "../assets/allergyinformation.png";

const SampleForms = () => (
  <>
    <h1>Enrollment Form</h1>

    <a href="assets/Child_Care_Co-Op_Enrollment.pdf">
      <img src={EnrollmentForm} alt="enrollment form" />
    </a>

    <h1>Allergy Form</h1>
    <a href="assets/Child_Care_Co-Op_Allergy.pdf">
      <img src={AllergyInformation} alt="allergy information" />
    </a>
  </>
);

export default SampleForms;
