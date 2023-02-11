import React, {useState} from "react";
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
import { useSelector} from 'react-redux'

const App = () => {
  const score = useSelector(state => state.score) 

  const [category1, setCategory1] = useState("")
  const [category2, setCategory2] = useState("")
  const [category3, setCategory3] = useState("")
  const [category4, setCategory4] = useState("")
  const [category5, setCategory5] = useState("")
  const [category6, setCategory6] = useState("")
  const [displayState, setDisplayState] = useState(0)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isHidden, setIsHidden] = useState(true)


  
  let catArr = []

  let c1 = category1
  let c2 = category2
  let c3 = category3
  let c4 = category4
  let c5 = category5
  let c6 = category6

    

  const handleSelect = (e) => {
    const ulCategories = document.getElementById('ul-selected-category')
    const li = document.createElement('li')
    let val = e.target.value

    if(catArr.length < 7 && !catArr.includes(val)){
      catArr.push(val)
      li.innerText = val
      ulCategories.appendChild(li)
  
    }


    console.log(catArr)
    if(catArr.length === 6){
      setCategory1(catArr[0])
      setCategory2(catArr[1])
      setCategory3(catArr[2])
      setCategory4(catArr[3])
      setCategory5(catArr[4])
      setCategory6(catArr[5])
      setIsDisabled(true)
      setIsHidden(false)
    }


  }

  const clearSelection = () => {
    setCategory1("")
    setCategory2("")
    setCategory3("")
    setCategory4("")
    setCategory5("")
    setCategory6("")

  }

  const handleStartGame = () => {
      setDisplayState(2)
  }

 const finalSelection = () => {
  let jam = 'javascript_array_methods'
  let hrm = 'http_request_methods'
  let jet = 'javascript_error_types'
  let pgp = 'pg_promise_query_methods'
  let sehsc = 'server_error_http_status_codes'
  let cehsc = 'client_error_http_status_codes'
  let rhsc = 'redirection_http_status_codes'
  let jt = 'javascript_types'
  let ishsc = 'informational_and_success_http_status_codes'
  let plm = 'python_list_methods'
  let jmm = 'javascript_math_methods'
  let pet = 'python_error_types'


  // JavaScript Array Methods
  if(c1 === jam){
    c1 = <JavaScriptArrayMethods />
  }
  if(c2 === jam){
    c2 = <JavaScriptArrayMethods />
  }
  if(c3 === jam){
    c3 = <JavaScriptArrayMethods />
  }
  if(c4 === jam){
    c4 = <JavaScriptArrayMethods />
  }
  if(c5 === jam){
    c5 = <JavaScriptArrayMethods />
  }
  if(c6 === jam){
    c6 = <JavaScriptArrayMethods />
  }
// HTTP Request Methods
  if(c1 === hrm){
    c1 = <HTTPRequestMethods />
  }
  if(c2 === hrm){
    c2 = <HTTPRequestMethods />
  }
  if(c3 === hrm){
    c3 = <HTTPRequestMethods />
  }
  if(c4 === hrm){
    c4 = <HTTPRequestMethods />
  }
  if(c5 === hrm){
    c5 = <HTTPRequestMethods />
  }
  if(c6 === hrm){
    c6 = <HTTPRequestMethods />
  }
// JavaScript Error Types
  if(c1 === jet){
    c1 = <JavaScriptErrorTypes />
  }
  if(c2 === jet){
    c2 = <JavaScriptErrorTypes />
  }
  if(c3 === jet){
    c3 = <JavaScriptErrorTypes />
  }
  if(c4 === jet){
    c4 = <JavaScriptErrorTypes />
  }
  if(c5 === jet){
    c5 = <JavaScriptErrorTypes />
  }
  if(c6 === jet){
    c6 = <JavaScriptErrorTypes />
  }
// PG Promise Query Methods
  if(c1 === pgp){
    c1 = <PGPromiseQueryMethods />
  }
  if(c2 === pgp){
    c2 = <PGPromiseQueryMethods />
  }
  if(c3 === pgp){
    c3 = <PGPromiseQueryMethods />
  }
  if(c4 === pgp){
    c4 = <PGPromiseQueryMethods />
  }
  if(c5 === pgp){
    c5 = <PGPromiseQueryMethods />
  }
  if(c6 === pgp){
    c6 = <PGPromiseQueryMethods />
  }
// Server Error HTTP Status Codes
  if(c1 === sehsc){
    c1 = <ServerErrorHTTPStatusCodes />
  }
  if(c2 === sehsc){
    c2 = <ServerErrorHTTPStatusCodes />
  }
  if(c3 === sehsc){
    c3 = <ServerErrorHTTPStatusCodes />
  }
  if(c4 === sehsc){
    c4 = <ServerErrorHTTPStatusCodes />
  }
  if(c5 === sehsc){
    c5 = <ServerErrorHTTPStatusCodes />
  }
  if(c6 === sehsc){
    c6 = <ServerErrorHTTPStatusCodes />
  }
// Client Error HTTP Status Codes
  if(c1 === cehsc){
    c1 = <ClientErrorHTTPStatusCodes />
  }
  if(c2 === cehsc){
    c2 = <ClientErrorHTTPStatusCodes />
  }
  if(c3 === cehsc){
    c3 = <ClientErrorHTTPStatusCodes />
  }
  if(c4 === cehsc){
    c4 = <ClientErrorHTTPStatusCodes />
  }
  if(c5 === cehsc){
    c5 = <ClientErrorHTTPStatusCodes />
  }
  if(c6 === cehsc){
    c6 = <ClientErrorHTTPStatusCodes />
  }
// Redirection HTTP Status Codes
  if(c1 === rhsc){
    c1 = <RedirectionHTTPStatusCodes />
  }
  if(c2 === rhsc){
    c2 = <RedirectionHTTPStatusCodes />
  }
  if(c3 === rhsc){
    c3 = <RedirectionHTTPStatusCodes />
  }
  if(c4 === rhsc){
    c4 = <RedirectionHTTPStatusCodes />
  }
  if(c5 === rhsc){
    c5 = <RedirectionHTTPStatusCodes />
  }
  if(c6 === rhsc){
    c6 = <RedirectionHTTPStatusCodes />
  }
// JavaScript Types
  if(c1 === jt){
    c1 = <JavaScriptTypes />
  }
  if(c2 === jt){
    c2 = <JavaScriptTypes />
  }
  if(c3 === jt){
    c3 = <JavaScriptTypes />
  }
  if(c4 === jt){
    c4 = <JavaScriptTypes />
  }
  if(c5 === jt){
    c5 = <JavaScriptTypes />
  }
  if(c6 === jt){
    c6 = <JavaScriptTypes />
  }
// Informational And Success HTTP Status Codes
  if(c1 === ishsc){
    c1 = <InformationalAndSuccessHTTPStatusCodes />
  }
  if(c2 === ishsc){
    c2 = <InformationalAndSuccessHTTPStatusCodes />
  }
  if(c3 === ishsc){
    c3 = <InformationalAndSuccessHTTPStatusCodes />
  }
  if(c4 === ishsc){
    c4 = <InformationalAndSuccessHTTPStatusCodes />
  }
  if(c5 === ishsc){
    c5 = <InformationalAndSuccessHTTPStatusCodes />
  }
  if(c6 === ishsc){
    c6 = <InformationalAndSuccessHTTPStatusCodes />
  }
// Python List Methods
  if(c1 === plm){
    c1 = <PythonListMethods />
  }
  if(c2 === plm){
    c2 = <PythonListMethods />
  }
  if(c3 === plm){
    c3 = <PythonListMethods />
  }
  if(c4 === plm){
    c4 = <PythonListMethods />
  }
  if(c5 === plm){
    c5 = <PythonListMethods />
  }
  if(c6 === plm){
    c6 = <PythonListMethods />
  }
// JavaScript Math Methods
  if(c1 === jmm){
    c1 = <JavaScriptMathMethods />
  }
  if(c2 === jmm){
    c2 = <JavaScriptMathMethods />
  }
  if(c3 === jmm){
    c3 = <JavaScriptMathMethods />
  }
  if(c4 === jmm){
    c4 = <JavaScriptMathMethods />
  }
  if(c5 === jmm){
    c5 = <JavaScriptMathMethods />
  }
  if(c6 === jmm){
    c6 = <JavaScriptMathMethods />
  }
// Python Error Types
  if(c1 === pet){
    c1 = <PythonErrorTypes />
  }
  if(c2 === pet){
    c2 = <PythonErrorTypes />
  }
  if(c3 === pet){
    c3 = <PythonErrorTypes />
  }
  if(c4 === pet){
    c4 = <PythonErrorTypes />
  }
  if(c5 === pet){
    c5 = <PythonErrorTypes />
  }
  if(c6 === pet){
    c6 = <PythonErrorTypes />
  }

 }
 
 finalSelection()

 const displayCategoryPageFunc = () => {
  setDisplayState(1)
 }

if(displayState === 0){

  return (
    <>
    <h2 id="landing-heading">Flash-Flip</h2>
    <LandingInstructions />  
    <div id="landing-page-div">
    <button id="landing-page-button" onClick={displayCategoryPageFunc}>Go to Select Categories</button>
      
    </div>    
    </>
  );
}
if(displayState === 1){
  return (
    <Form id="form-categories">
    <div id="custom-control custom-checkbox" key="checkbox" >
      <h2 id="category-heading">Categories</h2>
      <Row>
        <Col></Col>
        <Col id="column1">              
          <Form.Check type="checkbox">
          <Form.Check.Input type="checkbox"  isValid disabled={isDisabled} onClick={handleSelect} value="javascript_array_methods" id="cb-1"/>
          <Form.Check.Label id="label1">JavaScript Array Methods</Form.Check.Label>
          </Form.Check>
          
        <Form.Check type="checkbox">
          <Form.Check.Input  type="checkbox"  isValid disabled={isDisabled} onClick={handleSelect} value="javascript_types"/>
          <Form.Check.Label id="label12">JavaScript Types</Form.Check.Label>
        </Form.Check>

          <Form.Check type="checkbox">
          <Form.Check.Input  type="checkbox" isValid disabled={isDisabled} onClick={handleSelect} value="javascript_error_types"/>
          <Form.Check.Label id="label2">JavaScript Error Types</Form.Check.Label>
        </Form.Check>


        <Form.Check type="checkbox">
          <Form.Check.Input  type="checkbox"  isValid disabled={isDisabled} onClick={handleSelect} value="javascript_math_methods"/>
          <Form.Check.Label id="label3">JavaScript Math Methods</Form.Check.Label>
        </Form.Check>

        <Form.Check type="checkbox">
          <Form.Check.Input  type="checkbox"  isValid disabled={isDisabled} onClick={handleSelect} value="python_list_methods"/>
          <Form.Check.Label id="label4">Python List Methods</Form.Check.Label>
        </Form.Check>


        <Form.Check type="checkbox">
          <Form.Check.Input  type="checkbox"  isValid disabled={isDisabled} onClick={handleSelect} value="python_error_types"/>
          <Form.Check.Label id="label5">Python Error Types</Form.Check.Label>
        </Form.Check>

        </Col>



        <Col id="column2">
        <Form.Check type="checkbox">
          <Form.Check.Input  type="checkbox"  isValid disabled={isDisabled} onClick={handleSelect} value="http_request_methods"/>
          <Form.Check.Label id="label6">HTTP Request Methods</Form.Check.Label>
        </Form.Check>

        <Form.Check type="checkbox">
          <Form.Check.Input  type="checkbox"  isValid disabled={isDisabled} onClick={handleSelect} value="server_error_http_status_codes"/>
          <Form.Check.Label id="label7">Server Error HTTP Status Codes</Form.Check.Label>
        </Form.Check>

        <Form.Check type="checkbox">
          <Form.Check.Input  type="checkbox"  isValid disabled={isDisabled} onClick={handleSelect} value="client_error_http_status_codes"/>
          <Form.Check.Label id="label8">Client Error HTTP Status Codes</Form.Check.Label>
        </Form.Check>

        <Form.Check type="checkbox">
          <Form.Check.Input  type="checkbox"  isValid disabled={isDisabled} onClick={handleSelect} value="redirection_http_status_codes"/>
          <Form.Check.Label id="label9">Redirection HTTP Status Codes</Form.Check.Label>
        </Form.Check>

        <Form.Check type="checkbox">
          <Form.Check.Input  type="checkbox"  isValid disabled={isDisabled} onClick={handleSelect} value="informational_and_success_http_status_codes"/>
          <Form.Check.Label id="label10">Informational And Success HTTP Status Codes</Form.Check.Label>
        </Form.Check>

        <Form.Check type="checkbox">
          <Form.Check.Input  type="checkbox"  isValid disabled={isDisabled} onClick={handleSelect} value="pg_promise_query_methods"/>
          <Form.Check.Label id="label11">PG Promise Query Methods</Form.Check.Label>
        </Form.Check>


        </Col>
        <Col></Col>
      </Row>


    </div>
    <ul id="ul-selected-category"></ul>
    <div id="reset-start-btn-div">
      <button id="reset-btn" onClick={clearSelection}>Reset Selection</button>

      <button id="start-game-btn" hidden={isHidden} onClick={handleStartGame}>Start Game!</button>
    </div>
</Form>
  )
}
if(displayState === 2) {
    return(
      <Container>
        <h4>Score: {score}</h4>
        <Row>
          <Col id="component-col-one">{c1}</Col>
          <Col id="component-col-two">{c2}</Col>
          <Col id="component-col-three">{c3}</Col>
          <Col id="component-col-four">{c4}</Col>
          <Col id="component-col-five">{c5}</Col>
          <Col id="component-col-six">{c6}</Col>
        </Row>

      </Container>

    )
}
else{
  return(
    <h1>Oops, our bad. You have found our secret error page you little hacker. 
    </h1>
  )
}
};

export default App;
