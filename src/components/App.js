import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import JavaScriptArrayMethods from "./Categories/JavaScriptArrayMethods";


const App = () => {



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

  let jam = 'javascript_array_methods'

  const handleSelect = (e) => {
    let val = e.target.value
    if(catArr.length < 7 && !catArr.includes(val)){
      catArr.push(val)
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

  const handleStartGame = () => {
      setDisplayState(1)
  }

  let finalSelections = [c1,c2,c3,c4,c5,c6]
if(displayState === 0){

  return (
    <>
      <Form>
          <div key="checkbox" className="mb-3">
              <Form.Check type="checkbox">
                <Form.Check.Input className="category-option" type="checkbox" isValid disabled={isDisabled} onClick={handleSelect} value="css"/>
                <Form.Check.Label className="form-check-label">CSS</Form.Check.Label>
              </Form.Check>
              <Form.Check type="checkbox">
                <Form.Check.Input className="category-option" type="checkbox"  isValid disabled={isDisabled} onClick={handleSelect} value="javascript"/>
                <Form.Check.Label className="form-check-label">JavaScript</Form.Check.Label>
              </Form.Check>
              <Form.Check type="checkbox">
                <Form.Check.Input className="category-option" type="checkbox"  isValid disabled={isDisabled} onClick={handleSelect} value="javascript_array_methods"/>
                <Form.Check.Label className="form-check-label">JavaScript Array Methods</Form.Check.Label>
              </Form.Check>
              <Form.Check type="checkbox">
                <Form.Check.Input className="category-option" type="checkbox"  isValid disabled={isDisabled} onClick={handleSelect} value="Test"/>
                <Form.Check.Label className="form-check-label">c</Form.Check.Label>
              </Form.Check>
              <Form.Check type="checkbox">
                <Form.Check.Input className="category-option" type="checkbox"  isValid disabled={isDisabled} onClick={handleSelect} value="cat 5 test"/>
                <Form.Check.Label className="form-check-label">c</Form.Check.Label>
              </Form.Check>
              <Form.Check type="checkbox">
                <Form.Check.Input className="category-option" type="checkbox"  isValid disabled={isDisabled} onClick={handleSelect} value="cat 4 test"/>
                <Form.Check.Label className="form-check-label">c</Form.Check.Label>
              </Form.Check>
              <Form.Check type="checkbox">
                <Form.Check.Input className="category-option" type="checkbox"  isValid disabled={isDisabled} onClick={handleSelect} value="cat 3 test"/>
                <Form.Check.Label className="form-check-label">c</Form.Check.Label>
              </Form.Check>
          </div>
          <button hidden={isHidden} onClick={handleStartGame}>start game</button>
      </Form>
      

    </>
  );
}
if(displayState === 1 && finalSelections.includes(jam)) {
    return(
      <Container>
        <Row>
          <Col><JavaScriptArrayMethods /></Col>
          <Col><JavaScriptArrayMethods /></Col>
          <Col><JavaScriptArrayMethods /></Col>
          <Col><JavaScriptArrayMethods /></Col>
          <Col><JavaScriptArrayMethods /></Col>
          <Col><JavaScriptArrayMethods /></Col>
        </Row>
        

      </Container>

    )
}
else{
  return(
    <h1>3</h1>
  )
}
};

export default App;
