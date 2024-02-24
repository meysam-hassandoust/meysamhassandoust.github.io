import React from "react";

// css
import Styles from "./Problems.module.css"

export default function Problems() {
  return (
    <div className="text-black p-10 h-full overflow-y-scroll ">
      <h1 className="text-3xl font-bold mb-10">Problems</h1>
      <p className="text-xl font-extralight pb-5">
        Here are questions in the fields of physics such as quantum mechanics,
        analytical mechanics, thermodynamics, statistical mechanics, and
        electromagnetism, and in the field of mathematical physics such as the
        theory of groups and symmetries, differential geometry, etc., and
        intelligence questions collected from international competitions that
        collect It has been collected.
      </p>
      <p className="pb-8">
        I would be happy if you could help me design the questions and share
        answers and interesting questions.Message{" "}
        <a href="MeysamHassandoust@gmail.com">my email</a> and{" "}
        <a href="https://t.me/Meysamryn">my Telegram account</a> to get in
        touch.
      </p>
      <div>
        <ul className="mb-20">
          <li>
            <h1 className="font-bold">
              Physics :{" "}
              <span className="font-light">
                <a href="https://meysam-hassandoust.github.io/files/Problems/Problem_set_1%20(1).pdf">
                  Problem set1
                </a>{" "}
              </span>
            </h1>{" "}
          </li>
          <li>
            <h1 className="font-bold">
              Mathematical Physics :{" "}
              <span className="font-light">
                <a href="https://meysam-hassandoust.github.io/files/Problems/Problem_set_1%20(2).pdf">
                  Problem set1
                </a>{" "}
              </span>
            </h1>{" "}
          </li>
          <li className="mb-10">
            <h1 className="font-bold">
            Physical Intelligenc :{" "}
              <span className="font-light">
                <a href="https://meysam-hassandoust.github.io/files/Problems/Problem_set_2.pdf">
                  Problem set1
                </a>{" "}
              </span>
            </h1>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
