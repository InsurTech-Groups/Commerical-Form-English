import React from "react";
import "../styles/forms.css";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";

import { businessEmployeesData } from "../data/addToUserData";

function Employees() {

  const navigate = useNavigate();


  let buttons = [
    { title: '1-10', id: '1', value: '1-10', key: '1' },
    
    { title: '11-50', id: '11', value: '11-30 ', key: '1' },
   
    { title: '51-100', id: '11', value: '11-30 ', key: '1' },
    
    { title: '101-250', id: '11', value: '11-30 ', key: '1' },
    
    { title: '251-500', id: '11', value: '11-30 ', key: '1' },
    
    { title: '501+', id: '11', value: '11-30 ', key: '1' },


	
  ]
  
  const nextStep = (e) => {
    
    e.preventDefault();
    let v = e.currentTarget.value;

    businessEmployeesData(v)

    navigate('/address')

    
  }
  
  return (
    
      
      <div className="bg-dark-purple pb-10">
      <Banner setProgress={40} />
      

    <div className="formArea flex items-center justify-top mt-20 py-5 px-4 sm:px-6 lg:px-4 flex-col">

      <div className="m-w-1/2 space-y-8">
        <div>
            <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
             How Many <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">Employees </span> 
            Does Your Company Have?
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
            <LinkWithQuery to="/revenue">Back</LinkWithQuery>

        </form>
      </div>
      </div>
        <CTA />
        

      </div>
      
  )

}

export default Employees;