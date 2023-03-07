import {useState, useEffect} from 'react';
import Banner from '../components/ProgressBar';
import CTA from '../components/CTA';
import { LinkWithQuery } from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { businessNameData } from '../data/addToUserData';
import { userData } from '../data/userData';

const BusinessName = () => {


  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  let value = userData.business_name

  useEffect(() => {
    if (value !== "") {
      setIsButtonDisabled(false);
    }
  }, [])
  

  const handleBusinessName = (e) => {

    e.preventDefault();
  
    let businessName = document.getElementById("businessName").value;

    if (businessName === "") {
      toast.error("Please enter a business name");
      setIsButtonDisabled(true);
      return;
    }
    if(businessName.length < 3 || businessName === "undefined" || businessName === "null") {
      toast.error("Please enter a valid business name");
      setIsButtonDisabled(true);
      return;
    }
    else {
      setIsButtonDisabled(false);
      businessNameData(businessName);
      navigate('/coverage')
    }
    
  }

  return (
    <div className="bg-dark-purple pb-10">
    <Banner setProgress={10} />
    



    <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">
      <div className="m-w-1/2 space-y-8">
        <div>
          <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
            What is the{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
              Name{' '}
            </span>
             Of Your Business?
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className=" space-y-6 flex flex-col  items-center justify-center">
            <div className="justify-center w-full">
         
           
            <input
                          type="text"
                          name="businessName"
                          id="businessName"
                  placeholder="Business Name"
                  required
                  autoComplete="organization"
                          className="w-full mb-5 lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                  defaultValue={value}
                    
                  onChange={() => {
                    setIsButtonDisabled(false)
                  }}
                />
                 
                

            </div>

            <button
          type="submit"
          disabled={isButtonDisabled}
          className={`px-6 py-4 w-full mt-5 text-lg ${isButtonDisabled ? 'cursor-not-allowed disabled:opacity-75  bg-input-purple' : "bg-pink-600"} hover:shadow-lg text-white rounded transition duration-200`}
                id="zipCodeButton"
                onClick={handleBusinessName}
                
          >
          Next
        </button>
          </div>

          <LinkWithQuery to="/">Back</LinkWithQuery>
        </form>
      </div>
    </div>
      <CTA />
      

  </div>
  )
}

export default BusinessName