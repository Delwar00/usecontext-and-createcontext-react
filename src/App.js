import { Col, Container, Row } from 'react-bootstrap';
import PageOne from "./components/PageOne";
import PageFour from "./components/PageFour";
import React, { useState } from 'react'
import ContextFst from './components/context/FirstContext';
import PageFive from './components/PageFive';
import FoodContext from './components/context/FoodContext';


function App() {
  const [msg,setMsg]=useState('');
  return (
   <>
     <FoodContext.Provider value={
      {
        vegitables:['Alo','Potol','Dheros']
      }
     }>
        <ContextFst.Provider value={
          
          {
            msg,
            setMsg,
            fashion:['mens','womens','Panjabi'],
            student:{
              name:"delwar",
              age:20,
              location:"dhaka"
            }
          }
        }
          >
            <Container>
              <Row>
                <Col>
                  <PageOne />
                  <PageFour />
                  <PageFive />
                </Col>
              </Row>
            </Container>
          </ContextFst.Provider>
      </FoodContext.Provider>
   </>
  );
}

export default App;

