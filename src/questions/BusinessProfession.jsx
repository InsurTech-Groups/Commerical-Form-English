import {useState, useEffect} from 'react';
import Banner from '../components/ProgressBar';
import CTA from '../components/CTA';
import { LinkWithQuery } from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { businessProfessionData } from '../data/addToUserData';
import { userData } from '../data/userData';

const BusinessProfession = () => {


  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  let value = userData.business_profession

  useEffect(() => {
    if (value !== "") {
      setIsButtonDisabled(false);
    }
  }, [])
  

  const handleBusinessProfession = (e) => {

    e.preventDefault();
  
    let profession = document.getElementById("profession").value;

    if (profession === "") {
      toast.error("Please enter a business name");
      setIsButtonDisabled(true);
      return;
    }
    if(profession.length < 3 || profession === "undefined" || profession === "null") {
      toast.error("Please enter a valid business name");
      setIsButtonDisabled(true);
      return;
    }
    else {
      setIsButtonDisabled(false);
      businessProfessionData(profession);
      navigate('/founded')
    }
    
  }

  return (
    <div className="bg-dark-purple pb-10">
    <Banner setProgress={40} />
    



    <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">
      <div className="m-w-1/2 space-y-8">
        <div>
          <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
            What is the{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
              Profession{' '}
            </span>
             Of Your Business?
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className=" space-y-6 flex flex-col  items-center justify-center">
            <div className="justify-center w-full">
         
           
            <input
                          type="text"
                          name="profession"
                          id="profession"
                  placeholder="Business Profession"
                  required
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
                onClick={handleBusinessProfession}
                
          >
          Next
        </button>
          </div>

          <LinkWithQuery to="/business-type">Back</LinkWithQuery>
        </form>
      </div>
    </div>
      <CTA />
      

  </div>
  )
}

export default BusinessProfession