import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import LandingInstructions from "./Layout/LandingInstructions.js";
import JavaScriptArrayMethods from "./Categories/JavaScriptArrayMethods";
import HTTPRequestMethods from "./Categories/HTTPRequestMethods";
import JavaScriptErrorTypes from "./Categories/JavaScriptErrorTypes";
import PGPromiseQueryMethods from "./Categories/PGPromiseQueryMethods";
import ServerErrorHTTPStatusCodes from "./Categories/ServerErrorHTTPStatusCodes";
import ClientErrorHTTPStatusCodes from "./Categories/ClientErrorHTTPStatusCodes";
import RedirectionHTTPStatusCodes from "./Categories/RedirectionHTTPStatusCodes";
import JavaScriptTypes from "./Categories/JavaScriptTypes";
import InformationalAndSuccessHTTPStatusCodes from "./Categories/InformationalAndSuccessHTTPStatusCodes";
import PythonListMethods from "./Categories/PythonListMethods";
import JavaScriptMathMethods from "./Categories/JavaScriptMathMethods";
import PythonErrorTypes from "./Categories/PythonErrorTypes";
import GitBasics from "./Categories/GitBasics";
import CLIBasics from "./Categories/CLIBasics";
import SQLKeywords from "./Categories/SQLKeywords";
import JavaScriptStringMethods from "./Categories/JavaScriptStringMethods";
import SortingAlgorithms from "./Categories/SortingAlgorithms";
import JavaScriptDateMethodsAndProperties from "./Categories/JavaScriptDateMethodsAndProperties";
import Vocab from "./Categories/Vocab";
import VanillaJavaScript from "./Categories/VanillaJavaScript.js";
import Redux from "./Categories/Redux";
import ReactJS from "./Categories/ReactJS";
import HTMLBasics from "./Categories/HTMLBasics";
import CSS from "./Categories/CSS";
import FooterScore from "./Layout/FooterScore.js";

const App = () => {
  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");
  const [category3, setCategory3] = useState("");
  const [category4, setCategory4] = useState("");
  const [category5, setCategory5] = useState("");
  const [category6, setCategory6] = useState("");
  const [displayState, setDisplayState] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  let catArr = [];

  let c1 = category1;
  let c2 = category2;
  let c3 = category3;
  let c4 = category4;
  let c5 = category5;
  let c6 = category6;

  let jam = "javascript_array_methods";
  let hrm = "http_request_methods";
  let jet = "javascript_error_types";
  let pgp = "pg_promise_query_methods";
  let sehsc = "server_error_http_status_codes";
  let cehsc = "client_error_http_status_codes";
  let rhsc = "redirection_http_status_codes";
  let jt = "javascript_types";
  let ishsc = "informational_and_success_http_status_codes";
  let plm = "python_list_methods";
  let jmm = "javascript_math_methods";
  let pet = "python_error_types";
  let git101 = "git_basics";
  let cli101 = "cli_basics";
  let sqlk = "sql_keywords";
  let jsm = "javascript_string_methods";
  let sa = "sorting_algorithms";
  let jdmap = "javascript_date_methods_and_properties";
  let css = "css";
  let hb = "html_basics";
  let rjs = "react";
  let rx = "redux";
  let vjs = "vanilla_javascript";
  let vb = "vocab";

  const handleSelect = (e) => {
    const olCategories = document.getElementById("ol-selected-category");
    const li = document.createElement("li");
    let val = e.target.value;

    if (catArr.length < 7 && !catArr.includes(val)) {
      catArr.push(val);

      if (val === css) {
        let val = "CSS";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === hb) {
        let val = "HTML Basics";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === rjs) {
        let val = "React";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === rx) {
        let val = "Redux";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === vjs) {
        let val = "Vanilla JavaScript";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === vb) {
        let val = "Vocab";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === jam) {
        let val = "JavaScript Array Methods";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === jdmap) {
        let val = "JavaScript Date Methods & Properties";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === sa) {
        let val = "Sorting Algorithms";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === jsm) {
        let val = "JavaScript String Methods";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === sqlk) {
        let val = "SQL Keywords";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === cli101) {
        let val = "CLI Basics";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === git101) {
        let val = "Git Basics";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === plm) {
        let val = "Python List Methods";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === jmm) {
        let val = "JavaScript Math Methods";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === pet) {
        let val = "Python Error Types";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === hrm) {
        let val = "HTTP Request Methods";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === jet) {
        let val = "JavaScript Error Types";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === pgp) {
        let val = "PG Promise Query Methods";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === sehsc) {
        let val = "Server Error HTTP Status Codes";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === cehsc) {
        let val = "Client Error HTTP Status Codes";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === rhsc) {
        let val = "Redirection Error HTTP Status Codes";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === jt) {
        let val = "JavaScript Types";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
      if (val === ishsc) {
        let val = "Informational & Success HTTP Status Codes";
        li.innerText = `${val}.   `;
        olCategories.appendChild(li);
      }
    }

    console.log(catArr);
    if (catArr.length === 6) {
      setCategory1(catArr[0]);
      setCategory2(catArr[1]);
      setCategory3(catArr[2]);
      setCategory4(catArr[3]);
      setCategory5(catArr[4]);
      setCategory6(catArr[5]);
      setIsDisabled(true);
      setIsHidden(false);
    }
  };

  const clearSelection = () => {
    setCategory1("");
    setCategory2("");
    setCategory3("");
    setCategory4("");
    setCategory5("");
    setCategory6("");
  };

  const handleStartGame = () => {
    setDisplayState(2);
  };

  const finalSelection = () => {
    // CSS
    if (c1 === css) {
      c1 = <CSS />;
    }
    if (c2 === css) {
      c2 = <CSS />;
    }
    if (c3 === css) {
      c3 = <CSS />;
    }
    if (c4 === css) {
      c4 = <CSS />;
    }
    if (c5 === css) {
      c5 = <CSS />;
    }
    if (c6 === css) {
      c6 = <CSS />;
    }
    // HTML Basics
    if (c1 === hb) {
      c1 = <HTMLBasics />;
    }
    if (c2 === hb) {
      c2 = <HTMLBasics />;
    }
    if (c3 === hb) {
      c3 = <HTMLBasics />;
    }
    if (c4 === hb) {
      c4 = <HTMLBasics />;
    }
    if (c5 === hb) {
      c5 = <HTMLBasics />;
    }
    if (c6 === hb) {
      c6 = <HTMLBasics />;
    }
    // Vocab
    if (c1 === vb) {
      c1 = <Vocab />;
    }
    if (c2 === vb) {
      c2 = <Vocab />;
    }
    if (c3 === vb) {
      c3 = <Vocab />;
    }
    if (c4 === vb) {
      c4 = <Vocab />;
    }
    if (c5 === vb) {
      c5 = <Vocab />;
    }
    if (c6 === vb) {
      c6 = <Vocab />;
    }
    // Vanilla JavaScript
    if (c1 === vjs) {
      c1 = <VanillaJavaScript />;
    }
    if (c2 === vjs) {
      c2 = <VanillaJavaScript />;
    }
    if (c3 === vjs) {
      c3 = <VanillaJavaScript />;
    }
    if (c4 === vjs) {
      c4 = <VanillaJavaScript />;
    }
    if (c5 === vjs) {
      c5 = <VanillaJavaScript />;
    }
    if (c6 === vjs) {
      c6 = <VanillaJavaScript />;
    }
    // Redux
    if (c1 === rx) {
      c1 = <Redux />;
    }
    if (c2 === rx) {
      c2 = <Redux />;
    }
    if (c3 === rx) {
      c3 = <Redux />;
    }
    if (c4 === rx) {
      c4 = <Redux />;
    }
    if (c5 === rx) {
      c5 = <Redux />;
    }
    if (c6 === rx) {
      c6 = <Redux />;
    }
    // React
    if (c1 === rjs) {
      c1 = <ReactJS />;
    }
    if (c2 === rjs) {
      c2 = <ReactJS />;
    }
    if (c3 === rjs) {
      c3 = <ReactJS />;
    }
    if (c4 === rjs) {
      c4 = <ReactJS />;
    }
    if (c5 === rjs) {
      c5 = <ReactJS />;
    }
    if (c6 === rjs) {
      c6 = <ReactJS />;
    }
    // Git Basics
    if (c1 === git101) {
      c1 = <GitBasics />;
    }
    if (c2 === git101) {
      c2 = <GitBasics />;
    }
    if (c3 === git101) {
      c3 = <GitBasics />;
    }
    if (c4 === git101) {
      c4 = <GitBasics />;
    }
    if (c5 === git101) {
      c5 = <GitBasics />;
    }
    if (c6 === git101) {
      c6 = <GitBasics />;
    }
    // CLI Basics
    if (c1 === cli101) {
      c1 = <CLIBasics />;
    }
    if (c2 === cli101) {
      c2 = <CLIBasics />;
    }
    if (c3 === cli101) {
      c3 = <CLIBasics />;
    }
    if (c4 === cli101) {
      c4 = <CLIBasics />;
    }
    if (c5 === cli101) {
      c5 = <CLIBasics />;
    }
    if (c6 === cli101) {
      c6 = <CLIBasics />;
    }
    // SQL Keywords
    if (c1 === sqlk) {
      c1 = <SQLKeywords />;
    }
    if (c2 === sqlk) {
      c2 = <SQLKeywords />;
    }
    if (c3 === sqlk) {
      c3 = <SQLKeywords />;
    }
    if (c4 === sqlk) {
      c4 = <SQLKeywords />;
    }
    if (c5 === sqlk) {
      c5 = <SQLKeywords />;
    }
    if (c6 === sqlk) {
      c6 = <SQLKeywords />;
    }
    // JavaScript String Methods
    if (c1 === jsm) {
      c1 = <JavaScriptStringMethods />;
    }
    if (c2 === jsm) {
      c2 = <JavaScriptStringMethods />;
    }
    if (c3 === jsm) {
      c3 = <JavaScriptStringMethods />;
    }
    if (c4 === jsm) {
      c4 = <JavaScriptStringMethods />;
    }
    if (c5 === jsm) {
      c5 = <JavaScriptStringMethods />;
    }
    if (c6 === jsm) {
      c6 = <JavaScriptStringMethods />;
    }
    // Sorting Algorithm
    if (c1 === sa) {
      c1 = <SortingAlgorithms />;
    }
    if (c2 === sa) {
      c2 = <SortingAlgorithms />;
    }
    if (c3 === sa) {
      c3 = <SortingAlgorithms />;
    }
    if (c4 === sa) {
      c4 = <SortingAlgorithms />;
    }
    if (c5 === sa) {
      c5 = <SortingAlgorithms />;
    }
    if (c6 === sa) {
      c6 = <SortingAlgorithms />;
    }
    // JavaScript Date Methods & Properties
    if (c1 === jdmap) {
      c1 = <JavaScriptDateMethodsAndProperties />;
    }
    if (c2 === jdmap) {
      c2 = <JavaScriptDateMethodsAndProperties />;
    }
    if (c3 === jdmap) {
      c3 = <JavaScriptDateMethodsAndProperties />;
    }
    if (c4 === jdmap) {
      c4 = <JavaScriptDateMethodsAndProperties />;
    }
    if (c5 === jdmap) {
      c5 = <JavaScriptDateMethodsAndProperties />;
    }
    if (c6 === jdmap) {
      c6 = <JavaScriptDateMethodsAndProperties />;
    }
    // JavaScript Array Methods
    if (c1 === jam) {
      c1 = <JavaScriptArrayMethods />;
    }
    if (c2 === jam) {
      c2 = <JavaScriptArrayMethods />;
    }
    if (c3 === jam) {
      c3 = <JavaScriptArrayMethods />;
    }
    if (c4 === jam) {
      c4 = <JavaScriptArrayMethods />;
    }
    if (c5 === jam) {
      c5 = <JavaScriptArrayMethods />;
    }
    if (c6 === jam) {
      c6 = <JavaScriptArrayMethods />;
    }
    // HTTP Request Methods
    if (c1 === hrm) {
      c1 = <HTTPRequestMethods />;
    }
    if (c2 === hrm) {
      c2 = <HTTPRequestMethods />;
    }
    if (c3 === hrm) {
      c3 = <HTTPRequestMethods />;
    }
    if (c4 === hrm) {
      c4 = <HTTPRequestMethods />;
    }
    if (c5 === hrm) {
      c5 = <HTTPRequestMethods />;
    }
    if (c6 === hrm) {
      c6 = <HTTPRequestMethods />;
    }
    // JavaScript Error Types
    if (c1 === jet) {
      c1 = <JavaScriptErrorTypes />;
    }
    if (c2 === jet) {
      c2 = <JavaScriptErrorTypes />;
    }
    if (c3 === jet) {
      c3 = <JavaScriptErrorTypes />;
    }
    if (c4 === jet) {
      c4 = <JavaScriptErrorTypes />;
    }
    if (c5 === jet) {
      c5 = <JavaScriptErrorTypes />;
    }
    if (c6 === jet) {
      c6 = <JavaScriptErrorTypes />;
    }
    // PG Promise Query Methods
    if (c1 === pgp) {
      c1 = <PGPromiseQueryMethods />;
    }
    if (c2 === pgp) {
      c2 = <PGPromiseQueryMethods />;
    }
    if (c3 === pgp) {
      c3 = <PGPromiseQueryMethods />;
    }
    if (c4 === pgp) {
      c4 = <PGPromiseQueryMethods />;
    }
    if (c5 === pgp) {
      c5 = <PGPromiseQueryMethods />;
    }
    if (c6 === pgp) {
      c6 = <PGPromiseQueryMethods />;
    }
    // Server Error HTTP Status Codes
    if (c1 === sehsc) {
      c1 = <ServerErrorHTTPStatusCodes />;
    }
    if (c2 === sehsc) {
      c2 = <ServerErrorHTTPStatusCodes />;
    }
    if (c3 === sehsc) {
      c3 = <ServerErrorHTTPStatusCodes />;
    }
    if (c4 === sehsc) {
      c4 = <ServerErrorHTTPStatusCodes />;
    }
    if (c5 === sehsc) {
      c5 = <ServerErrorHTTPStatusCodes />;
    }
    if (c6 === sehsc) {
      c6 = <ServerErrorHTTPStatusCodes />;
    }
    // Client Error HTTP Status Codes
    if (c1 === cehsc) {
      c1 = <ClientErrorHTTPStatusCodes />;
    }
    if (c2 === cehsc) {
      c2 = <ClientErrorHTTPStatusCodes />;
    }
    if (c3 === cehsc) {
      c3 = <ClientErrorHTTPStatusCodes />;
    }
    if (c4 === cehsc) {
      c4 = <ClientErrorHTTPStatusCodes />;
    }
    if (c5 === cehsc) {
      c5 = <ClientErrorHTTPStatusCodes />;
    }
    if (c6 === cehsc) {
      c6 = <ClientErrorHTTPStatusCodes />;
    }
    // Redirection HTTP Status Codes
    if (c1 === rhsc) {
      c1 = <RedirectionHTTPStatusCodes />;
    }
    if (c2 === rhsc) {
      c2 = <RedirectionHTTPStatusCodes />;
    }
    if (c3 === rhsc) {
      c3 = <RedirectionHTTPStatusCodes />;
    }
    if (c4 === rhsc) {
      c4 = <RedirectionHTTPStatusCodes />;
    }
    if (c5 === rhsc) {
      c5 = <RedirectionHTTPStatusCodes />;
    }
    if (c6 === rhsc) {
      c6 = <RedirectionHTTPStatusCodes />;
    }
    // JavaScript Types
    if (c1 === jt) {
      c1 = <JavaScriptTypes />;
    }
    if (c2 === jt) {
      c2 = <JavaScriptTypes />;
    }
    if (c3 === jt) {
      c3 = <JavaScriptTypes />;
    }
    if (c4 === jt) {
      c4 = <JavaScriptTypes />;
    }
    if (c5 === jt) {
      c5 = <JavaScriptTypes />;
    }
    if (c6 === jt) {
      c6 = <JavaScriptTypes />;
    }
    // Informational And Success HTTP Status Codes
    if (c1 === ishsc) {
      c1 = <InformationalAndSuccessHTTPStatusCodes />;
    }
    if (c2 === ishsc) {
      c2 = <InformationalAndSuccessHTTPStatusCodes />;
    }
    if (c3 === ishsc) {
      c3 = <InformationalAndSuccessHTTPStatusCodes />;
    }
    if (c4 === ishsc) {
      c4 = <InformationalAndSuccessHTTPStatusCodes />;
    }
    if (c5 === ishsc) {
      c5 = <InformationalAndSuccessHTTPStatusCodes />;
    }
    if (c6 === ishsc) {
      c6 = <InformationalAndSuccessHTTPStatusCodes />;
    }
    // Python List Methods
    if (c1 === plm) {
      c1 = <PythonListMethods />;
    }
    if (c2 === plm) {
      c2 = <PythonListMethods />;
    }
    if (c3 === plm) {
      c3 = <PythonListMethods />;
    }
    if (c4 === plm) {
      c4 = <PythonListMethods />;
    }
    if (c5 === plm) {
      c5 = <PythonListMethods />;
    }
    if (c6 === plm) {
      c6 = <PythonListMethods />;
    }
    // JavaScript Math Methods
    if (c1 === jmm) {
      c1 = <JavaScriptMathMethods />;
    }
    if (c2 === jmm) {
      c2 = <JavaScriptMathMethods />;
    }
    if (c3 === jmm) {
      c3 = <JavaScriptMathMethods />;
    }
    if (c4 === jmm) {
      c4 = <JavaScriptMathMethods />;
    }
    if (c5 === jmm) {
      c5 = <JavaScriptMathMethods />;
    }
    if (c6 === jmm) {
      c6 = <JavaScriptMathMethods />;
    }
    // Python Error Types
    if (c1 === pet) {
      c1 = <PythonErrorTypes />;
    }
    if (c2 === pet) {
      c2 = <PythonErrorTypes />;
    }
    if (c3 === pet) {
      c3 = <PythonErrorTypes />;
    }
    if (c4 === pet) {
      c4 = <PythonErrorTypes />;
    }
    if (c5 === pet) {
      c5 = <PythonErrorTypes />;
    }
    if (c6 === pet) {
      c6 = <PythonErrorTypes />;
    }
  };

  finalSelection();

  const displayCategoryPageFunc = () => {
    setDisplayState(1);
  };

  if (displayState === 0) {
    return (
      <div>
        <h1 id="landing-heading">Flash-Flip</h1>
        <LandingInstructions />

        <div id="landing-page-div">
          <button id="landing-page-button" onClick={displayCategoryPageFunc}>
            Click Here to See Category Options
          </button>
        </div>
      </div>
    );
  }
  if (displayState === 1) {
    return (
      <>
        <Form id="form-categories">
          <div id="custom-control custom-checkbox" key="checkbox">
            <h2 id="category-heading">Categories</h2>
            <h2 id="category-instructions">
              <span id="category-instructions-span">
                Select 6 categories from the choices below:
              </span>
            </h2>

            <Row>
              <Col id="column1">
                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="client_error_http_status_codes"
                  />
                  <Form.Check.Label id="label1">
                    Client Error HTTP Status Codes
                  </Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="cli_basics"
                  />
                  <Form.Check.Label id="label2">CLI Basics</Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="css"
                  />
                  <Form.Check.Label id="label19">CSS</Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="git_basics"
                  />
                  <Form.Check.Label id="label3">Git Basics</Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="html_basics"
                  />
                  <Form.Check.Label id="label20">HTML Basics</Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="http_request_methods"
                  />
                  <Form.Check.Label id="label4">
                    HTTP Request Methods
                  </Form.Check.Label>
                </Form.Check>
              </Col>

              <Col id="column2">
                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="informational_and_success_http_status_codes"
                  />
                  <Form.Check.Label id="label5">
                    Informational & Success HTTP Status Codes
                  </Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="javascript_array_methods"
                    id="cb-1"
                  />
                  <Form.Check.Label id="label6">
                    JavaScript Array Methods
                  </Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="javascript_date_methods_and_properties"
                  />
                  <Form.Check.Label id="label7">
                    JavaScript Date Methods & Properties
                  </Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="javascript_error_types"
                  />
                  <Form.Check.Label id="label8">
                    JavaScript Error Types
                  </Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="javascript_math_methods"
                  />
                  <Form.Check.Label id="label9">
                    JavaScript Math Methods
                  </Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="javascript_string_methods"
                    id="cb-1"
                  />
                  <Form.Check.Label id="label10">
                    JavaScript String Methods
                  </Form.Check.Label>
                </Form.Check>
              </Col>

              <Col id="column3">
                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="javascript_types"
                  />
                  <Form.Check.Label id="label11">
                    JavaScript Types
                  </Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="pg_promise_query_methods"
                  />
                  <Form.Check.Label id="label12">
                    PG Promise Query Methods
                  </Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="python_error_types"
                  />
                  <Form.Check.Label id="label13">
                    Python Error Types
                  </Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="python_list_methods"
                  />
                  <Form.Check.Label id="label14">
                    Python List Methods
                  </Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="react"
                  />
                  <Form.Check.Label id="label21">React</Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="redirection_http_status_codes"
                  />
                  <Form.Check.Label id="label15">
                    Redirection HTTP Status Codes
                  </Form.Check.Label>
                </Form.Check>
              </Col>

              <Col id="column4">
                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="redux"
                  />
                  <Form.Check.Label id="label22">Redux</Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="server_error_http_status_codes"
                  />
                  <Form.Check.Label id="label16">
                    Server Error HTTP Status Codes
                  </Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="sorting_algorithms"
                  />
                  <Form.Check.Label id="label17">
                    Sorting Algorithms
                  </Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="sql_keywords"
                  />
                  <Form.Check.Label id="label18">SQL Keywords</Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="vanilla_javascript"
                  />
                  <Form.Check.Label id="label23">
                    Vanilla JavaScript
                  </Form.Check.Label>
                </Form.Check>

                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    disabled={isDisabled}
                    onClick={handleSelect}
                    value="vocab"
                  />
                  <Form.Check.Label id="label24">Vocab</Form.Check.Label>
                </Form.Check>
              </Col>
            </Row>
            <Row>
              <Col id="space-holder"></Col>

              <Col id="selected-categories-column">
                <ol id="ol-selected-category">
                  <h1>Selected Categories:</h1>
                </ol>
              </Col>
              <Col id="space-holder"></Col>
            </Row>
          </div>
          <div id="start-btn-div">
            <button id="reset-btn" hidden={isHidden} onClick={clearSelection}>
              Reset
            </button>
            <button
              id="start-game-btn"
              hidden={isHidden}
              onClick={handleStartGame}
            >
              Start Game!
            </button>
          </div>
        </Form>
      </>
    );
  }
  if (displayState === 2) {
    return (
      <>
        <Container id="game-layout">
          <Row>
            <Col id="component-col-one">{c1}</Col>
            <Col id="component-col-two">{c2}</Col>
            <Col id="component-col-three">{c3}</Col>
            <Col id="component-col-four">{c4}</Col>
            <Col id="component-col-five">{c5}</Col>
            <Col id="component-col-six">{c6}</Col>
          </Row>
        </Container>
        <FooterScore />
      </>
    );
  } else {
    return (
      <h1>
        Well, that's embarassing. There has been an error, but we will fix it as
        soon as possible.
      </h1>
    );
  }
};

export default App;
