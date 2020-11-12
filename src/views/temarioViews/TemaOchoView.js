import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import ocho from '../../assets/img/pqrsd/ocho.jpg'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaOchoView extends Component {
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
                  Solicitud de información
                </b>
              </h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="4" md="3">
              <img
                src={ocho}
                style={{ width: 400 }}
                alt="ocho"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>
            <Col xs="6" md="6">
              <div className="cajaRoja">
                <p className="text-justify">
                  Solicitud de información relacionada con la marca, servicio o producto.

                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaOchoView
