import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
// import ocho from '../../assets/img/pqrsd/ocho.jpg'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaOnceView extends Component {
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
                    <b>Ser agradecido</b>
                 </li>
                </ul>
                <p className="text-justify">
                  Es importante agradecer al cliente sus iniciativas de forma adecuada y motivarle a seguir
                  usando el servicio de atención al cliente.
                </p>
                <ul className="text-justify" style={{ marginBottom: "0px" }}>
                  <li>
                    <b>Explicar bien nuestro punto de vista</b>
                  </li>
                </ul>
                <p className="text-justify">
                  Si nos vemos obligado a contradecir o negar algo al cliente, debemos explicar los motivos
                  con claridad y cercanía.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaOnceView
