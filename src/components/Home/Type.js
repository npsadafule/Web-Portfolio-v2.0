import { React,useEffect } from "react";
import Typewriter from "typewriter-effect";
{/*import { FaTerminal } from "react-icons/fa";*/} 

function Type() {
  useEffect(() => {
    const cursorElements = document.querySelectorAll('.Typewriter__cursor');
    cursorElements.forEach(el => {
      el.style.setProperty('color', '#39ff14', 'important');
    });
  }, []);
  
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}> {/* Container to align icon with text */}
      {/*<FaTerminal style={{ marginRight: '10px', color: "#39ff14" }} size="2em" />  Adjusted size of the icon */}
      <Typewriter
        options={{
          strings: [
            "Web/App Developer",
            "Operations Researcher",
            "Data Analyst",
            "UX/UI Designer",
            "Coding Enthusiast",
            "Cinematographer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
