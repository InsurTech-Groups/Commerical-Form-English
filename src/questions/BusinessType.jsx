import React from "react";
import "../styles/forms.css";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";

import { coverageData } from "../data/addToUserData";

function BusinessType() {

  const navigate = useNavigate();


  let buttons = [
    { title: 'Individual / Sole Proprietor', id: 'individual', value: 'Individual / Sole Proprietor', key: '1' },
    { title: 'Joint Venture', id: 'joint-venture', value: 'Joint Venture', key: '2' },
    { title: 'LLC', id: 'llc', value: 'LLC', key: '3' },
    { title: 'Partnership', id: 'partnership', value: 'Partnership', key: '4' },
    { title: 'Trust', id: 'trust', value: 'Trust', key: '5' },
    { title: 'Corporation', id: 'corporation', value: 'Corporation', key: '6' },
	
  ]
  
  const nextStep = (e) => {
    
    e.preventDefault();
    let v = e.currentTarget.value;

    coverageData(v)

    navigate('/business-profession')

    
  }
  
  return (
    
      
      <div className="bg-dark-purple pb-10">
      <Banner setProgress={40} />
      

    <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">

      <div className="m-w-1/2 space-y-8">
        <div>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
             How is Your Business <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">Structured </span> 

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
            <LinkWithQuery to="/coverage">Back</LinkWithQuery>

        </form>
      </div>
      </div>
        <CTA />
        

      </div>
      
  )

}

export default BusinessType;