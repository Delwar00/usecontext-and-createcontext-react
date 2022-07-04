import { useContext } from 'react'
import { Col, Container,Row,Form } from 'react-bootstrap'
import ContextFst from './context/FirstContext'

const PageFive = () => {
 const {msg,setMsg,student}=useContext(ContextFst);
  return (
      <Container>
          <Row>
              <Col className='my-3' md={6}>
                  <h2>{msg}</h2>
                  
                  <p>{student.name}</p>
                  <p>{student.age}</p>
                  <p>{student.location}</p>
              </Col>
          </Row>
      </Container>
    )
  
}

export default PageFive