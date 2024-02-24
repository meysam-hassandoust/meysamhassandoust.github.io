import React from "react";

// style
import styles from "./Note.module.css";

export default function Note() {
  const email = "MeysamHassandoust@gmail.com";

  const handleClick = () => {
    // Create a temporary input element
    const tempInput = document.createElement("input");

    // Set the input value to the email address
    tempInput.value = email;

    // Append the input element to the document
    document.body.appendChild(tempInput);

    // Select the input content
    tempInput.select();

    // Copy the selected content to the clipboard
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Optionally, provide feedback to the user (e.g., alert or display a message)
    alert("Email copied to clipboard");
  };

  return (
    <div className="text-black font-serif overflow-y-scroll max-h-[100vh] p-1 md:pb-10">
      <div>
        <h1 className="text-3xl font-bold">Notes</h1>
        <p className="text-gray-500">
          Here we put the video and lecture notes of the professors along with
          the lessons they presented. If you have lecture notes or videos of
          your professors, please send them to{" "}
          <a href="#" onClick={handleClick}>
            my email
          </a>{" "}
          with the name of your university. Thanks
        </p>
      </div>

      <div className="container mx-auto  w-full p-1 md:p-[1rem] mb-10 overflow-x-hidden">
        <h1 className="text-3xl font-bold">Bachelor's courses</h1>
        <table className="w-full bg-white border border-gray-300 shadow-md rounded-md">
          <thead>
            <tr>
              <th className="py-2  border-b">number</th>
              <th className="py-2  border-b">Bachelor's courses</th>
              <th className="py-2  border-b">Lecture Notes</th>
              <th className="py-2  border-b">Lecture Videos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">General Physics I</td>
              <td className="py-2 px-4 border-b">Lecture Notes </td>
              <td className="py-2 px-4 border-b">Lecture Videos</td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b">3</td>
              <td className="py-2 px-4 border-b">General Physics II</td>
              <td className="py-2 px-4 border-b">Lecture Notes </td>
              <td className="py-2 px-4 border-b">Lecture Videos</td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b">4</td>
              <td className="py-2 px-4 border-b">General Physics III</td>
              <td className="py-2 px-4 border-b">Lecture Notes </td>
              <td className="py-2 px-4 border-b">Lecture Videos</td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b">5</td>
              <td className="py-2 px-4 border-b">General Physics IV</td>
              <td className="py-2 px-4 border-b">Lecture Notes </td>
              <td className="py-2 px-4 border-b">Lecture Videos</td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b">6</td>
              <td className="py-2 px-4 border-b">Mathematical Physics I</td>
              <td className="py-2 px-4 border-b">
                <a href="https://meysam-hassandoust.github.io/Mathematical%20Physics%20I.html">
                  Lecture Notes
                </a>{" "}
              </td>
              <td className="py-2 px-4 border-b">
                <a href="https://meysam-hassandoust.github.io/Mathematical%20Physics%20I%20video.html">
                  Lecture Videos
                </a>
              </td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b">7</td>
              <td className="py-2 px-4 border-b">Mathematical Physics II </td>
              <td className="py-2 px-4 border-b">Lecture Notes </td>
              <td className="py-2 px-4 border-b">
                <a href="https://meysam-hassandoust.github.io/Mathematical%20Physics%20II%20video.html">
                  Lecture Videos
                </a>
              </td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b">8</td>
              <td className="py-2 px-4 border-b">Analytical Mechanics I </td>
              <td className="py-2 px-4 border-b">Lecture Notes </td>
              <td className="py-2 px-4 border-b">Lecture Videos</td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b">9</td>
              <td className="py-2 px-4 border-b">Analytical Mechanics II</td>
              <td className="py-2 px-4 border-b">Lecture Notes </td>
              <td className="py-2 px-4 border-b">
                <a href="https://meysam-hassandoust.github.io/Analytical%20Mechanics%20II%20video.html">
                  Lecture Videos
                </a>
              </td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b">10</td>
              <td className="py-2 px-4 border-b">Quantum Mechanics I </td>
              <td className="py-2 px-4 border-b">
                <a href="https://meysam-hassandoust.github.io/Quantum%20Mechanics%20I.html">
                  Lecture Notes{" "}
                </a>{" "}
              </td>
              <td className="py-2 px-4 border-b">
                <a href="https://meysam-hassandoust.github.io/Quantum%20Mechanics%20I%20video.html">
                  Lecture Videos
                </a>
              </td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b">11</td>
              <td className="py-2 px-4 border-b">Quantum Mechanics II</td>
              <td className="py-2 px-4 border-b">
                <a href="https://meysam-hassandoust.github.io/Quantum%20Mechanics%20II.html">
                  Lecture Notes{" "}
                </a>{" "}
              </td>
              <td className="py-2 px-4 border-b">
                <a href="https://meysam-hassandoust.github.io/Quantum%20Mechanics%20II%20video.html">
                  Lecture Videos
                </a>
              </td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b">12</td>
              <td className="py-2 px-4 border-b">Quantum Mechanics III</td>
              <td className="py-2 px-4 border-b">Lecture Notes </td>
              <td className="py-2 px-4 border-b">
                <a href="https://meysam-hassandoust.github.io/Quantum%20Mechanics%20III%20video.html">
                  Lecture Videos
                </a>
              </td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b">13</td>
              <td className="py-2 px-4 border-b">Electromagnetism I</td>
              <td className="py-2 px-4 border-b">Lecture Notes </td>
              <td className="py-2 px-4 border-b">Lecture Videos</td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b">14</td>
              <td className="py-2 px-4 border-b">Electromagnetism II</td>
              <td className="py-2 px-4 border-b">Lecture Notes </td>
              <td className="py-2 px-4 border-b">Lecture Videos</td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b">15</td>
              <td className="py-2 px-4 border-b">
                Thermodynamics and Statistical Mechanics I
              </td>
              <td className="py-2 px-4 border-b">
                <a href="https://meysam-hassandoust.github.io/Thermodynamics%20and%20Statistical%20Mechanics%20I.html">
                  Lecture Notes
                </a>{" "}
              </td>
              <td className="py-2 px-4 border-b">Lecture Videos</td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b">16</td>
              <td className="py-2 px-4 border-b">
                Thermodynamics and Statistical Mechanics II
              </td>
              <td className="py-2 px-4 border-b">
                <a href="https://meysam-hassandoust.github.io/Thermodynamics%20and%20Statistical%20Mechanics%20II.html">
                  Lecture Notes{" "}
                </a>
              </td>
              <td className="py-2 px-4 border-b">Lecture Videos</td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b">17</td>
              <td className="py-2 px-4 border-b">Special Relativity</td>
              <td className="py-2 px-4 border-b">Lecture Notes </td>
              <td className="py-2 px-4 border-b">
                <a href="https://meysam-hassandoust.github.io/Special%20Relativity.html">
                  Lecture Videos
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <h1 className="mt-10 text-3xl font-bold">Master's courses</h1>

        <table className=" mt-10 min-w-full bg-white border border-gray-300 shadow-md rounded-md">
          <thead>
            <tr>
              <th className="py-2  border-b">number</th>
              <th className="py-2  border-b">Bachelor's courses</th>
              <th className="py-2  border-b">Lecture Notes</th>
              <th className="py-2  border-b">Lecture Videos</th>
            </tr>
          </thead>

          <tr>
            <td className="py-2 px-4 border-b">2</td>
            <td className="py-2 px-4 border-b">Advanced Electrodynamics I </td>
            <td className="py-2 px-4 border-b">Lecture Notes </td>
            <td className="py-2 px-4 border-b">
              <a href="https://meysam-hassandoust.github.io/Advanced%20Electrodynamics%20I%20video.html">
                Lecture Videos
              </a>
            </td>
          </tr>

          <tr>
            <td className="py-2 px-4 border-b">3</td>
            <td className="py-2 px-4 border-b">Advanced Electrodynamics II </td>
            <td className="py-2 px-4 border-b">Lecture </td>
            <td className="py-2 px-4 border-b">
              <a href="https://meysam-hassandoust.github.io/Advanced%20Electrodynamics%20II%20video.html">
                Lecture Videos
              </a>
            </td>
          </tr>

          <tr>
            <td className="py-2 px-4 border-b">4</td>
            <td className="py-2 px-4 border-b">
              SpeciAdvanced Quantum Mechanics I al{" "}
            </td>
            <td className="py-2 px-4 border-b">Lecture </td>
            <td className="py-2 px-4 border-b">Lecture Videos</td>
          </tr>

          <tr>
            <td className="py-2 px-4 border-b">5</td>
            <td className="py-2 px-4 border-b">
              Advanced Quantum Mechanics II{" "}
            </td>
            <td className="py-2 px-4 border-b">Lecture </td>
            <td className="py-2 px-4 border-b">
              <a href="https://meysam-hassandoust.github.io/Advanced%20Quantum%20Mechanics%20II%20video.html">
                Lecture Videos{" "}
              </a>
            </td>
          </tr>

          <tr>
            <td className="py-2 px-4 border-b">6</td>
            <td className="py-2 px-4 border-b">
              Advanced Statistical Mechanics I{" "}
            </td>
            <td className="py-2 px-4 border-b">Lecture </td>
            <td className="py-2 px-4 border-b">Lecture Videos</td>
          </tr>

          <tr>
            <td className="py-2 px-4 border-b">7</td>
            <td className="py-2 px-4 border-b">
              Advanced Statistical Mechanics II{" "}
            </td>
            <td className="py-2 px-4 border-b">Lecture </td>
            <td className="py-2 px-4 border-b">Lecture Videos</td>
          </tr>

          <tr>
            <td className="py-2 px-4 border-b">8</td>
            <td className="py-2 px-4 border-b">Gravity I </td>
            <td className="py-2 px-4 border-b">Lecture </td>
            <td className="py-2 px-4 border-b">Lecture Videos </td>
          </tr>

          <tr>
            <td className="py-2 px-4 border-b">9</td>
            <td className="py-2 px-4 border-b">Gravity II </td>
            <td className="py-2 px-4 border-b">Lecture </td>
            <td className="py-2 px-4 border-b">Lecture Videos </td>
          </tr>

          <tr>
            <td className="py-2 px-4 border-b">10</td>
            <td className="py-2 px-4 border-b">Cosmology I </td>
            <td className="py-2 px-4 border-b">Lecture </td>
            <td className="py-2 px-4 border-b">
              <a href="https://meysam-hassandoust.github.io/Cosmology%20I%20video.html">
                Lecture Videos{" "}
              </a>
            </td>
          </tr>

          <tr>
            <td className="py-2 px-4 border-b">11</td>
            <td className="py-2 px-4 border-b">Cosmology II </td>
            <td className="py-2 px-4 border-b">Lecture </td>
            <td className="py-2 px-4 border-b">Lecture Videos</td>
          </tr>

          <tr>
            <td className="py-2 px-4 border-b">12</td>
            <td className="py-2 px-4 border-b">Quantum Field Theory I </td>
            <td className="py-2 px-4 border-b">Lecture </td>
            <td className="py-2 px-4 border-b">Lecture Videos</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">13</td>
            <td className="py-2 px-4 border-b">Quantum Field Theory II </td>
            <td className="py-2 px-4 border-b">Lecture </td>
            <td className="py-2 px-4 border-b">Lecture Videos </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">14</td>
            <td className="py-2 px-4 border-b">Quantum Field Theory III </td>
            <td className="py-2 px-4 border-b">Lecture </td>
            <td className="py-2 px-4 border-b">Lecture Videos </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">15</td>
            <td className="py-2 px-4 border-b">
              Advanced Fundamental Particles{" "}
            </td>
            <td className="py-2 px-4 border-b">Lecture </td>
            <td className="py-2 px-4 border-b">
              <a className="https://meysam-hassandoust.github.io/Advanced%20Fundamental%20Particles.html">
                Lecture Videos
              </a>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">16</td>
            <td className="py-2 px-4 border-b">Geometry and Topology I </td>
            <td className="py-2 px-4 border-b">Lecture </td>
            <td className="py-2 px-4 border-b">Lecture Videos </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">17</td>
            <td className="py-2 px-4 border-b">Geometry and Topology II </td>
            <td className="py-2 px-4 border-b">Lecture </td>
            <td className="py-2 px-4 border-b">Lecture Videos </td>
          </tr>

          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}
