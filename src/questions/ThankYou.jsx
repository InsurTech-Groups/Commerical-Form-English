import React from 'react';
import Lottie from "lottie-react";
import BusinessInsurance from '../assets/BusinessInsurance.json';
import "../styles/forms.css";
import Agent from '../assets/agent.jpg';
import GetMoreQuotes from '../components/GetMoreQuotes';



export default function ThankYou() {


  //TODO:
    // Get timezone and dynamically show

  const time = new Date().toString('en-US', {timeZone: "America/New York"})

  let businessName = localStorage.getItem('businessName');

  return (
    <div className="bg-dark-purple pb-10">

      <div className="formArea flex items-center py-5 px-4 sm:px-6 lg:px-4 flex-col">
        


      <div className="py-2 lg:w-1/2 md:w-full sm:w-full mx-auto overflow-hidden rounded-lg">
          <div className="flex flex-wrap align-middle justify-center">
         
        <div className="w-full md:w-full px-2 md:pl-12 lg:pr-0 text-center mx-auto">
        <h2 className="mt-4 text-center text-4xl font-extrabold text-white">
            An Agent Is Working On Your Quote!
            </h2>

            <p className="text-white text-lg mx-auto pt-5">
             Keep an eye out! An agent will call you shortly to go over the next steps and get started on your quote and get you a price you love!
              </p>
               
        </div>

      </div>
    </div>
    <Lottie animationData={BusinessInsurance} loop={true} style={{height: '300px'}}  />

        <GetMoreQuotes/>
        <div className="m-w-1/2 space-y-8">
          <div className='justify-center text-center'>
          
            <div className='pt-10'>
           
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-button-purple shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block">A licensed agent will be with you shortly!</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-white">
                Want to talk to an agent faster? Call us and we can help you get quoted today!
              </p>
              <a
                href="tel:18777141714"
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-input-purple px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-50 hover:text-button-purple"
              >
                Call An Agent Now 

                
                
                             </a>
            </div>
          </div>
          <div className="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="translate-x-1 translate-y-1 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src={Agent}
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
           
          </div> 
        
        </div>
      </div>

    


    </div>
  )
}