import React from 'react'
import images from '../images.js';
import {Form, Row, Col} from 'react-bootstrap';

export const Contacto = () => {
    return (
        <>
            <div id='Contacto' className='contacto-container'>
                <div className='container-contacto'>
                        <p className='contacto'>Contacto</p>
                        <p className='sub-texto'>Espero poder charlar con vos!</p>


                    <div className='formulario'>
                        <Form>
                            <Row>
                                <Col>
                                <Form.Control className='input' placeholder="First name" />
                                </Col>
                                <Col>
                                <Form.Control  className='input' placeholder="Last name" />
                                </Col>
                            </Row>

                            <Row>
                            <Col>
                                <Form.Control as="textarea" className=' mensaje mt-5' placeholder="Mensaje!" />
                                </Col>
                            </Row>
                            </Form>
                    </div>

            
                    <div className='logos'>
                    <a href='https://www.linkedin.com/in/gianfranco-lofeudo-b7306b8b/' target='blank'><img className='imagen-contacto' src={images.img17} alt='linked in'/></a>
                    <a href='https://github.com/Gian22Franco/Proyectos' target='blank'><img className='imagen-contacto' src={images.img18} alt='github'/></a>
                    </div>

                </div>

         </div>
                    
 


        </>
    )
}
export default Contacto;