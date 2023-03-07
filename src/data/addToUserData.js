
import { userData } from "./userData";


export const landingPageData = (id, zipCodeValue, cityValue, stateValue, url) => {

  userData.userId = id;
  userData.zip_code = zipCodeValue;
  userData.city = cityValue;
  userData.state = stateValue;

  let tF = document.getElementById('xxTrustedFormToken_0').value;

  userData.trusted_form_token = tF;

  console.log('userData', userData);

};

export const businessNameData = (businessName) => {
  userData.business_name = businessName;
  console.log('userData', userData);
};

export const coverageData = (coverage) => {
  userData.coverage_needed = coverage;
  console.log('userData', userData);
};

export const businessStructureData = (structure) => {
  userData.business_structure = structure;
  console.log('userData', userData);
};

export const businessProfessionData = (profession) => {
  userData.business_profession = profession;
  console.log('userData', userData);
};

export const businessFoundedData = (founded) => {
  userData.business_founded = founded;
  console.log('userData', userData);
};

export const businessRevenueData = (revenue) => {
  userData.business_revenue = revenue;
  console.log('userData', userData);
};

export const businessEmployeesData = (employees) => {
  userData.business_employees = employees;
  console.log('userData', userData);
};

export const businessAddress = (address, city, state, zipcode) => {
  userData.business_address = address;
  userData.business_city = city;
  userData.business_state = state;
  userData.business_zipcode = zipcode;
  console.log('userData', userData);
};

export const nameInformationData = (first, last) => {
  userData.first_name = first;
  userData.last_name = last;
  console.log('userData', userData);
};

export const emailInformationData = (email) => {
  userData.email = email;
  console.log('userData', userData);
};

export const phoneInformationData = (phone) => {
  userData.phone = phone;
  console.log('userData', userData);
};