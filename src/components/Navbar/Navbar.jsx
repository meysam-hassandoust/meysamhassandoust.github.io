import React from "react";
import { Link } from "react-router-dom";

// css
import Styles from "./Navbar.module.css";

export default function Nvbar() {

  const showNavbar = () => {
  
    const navbar = document.querySelector(".navbar2");
    navbar.classList.toggle("hidden");
    
  
  };

  const buttons = document.querySelectorAll('a')
  console.log(buttons)

    buttons.forEach(elem => {
      elem.addEventListener('click', () => {
        showNavbar();  
      });
    })




  return (
    <>
      <div className="h-full w-full  ">
        <button className=" ml-10 md:mb-10 md:mt-10 lg:hidden" onClick={showNavbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        <div
          className={`${Styles.parentnav} item-center justify-between hidden lg:flex  px-[40px] h-full  navbar`}
        >
          <Link className="mb-3 lg:mb-0 items-center flex text-xl" to="/">
            <p className="items-center flex text-xl">Home</p>
          </Link>
          <Link className="mb-3 lg:mb-0 items-center flex text-xl" to="/cv">
            <p className="items-center flex text-xl">CV</p>
          </Link>
          <Link className="mb-3 lg:mb-0 items-center flex text-xl" to="/research">
            <p className="items-center flex text-xl">Research</p>
          </Link>
          <Link className="mb-3 lg:mb-0 items-center flex text-xl" to="/problems">
            <p className="items-center flex text-xl">Problem</p>
          </Link>
          <Link className="mb-3 lg:mb-0 items-center flex text-xl" to="/notes">
            <p className="items-center flex text-xl">Note</p>
          </Link>
          <Link className="mb-3 lg:mb-0 items-center flex text-xl" to="/competitions">
            <p className="items-center flex text-xl">Competition</p>
          </Link>
        </div>

        <div
          className={`flex item-center hidden lg:hidden  justify-between flex-col px-[40px] h-auto  navbar2`}
        >
          <Link className="mb-3 lg:mb-0 items-center flex text-xl" to="/">
            <p className="items-center flex text-xl">Home</p>
          </Link>
          <Link className="mb-3 lg:mb-0 items-center flex text-xl" to="/cv">
            <p className="items-center flex text-xl">CV</p>
          </Link>
          <Link className="mb-3 lg:mb-0 items-center flex text-xl" to="/research">
            <p className="items-center flex text-xl">Research</p>
          </Link>
          <Link className="mb-3 lg:mb-0 items-center flex text-xl" to="/problems">
            <p className="items-center flex text-xl">Problem</p>
          </Link>
          <Link className="mb-3 lg:mb-0 items-center flex text-xl" to="/notes">
            <p className="items-center flex text-xl">Note</p>
          </Link>
          <Link className="mb-3 lg:mb-0 items-center flex text-xl" to="/competitions">
            <p className="items-center flex text-xl mb-10 lg:mb-0">Competition</p>
          </Link>
        </div>
      </div>
    </>
  );
}
