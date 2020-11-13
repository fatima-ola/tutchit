import React from 'react'
import {Row, Col} from 'react-materialize'
import CardSection from './../Card/CardSection';

const Testimonial =()=> {
    return (
        <div>
            <Row>  
                <Col m={4} s={12}> 
                    <CardSection>
                        <h5 className="black-text center-align">Peter</h5>
                        <p className="black-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse eveniet sed nihil, 
                            dolorem molestias, repellat expedita ab et laborum iusto velit excepturi veritatis, 
                            perferendis sapiente hic quisquam in ut.
                            
                            
                        </p>
                    </CardSection>
                </Col>     
                <Col m={4} s={12}>
                    <CardSection>
                        <h5 className="black-text center-align">Timileyin</h5>
                        <p className="black-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse eveniet sed nihil, 
                            dolorem molestias, repellat expedita ab et laborum iusto velit excepturi veritatis, 
                            perferendis sapiente hic quisquam in ut.
                                
                        </p>
                    </CardSection>
                </Col>
                <Col m={4} s={12}>
                    <CardSection>
                        <h5 className="black-text center-align">Bolaji</h5>
                        <p className="black-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse eveniet sed nihil, 
                            dolorem molestias, repellat expedita ab et laborum iusto velit excepturi veritatis, 
                            perferendis sapiente hic quisquam in ut.     
                            
                        </p>
                    </CardSection>
                </Col>
            </Row>
        </div>
    )
}

export default Testimonial
