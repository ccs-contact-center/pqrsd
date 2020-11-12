import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import cinco from '../../assets/img/pqrsd/cinco.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaCincoView extends Component {
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
                  Sugerencia
                </b>
              </h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="4" md="3">
              <img
                src={cinco}
                style={{ width: 400 }}
                alt="cinco"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>
            <Col xs="8" md="9">
              <div className="cajaRoja">
                <p className="text-justify">
                  Se entiende por sugerencia, aquella <b>propuesta</b> que formula el cliente y que tiene como
                  propósito <b> mejorar la prestación del servicio</b> en cualquiera de las áreas del servicio o producto.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCincoView
