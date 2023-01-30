import React, { useState , useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const data = require('../../data/data.json')

const JavaScriptArrayMethods = () => {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let result = Math.floor(Math.random() * (max - min + 1)) + min;
        return result
    }
    
    
    const [q1, setQ1] = useState("");
    const [a1, setA1] = useState("");
    const [q2, setQ2] = useState("");
    const [a2, setA2] = useState("");
    const [q3, setQ3] = useState("");
    const [a3, setA3] = useState("");
    const [q4, setQ4] = useState("");
    const [a4, setA4] = useState("");
    const [q5, setQ5] = useState("");
    const [a5, setA5] = useState("");



    const getData = async() => {

      let idx1 = getRandomInt(0,8);
  
      const lvl1 = await data.javascript_array_methods.level[0].one[`${idx1}`]
      const question1 = lvl1.question
      const answer1 = lvl1.answer
  
      setQ1(question1)
      setA1(answer1)
  

      // ***********************************************
      

      let idx2 = getRandomInt(0,7);
  
      const lvl2 = await data.javascript_array_methods.level[1].two[`${idx2}`]
      const question2 = lvl2.question
      const answer2 = lvl2.answer
  
      setQ2(question2)
      setA2(answer2)
      
  
      // ***********************************************
  
      
      let idx3 = getRandomInt(0,6);
  
      const lvl3 = await data.javascript_array_methods.level[2].three[`${idx3}`]
      const question3 = lvl3.question
      const answer3 = lvl3.answer
  
      setQ3(question3)
      setA3(answer3)
  
  
      // ***********************************************
  
    
      let idx4 = getRandomInt(0,4);
  
      const lvl4 = await data.javascript_array_methods.level[3].four[`${idx4}`]
      const question4 = lvl4.question
      const answer4 = lvl4.answer
  
      setQ4(question4)
      setA4(answer4)
  
  
      // ***********************************************
  
      
      let idx5 = getRandomInt(0,3);
  
      const lvl5 = await data.javascript_array_methods.level[4].five[`${idx5}`]
      const question5 = lvl5.question
      const answer5 = lvl5.answer
  
      setQ5(question5)
      setA5(answer5)
  
  
      // ***********************************************
  

    }   
    useEffect(() => {
      getData()
    }, []) 
  return (
    <>
    <Row>
        <Col>JavaScript Array Methods</Col>
        <Col>{q1}</Col>
        <Col>{q2}</Col>
        <Col>{q3}</Col>
        <Col>{q4}</Col>
        <Col>{q5}</Col>
    </Row>
    </>
  )
}

export default JavaScriptArrayMethods