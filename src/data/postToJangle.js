import { userData } from "./userData";
import { toast } from "react-toastify";


//get postDataToBackEnd


export const postDataToJangle = async () => {

  //get current date
  var today = new Date();
  console.log(today)


  let userId = userData.userId
  let ip = userData.ip
  let zipCode = userData.zip_code
  let city = userData.city
  let state = userData.state
  let trustedForm = userData.trustedForm
  let businessName = userData.business_name
  let coverage = userData.coverage_needed
  let businessStructure = userData.business_structure
  let businessProfession = userData.business_profession
  let businessFounded = userData.business_founded
  let businessRevenue = userData.business_revenue
  let businessEmployees = parseFloat(userData.business_employees)
  let businessAddress = userData.business_address
  let businessCity = userData.business_city
  let  businessState = userData.business_state
  let businessZipcode = userData.business_zipcode
  let firstName = userData.first_name
  let lastName = userData.last_name
  let email = userData.email
  let phone = userData.phone


    let data = {
    "meta": {
      "originally_created": today,
      "originally_created_by": userId,
      "user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
        "landing_page_url": "https://www.commercial.insurtechgroups.com",
        "trusted_form_cert_url": trustedForm,
      "tcpa_compliant": true,
      'tcpa_consent_text': "By clicking Get My Free Quote below, I am agreeing to receive text messages from InsurTech Groups and business partners. I provide my signature expressly consenting to recurring contact from Insurtech Groups or its business partners at the number I provided regarding products or services via live, automated or prerecorded telephone call, text message, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of purchasing property, goods, or services. I understand that I can revoke this consent at any time. Terms & conditions & Privacy policy apply."
      },

      "contact": {
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "phone": phone,
        
        "city": city,
        "state": state,
        "zip_code": zipCode,
        "ip_address": ip
      },
      "data": {
        "name": businessName,
        "address": businessAddress,
        "zipcode": businessZipcode,
        "year_founded": businessFounded,
        "revenue": businessRevenue,
        "num_of_employees": businessEmployees,
        "sector": businessProfession,
        "corporation_type": businessStructure,
        "coverage_needed": coverage
    }
      
  
  
    }

  fetch('https://api.jangl.com/v2/commercial_insurance/capture', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token e6faa14296e53d324f7115f2641b51c163a97246'
    },
    body: JSON.stringify(data)

  })
    .then(response => response.json())
    .then(data => {
      toast.success('Your Form Has Been Submitted!')
      console.log('data', data)
    })
    .catch((error) => {
      toast.error('There was an error submitting your form. Please try again.')
      console.error('Error:', error);
    });


}