import React from "react";

// images
import image1 from "../../images/اولین مسابقه فیزیک دانشجویی (3).png";

export default function Competitions() {
  return (
    <div className="p-10 text-black overflow-scroll h-full mb-10">
      <h1 className="text-3xl font-bold">Physics student competitions</h1>{" "}
      <span>Tehran, Iran</span>
      <div className="w-[50%] h-[50vw] ">
        <img className="object-contain h-full w-full" src={image1}></img>
      </div>
      <p className="font-extralight text-xl mb-10 mt-10">
        We at the Faculty of Physics of Shahid Beheshti University are planning
        to organize physics student competitions, which are only for Shahid
        Beheshti undergraduate students. The problems of this competition are
        from the four main topics of quantum mechanics Thermodynamics and
        Statistical Mechanics, Electromagnetism, and Classical Mechanics.
      </p>
      <p className="font-extralight text-xl mb-10 mt-10">
        The style of the questions and the way of conducting the exams are
        similar to the student Olympiad exams of the country, which means that
        each topic of the four main topics is individually in the time frame of
        one and a half hours or two hours. These competitions are held monthly
        and the day of the exam will be announced on{" "}
        <a href="https://t.me/Axionsbu">Telegram channel</a>
      </p>
      <p className="font-extralight text-xl mb-10 mt-10">
        In addition to honoring and commending, the best people of these tests
        are introduced to participate in the Student Olympiad.
      </p>
      <p className="font-extralight text-xl mb-10 mt-10">
        For more information, you can refer to the{" "}
        <a href="https://t.me/Axionsbu"> Telegram channel</a>
      </p>
      <h1 className="text-2xl font-bold mb-10">
        {" "}
        <a href="https://meysam-hassandoust.github.io/Register.html">
          Competition registration .
        </a>
      </h1>
    </div>
  );
}
