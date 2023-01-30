import React, {useState} from "react";
import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";
import JavaScript_Array_Methods from "./Categories/JavaScriptArrayMethods";

// restructure data based on values
// instead of category components, make data components (js array methods, css, etc)

const App = () => {


  const [c1, setC1] = useState("")
  const [c2, setC2] = useState("")
  const [displayState, setDisplayState] = useState(0)
  
  let catArr = []

  let jam = 'javascript_array_methods'

  const handleCheck = (e) => {
    let val = e.target.value
    if(catArr.length < 7){
      catArr.push(val)
    }
    else{
      console.log("full")
    }
    console.log(catArr)
    if(catArr.length === 6){
      setC1(catArr[0])
      setC2(catArr[1])
      setDisplayState(1)
    }
  }



if(displayState === 0){

  return (
    <>
      <Form>
          <div key="checkbox" className="mb-3">
              <Form.Check type="checkbox">
                <Form.Check.Input type="checkbox" isValid onClick={handleCheck} value="css"/>
                <Form.Check.Label className="form-check-label">CSS</Form.Check.Label>
              </Form.Check>
              <Form.Check type="checkbox">
                <Form.Check.Input type="checkbox" isValid onClick={handleCheck} value="javascript"/>
                <Form.Check.Label className="form-check-label">JavaScript</Form.Check.Label>
              </Form.Check>
              <Form.Check type="checkbox">
                <Form.Check.Input type="checkbox" isValid onClick={handleCheck} value="javascript_array_methods"/>
                <Form.Check.Label className="form-check-label">JavaScript Array Methods</Form.Check.Label>
              </Form.Check>
              <Form.Check type="checkbox">
                <Form.Check.Input type="checkbox" isValid onClick={handleCheck} value="Test"/>
                <Form.Check.Label className="form-check-label">c</Form.Check.Label>
              </Form.Check>
              <Form.Check type="checkbox">
                <Form.Check.Input type="checkbox" isValid onClick={handleCheck} value="cat 5 test"/>
                <Form.Check.Label className="form-check-label">c</Form.Check.Label>
              </Form.Check>
          </div>
      </Form>
      

    </>
  );
}
if(displayState === 1) {
    return(
      <Container>
        <p>1</p>
        <JavaScript_Array_Methods />

      </Container>

    )
}
};

export default App;
