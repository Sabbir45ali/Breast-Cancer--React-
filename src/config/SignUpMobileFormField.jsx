// Form field configurations
export const getUserFormFields = () => [
  {
    key: "name",
    type: "text",
    placeholder: "Enter your name",
    label: "Name",
  },
  {
    key: "phone",
    type: "tel",
    placeholder: "Enter your contact no",
    label: "Phone No",
  },
  {
    key: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
  },
  {
    key: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
  },
];

export const getOrganisationFormFields = () => [
  {
    key: "organisationName",
    type: "text",
    placeholder: "Enter organisation name",
    label: "Organisation Name",
  },
  {
    key: "phone",
    type: "tel",
    placeholder: "Enter your contact no",
    label: "Phone No",
  },
  {
    key: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
  },
  {
    key: "typeOfOrg",
    type: "text",
    placeholder: "Enter type of organisation",
    label: "Type of Org",
  },
  {
    key: "licenceNumber",
    type: "text",
    placeholder: "Enter licence/reg number",
    label: "Licence / Reg Number",
  },
  {
    key: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
  },
];

export const getCurrentFields = (selectedType) => {
  switch (selectedType) {
    case "User":
      return getUserFormFields();
    case "Organisation":
      return getOrganisationFormFields();
    case "Create Account as":
      return [];
    default:
      return getUserFormFields();
  }
};