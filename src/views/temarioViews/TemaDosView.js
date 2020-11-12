import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import dos from '../../assets/img/pqrsd/dos.jpg'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>PQRS</h3>
        </CardHeader>
        <CardBody className="">
          <Row >
            <Col xs="12" className="centrado-fila">
              <div className="cajaRoja">
                <p className="text-justify">
                  Es una <b>solicitud o sugerencia</b> que puede hacer el cliente acerca <b>del producto o
                  servicio</b> que adquiere para que se tenga en cuenta y ejecute por parte de la empresa
                  y puede hacerlo de forma anticipada, inmediata o posterior a la compra.
                </p>
              </div>
              <img
                src={dos}
                 style={{ width: 500 }}
                alt="dos"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>

          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
