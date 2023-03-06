import React from "react";
import "../styles/forms.css";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";

import { coverageData } from "../data/addToUserData";

function Coverage() {

  const navigate = useNavigate();


  let buttons = [
    { title: 'General Liability', id: 'general-liability', value: 'General Liability', key: '1' },
    { title: 'Commercial Auto', id: 'commercial-auto', value: 'Commercial Auto', key: '2' },
    { title: 'Commercial Trucking', id: 'commercial-trucking', value: 'Commercial Trucking', key: '2' },
    { title: 'Professional Liability (E&O)', id: 'professional-liability', value: 'Professional Liability', key: '3' },
    { title: 'Property Insurance', id: 'property-insurance', value: 'Property Insurance', key: '4' },
    { title: 'Worker Compenstation', id: 'worker-compenstation', value: 'Worker Compenstation', key: '5' },
    { title: 'Other', id: 'other', value: 'other', key: '6' },
	
  ]
  
  const nextStep = (e) => {
    
    e.preventDefault();
    let v = e.currentTarget.value;

    coverageData(v)

    navigate('/business-type')
    
  }
  
  return (
    
      
      <div className="bg-dark-purple pb-10">
      <Banner setProgress={40} />
      

    <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">

      <div className="m-w-1/2 space-y-8">
        <div>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
             Which <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">Coverage </span> does your business need? 

            </h2>
            
        </div>
        <form className="mt-8 space-y-6">


          
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 justify-center">
        {buttons.map((button) => {
                
          return (
                  <div>
                  <button
                    className="monthButton w-full bg-input-purple hover:shadow-lg hover:shadow-button-purple/50 hover:transition-transform hover:ease-in-out  hover:bg-button-purple rounded text-white font-bold"
                    data-value={button.value}
                    value={button.value}
                    onClick={nextStep}
                  >
                    <span>{button.title}</span>
                  </button>
                  </div>
                );
              
            })}

            </div>
            <LinkWithQuery to="/business-name">Back</LinkWithQuery>

        </form>
      </div>
      </div>
        <CTA />
        

      </div>
      
  )

}

export default Coverage;