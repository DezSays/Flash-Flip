import React, { useState, useEffect } from "react";
import Stack from "react-bootstrap/Stack";

const HTTPRequestMethods = () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
  }

  const [q1, setQ1] = useState("");
  const [userInput, setUserInput] = useState("");
  const [a1, setA1] = useState("");
  const [q2, setQ2] = useState("");
  const [a2, setA2] = useState("");
  const [q3, setQ3] = useState("");
  const [a3, setA3] = useState("");
  const [q4, setQ4] = useState("");
  const [a4, setA4] = useState("");
  const [q5, setQ5] = useState("");
  const [a5, setA5] = useState("");
  const [display, setDisplay] = useState(0);
  const [isDisabled1, setIsDisabled1] = useState(false);
  const [isDisabled2, setIsDisabled2] = useState(false);
  const [isDisabled3, setIsDisabled3] = useState(false);
  const [isDisabled4, setIsDisabled4] = useState(false);
  const [isDisabled5, setIsDisabled5] = useState(false);
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [color4, setColor4] = useState("");
  const [color5, setColor5] = useState("");
  const [clicked1, setClicked1] = useState("");
  const [clicked2, setClicked2] = useState("");
  const [clicked3, setClicked3] = useState("");
  const [clicked4, setClicked4] = useState("");
  const [clicked5, setClicked5] = useState("");

  const getData = async () => {
    const dataFetch = await fetch(`https://dezsays.github.io/API/data.json`);

    const data = await dataFetch.json();

    let idx1 = getRandomInt(0, 1);

    const lvl1 = data.http_request_methods.level[0].one[`${idx1}`];
    const question1 = lvl1.question;
    const answer1 = lvl1.answer;

    console.log(lvl1)
    setQ1(question1);
    setA1(answer1);

    // ***********************************************


    const lvl2 = data.http_request_methods.level[1].two[0];
    const question2 = lvl2.question;
    const answer2 = lvl2.answer;

    setQ2(question2);
    setA2(answer2);

    // ***********************************************

    const lvl3 = data.http_request_methods.level[2].three[0];
    const question3 = lvl3.question;
    const answer3 = lvl3.answer;

    setQ3(question3);
    setA3(answer3);

    // ***********************************************

    const lvl4 = data.http_request_methods.level[3].four[0];
    const question4 = lvl4.question;
    const answer4 = lvl4.answer;

    setQ4(question4);
    setA4(answer4);

    // ***********************************************

    let idx5 = getRandomInt(0, 3);

    const lvl5 = data.http_request_methods.level[4].five[`${idx5}`];
    const question5 = lvl5.question;
    const answer5 = lvl5.answer;

    setQ5(question5);
    setA5(answer5);

    // ***********************************************
  };

  useEffect(() => {
    getData();
  }, []);

  function searchKeyPress(e) {
    e = e || window.event;
    if (e.keyCode === 13) {
      //13 is the key code for enter
      document.getElementById("user-input-submit").click();
      return false;
    }
    return true;
  }

  const handleClick1 = (e) => {
    setDisplay(1);
    setIsDisabled1(true);
    setClicked1("clicked-one");
  };

  const handleClick2 = (e) => {
    setDisplay(2);
    setIsDisabled2(true);
    setClicked2("clicked-two");
  };

  const handleClick3 = (e) => {
    setDisplay(3);
    setIsDisabled3(true);
    setClicked3("clicked-three");
  };

  const handleClick4 = (e) => {
    setDisplay(4);
    setIsDisabled4(true);
    setClicked4("clicked-four");
  };

  const handleClick5 = (e) => {
    setDisplay(5);
    setIsDisabled5(true);
    setClicked5("clicked-five");
  };

  const handleClickQ = (e) => {
    if (clicked1 === "clicked-one") {
      if (userInput.toLowerCase() === a1.toLowerCase()) {
        console.log("correct answer");
        setDisplay(0);
        setColor1("#228B22");
        setClicked1("complete-click");
      } else {
        console.log(`incorrect, the correct answer is ${a1}`);
        setDisplay(0);
        setColor1("#9B1003");
        setClicked1("complete-click");
      }
    }
    if (clicked2 === "clicked-two") {
      if (userInput.toLowerCase() === a2.toLowerCase()) {
        console.log("correct answer");
        setDisplay(0);
        setColor2("#228B22");
        setClicked2("complete-click");
      } else {
        console.log(`incorrect, the correct answer is ${a2}`);
        setDisplay(0);
        setColor2("#9B1003");
        setClicked2("complete-click");
      }
    }
    if (clicked3 === "clicked-three") {
      if (userInput.toLowerCase() === a3.toLowerCase()) {
        console.log("correct answer");
        setDisplay(0);
        setColor3("#228B22");
        setClicked3("complete-click");
      } else {
        console.log(`incorrect, the correct answer is ${a3}`);
        setDisplay(0);
        setColor3("#9B1003");
        setClicked3("complete-click");
      }
    }
    if (clicked4 === "clicked-four") {
      if (userInput.toLowerCase() === a4.toLowerCase()) {
        console.log("correct answer");
        setDisplay(0);
        setColor4("#228B22");
        setClicked4("complete-click");
      } else {
        console.log(`incorrect, the correct answer is ${a4}`);
        setDisplay(0);
        setColor4("#9B1003");
        setClicked4("complete-click");
      }
    }
    if (clicked5 === "clicked-five") {
      if (userInput.toLowerCase() === a5.toLowerCase()) {
        console.log("correct answer");
        setDisplay(0);
        setColor5("#228B22");
        setClicked5("complete-click");
      } else {
        console.log(`incorrect, the correct answer is ${a5}`);
        setDisplay(0);
        setColor5("#9B1003");
        setClicked5("complete-click");
      }
    }
  };

  if (display === 0) {
    return (
      <>
        <Stack gap={2}>
          <button>HTTP Request Methods</button>
          <button
            id="q1-button"
            onClick={handleClick1}
            disabled={isDisabled1}
            style={{ backgroundColor: `${color1}` }}
            value={clicked1}
          >
            $100
          </button>
          <button
            onClick={handleClick2}
            disabled={isDisabled2}
            style={{ backgroundColor: `${color2}` }}
            value={clicked2}
          >
            $200
          </button>
          <button
            onClick={handleClick3}
            disabled={isDisabled3}
            style={{ backgroundColor: `${color3}` }}
            value={clicked3}
          >
            $300
          </button>
          <button
            onClick={handleClick4}
            disabled={isDisabled4}
            style={{ backgroundColor: `${color4}` }}
            value={clicked4}
          >
            $400
          </button>
          <button
            onClick={handleClick5}
            disabled={isDisabled5}
            style={{ backgroundColor: `${color5}` }}
            value={clicked5}
          >
            $500
          </button>
        </Stack>
      </>
    );
  }
  if (display === 1) {
    return (
      <>
        <div className="bg-light border" >{q1}</div>
        <div id="search-bar">
          <input
            type="text"
            placeholder="Answer"
            value={userInput}
            id="user-input"
            onChange={(e) => setUserInput(e.target.value)}
            onKeyUp={searchKeyPress}
          />
          <button type="submit" id="user-input-submit" onClick={handleClickQ}>
            Submit
          </button>
        </div>
      </>
    );
  }
  if (display === 2) {
    return (
      <>
        <div className="bg-light border">{q2}</div>
        <div id="search-bar">
          <input
            type="text"
            placeholder="Answer"
            value={userInput}
            id="user-input"
            onChange={(e) => setUserInput(e.target.value)}
            onKeyUp={searchKeyPress}
          />
          <button type="submit" id="user-input-submit" onClick={handleClickQ}>
            Submit
          </button>
        </div>
      </>
    );
  }
  if (display === 3) {
    return (
      <>
        <div className="bg-light border">{q3}</div>
        <div id="search-bar">
          <input
            type="text"
            placeholder="Answer"
            value={userInput}
            id="user-input"
            onChange={(e) => setUserInput(e.target.value)}
            onKeyUp={searchKeyPress}
          />
          <button type="submit" id="user-input-submit" onClick={handleClickQ}>
            Submit
          </button>
        </div>
      </>
    );
  }
  if (display === 4) {
    return (
      <>
        <div className="bg-light border">{q4}</div>
        <div id="search-bar">
          <input
            type="text"
            placeholder="Answer"
            value={userInput}
            id="user-input"
            onChange={(e) => setUserInput(e.target.value)}
            onKeyUp={searchKeyPress}
          />
          <button type="submit" id="user-input-submit" onClick={handleClickQ}>
            Submit
          </button>
        </div>
      </>
    );
  }
  if (display === 5) {
    return (
      <>
        <div className="bg-light border">{q5}</div>
        <div id="search-bar">
          <input
            type="text"
            placeholder="Answer"
            value={userInput}
            id="user-input"
            onChange={(e) => setUserInput(e.target.value)}
            onKeyUp={searchKeyPress}
          />
          <button type="submit" id="user-input-submit" onClick={handleClickQ}>
            Submit
          </button>
        </div>
      </>
    );
  }
};

export default HTTPRequestMethods;