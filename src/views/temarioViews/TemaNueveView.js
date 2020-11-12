import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
// import ocho from '../../assets/img/pqrsd/ocho.jpg'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaNueveView extends Component {
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
                    Evitar las polémicas
                 </li>
                </ul>
                <p className="text-justify">
                  No entrar en polémicas con los clientes ni llevarles la contraria, esto resulta altamente negativo.
                </p>
                <ul className="text-justify" style={{ marginBottom: "0px" }}>
                  <li>
                    <b>Ser empáticos</b>
                  </li>
                </ul>
                <p className="text-justify">
                  En el servicio de atención al cliente en redes se valorará la capacidad de comprensión de lectura
                  y empatía, si fallamos en ese primer punto, todo lo demás deja de tener sentido.
                </p>
                <ul className="text-justify" style={{ marginBottom: "0px" }}>
                  <li>
                    <b>Soluciones de valor</b>
                  </li>
                </ul>
                <p className="text-justify">
                  Nuestras respuestas deben aportar soluciones e información de valor para nuestros clientes y que
                  mejoren la experiencia de usuario.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaNueveView
