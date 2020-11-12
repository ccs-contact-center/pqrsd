import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
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
                <b></b>
              </h2>
            </Col>
            <Col xs="12" className="text-justify">
              <div className="cajaRoja">
                <p className="text-justify">
                  El Sistema de Peticiones, <b>Quejas, Reclamos y Sugerencias</b> se entiende como una herramienta
                  gerencial para el control y mejoramiento continuo, ya que permite visualizar e informarse de
                  lo que sucede, cuáles son las Quejas Reclamos y Sugerencias que tienen los <b>Clientes</b> de los
                 servicios que se relacionen con el cumplimiento de los objetivos.<br />
                De igual forma se puede establecer la manera cómo poder resolver todas aquellas inquietudes
                 y de esta forma combatir las debilidades o amenazas de la marca o servicio.
              </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
