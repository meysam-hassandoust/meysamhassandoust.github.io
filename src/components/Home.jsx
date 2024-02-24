import React from "react";

// react router dom 
import { Link } from "react-router-dom";
// picture
import pic1 from "../images/unnamed1.jpg";
// components
import Research from "./Research/Research";
import Note from "./Note/Note";
import Problems from "./Problems/Problems"

export default function Home() {
  return (
    <div className="text-black block lg:flex w-full h-full p-2 lg:p-7 overflow-scroll">
      <div className="lg:w-1/6 w-full lg:h-[100%]   flex flex-row lg:flex-col justify-around items-center">
        <div className="mr-10 lg:mr-0 max-w-[%20] max-h-[20%]  ">
          <img
            className={`rounded-xl w-full lg:w-auto h-auto `}
            src={pic1}
            alt="Profile"
          />
        </div>
        <div>
          <h1 className="text-3xl">Meysam Hassandoust </h1>
          <br></br>
          <p className="text-sm text-gray-500">Theoretical Physics @SBU</p>
          <br></br>
          <p className="text-sm text-gray-500">
            Quantum Optics, Quantum Information , Mathematical Physics ,
            Classical Mechanics , Quantum Foundations
          </p>
          <div className="flex justify-between w-[50%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full  lg:w-5/6  p-5 ">
        <h1 className="text-3xl font-semibold font-sans">About</h1>
        <p className="p-5 text-[1rem] lg:text-[1.25rem] mb-10 font-serif text-gray-500	 ">
          Hi! I’m Meysam Hassandoust , a potential theoretical physicist and
          this website is where I have chosen to exhibit my activities . In
          general, I aim at finding clear, mathematically formulable answers to
          fundamental questions in physics and of course mathematics .<br></br>
            <p className="mb-5"></p>
          Here I
          will try to mention some areas of work that I am interested in and I
          will address them in the <Link to={Research}>Research</Link> section .<br></br>  
            <p className="mb-5"></p>
           On the other hand, with
          your cooperation, we try to raise questions every week that we can
          solve with each other's help, and in the future, I hope that
          competitions like the Student Olympiad will be held, which will make
          us all ingenuity and creativity in solving interesting problems. In
          the section of this site, <Link to={Problems}>Problems</Link>, materials and questions that I
          find interesting will be posted, and after a while, prizes will be
          determined for the first people who solved the questions and sent them
          to my email.  <br></br> 
          
           In the <Link to={Note}>Notes</Link> section, there are lecture notes and videos
          for Bachelor and Master's courses by professors from any university,
          and it gives students the opportunity to select the desired course
          have lecture notes, videos, mid-semester and end-semester exams with
          answers from any professor who has taught that course. I would be
          happy if you have lecture notes or video lectures of a lesson, with
          the consent of the professor of that lesson, send them to my email.
          <br></br> <br></br> 
          Finally, I would like to thank my dear friends, Rasoul Feyzi and
          Mohammad Mahdi Nasrollahzadeh for their cooperation and giving
          creative ideas and collecting lecture notes and videos
        </p>
      </div>
    </div>
  );
}
