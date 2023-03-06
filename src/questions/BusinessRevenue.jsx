import {useState, useEffect} from 'react';
import Banner from '../components/ProgressBar';
import CTA from '../components/CTA';
import { LinkWithQuery } from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { businessRevenueData } from '../data/addToUserData';
import { userData } from '../data/userData';
import {NumericFormat  }  from 'react-number-format';

const BusinessRevenue = () => {


  

  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  


    let val = userData.business_revenue
    let businessName = userData.business_name;
 
  
  useEffect(() => {
    if (val) {
      setIsButtonDisabled(false);
    }
  }, [])
  


  const handleBusinessRevenue = (e) => {

    e.preventDefault();
  
    let val = document.getElementById('revenue').value

    val = val.replace(/[$,]/g, '');
    console.log('int', val)
    if (isNaN(val)) {
      toast.error("Please enter a valid number");
      setIsButtonDisabled(true);
      return;
    }
    if (val < 0) {
      toast.error("Please enter a valid number");
      setIsButtonDisabled(true);
      return;
    }
    if (val === "") {
      toast.error("Please enter a valid number");
      setIsButtonDisabled(true);
      return;
    }
    else {
      setIsButtonDisabled(false);
      businessRevenueData(val);
      navigate('/employees')
    }


  }

  return (
    <div className="bg-dark-purple pb-10">
    <Banner setProgress={5} />
    



    <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">
      <div className="m-w-1/2 space-y-8">
        <div>
          <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
            What Is {' '}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                {/* check if business name is not null and if it is then but text if not use business name */}
              {businessName !== "undefined" ? `${businessName}'s` : 'Your Business'} {' '}
            </span>
              Projected Yearly Revenue?
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className=" space-y-6 flex flex-col  items-center justify-center">
            <div className="justify-center w-full">
 
                 
                
                 <NumericFormat 
                      className="appearance-none p-3  text-lg font-semibold leading-none bg-white rounded text-blue-500 zipInput"
                      type="text"
                      name="revenue"
                      id="revenue"
                  placeholder="105,000"
                  prefix='$'
                  onChange={() => {
                        setIsButtonDisabled(false);
                      }}
                      required={true}
                      data-type="currency" 
                      thousandSeparator={true}
                  fixedDecimalScale={true}
                  allowLeadingZeros={false}
                  defaultValue={val}
                    />

                

            </div>

            <button
          type="submit"
          disabled={isButtonDisabled}
          className={`px-6 py-4 w-full mt-5 text-lg ${isButtonDisabled ? 'cursor-not-allowed disabled:opacity-75  bg-input-purple' : "bg-pink-600"} hover:shadow-lg text-white rounded transition duration-200`}
                id="zipCodeButton"
                onClick={handleBusinessRevenue}
                
          >
          Next
        </button>
          </div>

          <LinkWithQuery to="/founded">Back</LinkWithQuery>
        </form>
      </div>
    </div>
      <CTA />
      

  </div>
  )
}

export default BusinessRevenue