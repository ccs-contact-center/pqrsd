import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
// import ocho from '../../assets/img/pqrsd/ocho.jpg'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDiezView extends Component {
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
                    <b>Evita derivar si no es necesario</b>
                 </li>
                </ul>
                <p className="text-justify">
                  Intenta gestionar el problema con respuestas en la propia red social, evitemos desviar a otros
                  canales hasta que no sea necesario y jamás lo hagamos como práctica habitual.
                </p>
                <ul className="text-justify" style={{ marginBottom: "0px" }}>
                  <li>
                   <b> Valora todas las reclamaciones</b>
                  </li>
                </ul>
                <p className="text-justify">
                  Por muchas veces que recibas una misma cuestión o por poca importancia que creamos que tenga,
                  tenemos que valorar siempre las dudas de nuestros clientes, jamás debemos restar importancia a
                  una reclamación.
                </p>

              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDiezView
