import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import siete from '../../assets/img/pqrsd/siete.jpg'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaSieteView extends Component {
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
                  Felicitación
                </b>
              </h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="4" md="3">
              <img
                src={siete}
                style={{ width: 400 }}
                alt="siete"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>
            <Col xs="8" md="9">
              <div className="cajaRoja">
                <p className="text-justify">
                  Es aquella expresión de <b>satisfacción</b> de un cliente con relación a la prestación
                  de un <b>servicio o producto</b>.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSieteView
