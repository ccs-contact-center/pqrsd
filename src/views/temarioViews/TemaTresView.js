import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import tres from '../../assets/img/pqrsd/tres.png'

class TemaTresView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>PQRS</h3>
        </CardHeader>
        <CardBody>
          <Row className="centrado-fila">
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>
                  Queja
                </b>
              </h2>
            </Col>
            <Col xs="12">
              <div className="cajaRoja">
                <p className="text-justify">
                  Es la manifestación de <b>protesta, descontento o inconformidad</b> que formula el cliente
                con relación a la forma o condiciones en que se ha prestado un servicio de venta o postventa.
              </p>
              </div>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="7" md="8">
              <div className="cajaGris">
                <p className="text-justify">
                  La queja es una <b>valiosa oportunidad</b> para tomar contacto con el cliente <b>y
                    evaluar el servicio</b>.
                </p>
              </div>
            </Col>
            <Col xs="5" md="4">
              <img
                src={tres}
                style={{ width: 400 }}
                alt="tres"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>
          </Row>

        </CardBody>
      </div>
    )
  }
}
export default TemaTresView
