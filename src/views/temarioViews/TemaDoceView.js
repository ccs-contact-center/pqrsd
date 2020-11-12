import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
// import ocho from '../../assets/img/pqrsd/ocho.jpg'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDoceView extends Component {
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
            <Col xs="9" md="6">
              <div className="cajaRoja">
                <ul className="text-justify" style={{ marginBottom: "0px" }}>
                  <li>
                    <b>Claridad</b>
                 </li>
                </ul>
                <p className="text-justify">
                  Utilizar una comunicación clara, directa y concisa. Tenemos que ser breves e ir directos 
                  al asunto, sin rodeos, pero haciendo sentir al cliente que le estamos leyendo de forma 
                  personal y cercana. Esto implica no copiar y pegar respuestas del manual que hayamos elaborado
                  sólo debe ser una guía para elaborar nuestras respuestas.
                </p>
               
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDoceView
