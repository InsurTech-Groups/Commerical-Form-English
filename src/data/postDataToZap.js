import { userData } from "./userData";
import { toast } from "react-toastify";
import axios from "axios";

export const postDataToZap = async () => {

  let data = {
    "userId": userData.userId,
    "ip": userData.ip,
    "zipCode": userData.zip_code,
    "city": userData.city,
    "state": userData.state,
    "trustedForm": userData.trustedForm,
    "businessName": userData.business_name,
    "coverage": userData.coverage_needed,
    "businessStructure": userData.business_structure,
    "businessProfession": userData.business_profession,
    "businessFounded": userData.business_founded,
    "businessRevenue": userData.business_revenue,
    "businessEmployees": parseFloat(userData.business_employees),
    "businessAddress": userData.business_address,
    "businessCity": userData.business_city,
    "businessState": userData.business_state,
    "businessZipcode": userData.business_zipcode,
    "firstName": userData.first_name,
    "lastName": userData.last_name,
    "email": userData.email,
    "phone": userData.phone
  };

  axios.post('https://hooks.zapier.com/hooks/catch/13124392/3muh9gf/', data)
    .then(response => {
        toast.success('Your Form Has Been Submitted!');
        console.log('data', response.data);
    })
    .catch(error => {
        toast.error('There was an error, please call us.');
        console.error(error);
    });

};