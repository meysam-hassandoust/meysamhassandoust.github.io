import React from "react";

// css
import Styles from "./Cv.module.css";
// picture
import pic1 from "../../images/unnamed1.jpg";

// start change

export default function Cv() {
  return (
    <div className="text-black block lg:flex w-full h-full  p-10 overflow-scroll font-serif  ">
      <div className="lg:w-1/6 w-full lg:h-[100%]   flex flex-row lg:flex-col justify-around items-center ">
        <div className="mr-10 lg:mr-0 max-w-[%20] max-h-[20%]">
          <img className="rounded-xl" src={pic1}></img>
        </div>

        <div>
          <h1 className="text-3xl">Meysam Hassandoust </h1>
          <br></br>
          <p className="text-sm text-gray-500">Theoretical Physics @SBU</p>
          <br></br>
          <p className="text-sm  text-gray-500">
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

      <div className={`w-full  lg:w-5/6  p-5 ${Styles.cv}`}>
        <h1 className="text-5xl text-[#A23333] font-bold">CV</h1>
        <h1 className="text-3xl  ">Education </h1>
        <spn>
          Shahid Beheshti University{" "}
          <span className="text-gray-500 italic text-xs">Tehran, Iran </span>
          <br></br>
          <span className="text-gray-500 italic text-[10px]">
            BTech in Physics Sep 2019 ‑ Current
          </span>
        </spn>
        <ul>
          <li>
            Courses: Mathematical Physics , Quantum Mechanics , Electromagnetism
            , Electrodynamics , Analytical Mechanics , Theory of Relativity ,
            Solid State Physics, Foundation of Matrices and Linear Algebra
          </li>
          <p className=" text-gray-500 italic text-xs">
            Atomic Energy High School{" "}
            <span className="text-gray-500 italic text-xs">Tehran, Iran </span>
          </p>
          <p>High School Apr 2016 ‑ Apr 2019</p>
          <li>Passed with Distinction</li>
          <li>Specialised in Physics and Maths</li>
        </ul>
        <ul>
          <h1 className="text-3xl  font-bold">Research Experience </h1>
          <p>
            Shahid Beheshti University{" "}
            <span className="text-gray-500 italic text-xs">Tehran, Iran </span>
          </p>
          <p className="text-gray-500 italic">
            Quantum Cosmology{" "}
            <span className="text-xs">Aug 2023 ‑ Present</span>
          </p>
          <li>
            WaveFunction of the Universe in Anisotropic Minisuperspace Model.
            <a href="https://meysam-hassandoust.github.io/files/Research/WaveFunction_of_the_Universe_in_Anisotropic_Minisuperspace_Model.pdf">
              here
            </a>
          </li>
          <li className="mb-5">
            Analytical solution of the Dirac equation near the event horizon of
            a charged black hole.
            <a href="https://meysam-hassandoust.github.io/files/Research/Analytical_solution_of_the_Dirac_equation_near_the_event_horizon_of_a_charged_black_hole.pdf">
              here
            </a>
          </li>

          <p>
            Shahid Beheshti University{" "}
            <span className="text-gray-500 italic text-xs">Tehran, Iran </span>
          </p>
          <p className="text-gray-500">
            Quantum Mechanics{" "}
            <span className="text-xs">Sep 2022 ‑ Present</span>
          </p>
          <li>
            Supersymmetry in Quantum Mechanics by Generalized Uncertainty
            Principle.
          </li>
          <li>
            Supersymmetry in Quantum Mechanics for Dirac equation in FRW space
            time.
          </li>
          <li className="mb-5">
            Supersymmetry time dependent in Quantum Mehcanics.
          </li>

          <p>
            Shahid Beheshti University{" "}
            <span className="text-gray-500 italic text-xs">Tehran, Iran </span>
          </p>
          <p className="text-gray-500 italic">
            {" "}
            Quantum Optics <span className="text-xs">Jun 2022 ‑ Sep 2022</span>
          </p>
          <li>
            Literature Review on Rydberg RF Receiver Operation to Track RF
            Signal Fading and Frequency Drift .
          </li>
          <li>
            Literature Review on Electromagnetically Induced Transparency (EIT)
            .
          </li>
          <li>Literature Review on Atom based RF electric field sensing .</li>
          <li>
            Investigating the phenomenon of anti‑resonance and resonance in
            coupled oscillators and comparing the Fano phenomenon in classical
            and quantum states .
          </li>
          <li className="mb-5">
            Analytical solution of N Coupled Oscillators in Classical Mechancis
            .
          </li>

          <p>
            Shahid Beheshti University{" "}
            <span className="text-gray-500 italic text-xs">Tehran, Iran </span>
          </p>
          <p className="text-gray-500">
            Mathematical Physics{" "}
            <span className="text-xs">Jun 2022 ‑ Apr 2023</span>
          </p>
          <li>Pseudo‑Supersymmetry time dependent in Quantum Mechanics</li>
          <li>
            Literature Review on Pseudo‑Hermitian Hamiltonian Representation Of
            Quantum Mechanics .
          </li>
          <li>
            Literature Review on Pseudo‑Supersymmetry in Quantum Mechanics .
          </li>

          <p>
            Shahid Beheshti University{" "}
            <span className="text-gray-500 italic text-xs">Tehran, Iran </span>
          </p>
          <p className="text-gray-500">
            Computational Work{" "}
            <span className="text-xs">Jun 2020 ‑ Jul 2022</span>
          </p>
          <li>
            Numerical Approach (Monte Carlo Method) For Feynman Path Integral .
            (Basic)
          </li>
          <li>Numerical Approach For Schrödinger Equation .</li>
          <li>Numerical solution of Laplace Equation in Electromagnetic .</li>
          <li>Numerical solution of Ising Model .</li>
          <li>Numerical solution of the Three‑Body Problem .</li>
        </ul>
        <h1 className="text-3xl">Teaching Experiences</h1>
        <ul>
          <li>
            Mathematical Physics I Teacher’s Aide{" "}
            <span className="text-gray-500 italic text-xs">Tehran, Iran </span>
          </li>
          <p className="font-light text-gray-500 text-xs">
            Shahid Beheshti University Sep 2023 ‑ Feb 2024
          </p>
          <p className="mb-4">Course Instructor: Prof. Mohammad Aliakbari</p>

          <li>
            Quantum Mechanics I Teacher’s Aide{" "}
            <span className="text-gray-500 italic text-xs">Tehran, Iran </span>
          </li>
          <p className="font-light text-gray-500 text-xs">
            Shahid Beheshti University Sep 2023 ‑ Feb 2024
          </p>
          <p className="mb-4">Course Instructor: Prof. Ali Sadeghi</p>

          <li>
            Quantum Mechanics I Teacher’s Aide{" "}
            <span className="text-gray-500 italic text-xs">Tehran, Iran </span>
          </li>
          <p className="font-light text-gray-500 text-xs">
            Shahid Beheshti University Sep 2022 ‑ Feb 2023
          </p>
          <p className="mb-4">Course Instructor: Prof. Ali Sadeghi</p>

          <li>
            General Physics I Teacher’s Aide{" "}
            <span className="text-gray-500 italic text-xs">Tehran, Iran </span>
          </li>
          <p className="font-light text-gray-500 text-xs">
            Shahid Beheshti University Sep 2022 ‑ Feb 2023
          </p>
          <p className="mb-4">Course Instructor: Prof. Siamak Sadat Gousheh</p>

          <li>
            Mathematical Physics II Teacher’s Aide{" "}
            <span className="text-gray-500 italic text-xs">Tehran, Iran </span>
          </li>
          <p className="font-light text-gray-500 text-xs">
            Shahid Beheshti University Mar 2021 ‑ Jun 2022
          </p>
          <p className="mb-4">Course Instructor: Prof. Ali Hosseini</p>

          <li>
            Analytical Mechanics II Teacher’s Aide{" "}
            <span className="text-gray-500 italic text-xs">Tehran, Iran </span>
          </li>
          <p className="font-light text-gray-500 text-xs">
            Shahid Beheshti University Mar 2021 ‑ Jun 2022
          </p>
          <p className="mb-4">Course Instructor: Prof. Mohammad Aliakbari</p>

          <li>
            Mathematical Physics I Teacher’s Aide{" "}
            <span className="text-gray-500 italic text-xs">Tehran, Iran </span>
          </li>
          <p className="font-light text-gray-500 text-xs">
            {" "}
            Shahid Beheshti University Sep 2021 ‑ Feb 2022
          </p>
          <p className="mb-4">Course Instructor: Prof. Ali Hosseini</p>
        </ul>
        <h1 className="font-bold text-3xl">Skills</h1>
        <span className="text-sm">Programming</span>
        <span className="text-sm">Python</span>
        <span className="text-sm">C/C++</span>
        <span className="text-sm">HTML/CSS </span>
        <span className="text-sm">Mathematica</span> <br></br>
        <span className="text-sm">Word</span>
        <span className="text-sm">Exel</span>
        <span className="text-sm">Soft Skills</span>
        <span className="text-sm">ime Management</span>
        <span className="text-sm">Teamwork</span>
        <span className="text-sm">Problem‑solving</span>
        <h1 className="text-3xl font-bold mt-5">Achievements</h1>
        <ul className="text-gray-500">
          <li>
            2023 Ranked 8th in the university students’ national Physics
            Olympiad Iran
          </li>
          <li>
            2023 Ranked, One of the first 15 students in the national master
            studies entrance exam Iran
          </li>
          <li>2018 Pass, Passing the First Stage Of Astronomy Olympiad Iran</li>
          <li>2018 Pass, Passing the First Stage Of Physics Olympiad Iran</li>
          <li>
            2018 Pass, Passing the First Stage Of Mathematics Olympiad Iran
          </li>
          <li>2018 Level 6, Ranked 6th in the Messie Marathon Iran</li>
          <li>
            2014 Winner, National Gold Medal WMTC Mathematics Competition Iran
          </li>
          <li>
            2013 Pass, Passing the second Stage Of IMC Mathematics Competition
            Iran
          </li>
        </ul>
        <h1 className="text-3xl font-bold">Interests</h1>
        <ul>
          <li>
            <span>Sport</span> <span className="text-gray-500">I have played in the Mahram team in the youth
            category and after that I switched to street basketball.</span>
          </li>
          <li>
            <span>Cooking</span><span className="text-gray-500">I love cooking. I am an expert in most
            Indian‑style cooking, enjoy baking and making my own pizza</span>
          </li>
          <li>
            <span>Music</span> <span className="text-gray-500">I am a Setar musician and used to compose music .</span>
          </li>
          <li>
            <span>Art</span> <span className="text-gray-500">have always enjoyed drawing since I was a child.
            Recently, I work with graffiti</span>
          </li>
          <li>
            <span>Video Games</span><span className="text-gray-500">I always had the gaming gene. I mostly play
            on my PC.</span>
          </li>
        </ul>
        <h1 className="text-3xl font-bold">Languages</h1>
        <ul>
          <li>
            English :
          </li>
          <span className="text-gray-500">Upper Intermediate</span>
          <li>
            Persian :
          </li>
          <span className="text-gray-500">Native proficiency</span>
        </ul>
      </div>
    </div>
  );
}
