import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
// import ocho from '../../assets/img/pqrsd/ocho.jpg'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaCatorceView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> PQRS</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>
                  Recomendaciones
                </b>
              </h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            {/* <Col xs="4" md="3">
              <img
                src={ocho}
                style={{ width: 400 }}
                alt="ocho"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col> */}
            <Col xs="12" md="9">
              <div className="cajaRoja">
                <ul className="text-justify" style={{ marginBottom: "0px" }}>
                  <li>
                    <b>Reconocer los errores y ofrecer nuestras disculpas</b>
                  </li>
                </ul>
                <p className="text-justify">
                  En la mayoría de las ocasiones el cliente realmente quiere mejorar su experiencia
                  o el producto y ha tenido una incidencia con nuestra marca en la cual, en mayor o menor
                  medida, tendremos un grado de responsabilidad. Es una buena recomendación comenzar por
                  reconocer nuestros errores cuando sea oportuno, disculparnos y ofrecerle la solución al problema
                  siempre que esté en nuestra mano y si no está en nuestra mano deberíamos tener preparada una
                  compensación para el usuario mientras estudiamos el nuevo caso.
                    <br />
                  Una disculpa a tiempo calmará a muchos clientes y nos colocará en una posición más adecuada para 
                  establecer una relación con él.
                </p>

              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCatorceView
