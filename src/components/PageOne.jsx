import { useContext } from 'react'
import { Col, Container,Row,Form } from 'react-bootstrap'
import ContextFst from './context/FirstContext'
import FoodContext from './context/FoodContext';

const PageOne = () => {
    const {msg,setMsg}=useContext(ContextFst);
    const {vegitables}=useContext(FoodContext);
  return (
    <Container>
        <Row>
            <Col className='my-3' md={6}>
                <Form.Control type="text" placeholder="Enter Text" value={msg} onChange={(e)=>setMsg(e.target.value)} /><hr />
                <h2>{msg}</h2>
                <ul>
                    {
                        vegitables.map(item=>
                            <li>{item}</li>    
                        )
                    }
                </ul>
            </Col>
        </Row>
    </Container>
  )
}

export default PageOne