import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
// import ocho from '../../assets/img/pqrsd/ocho.jpg'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaTreceView extends Component {
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
            <Col xs="12" md="9">
              <div className="cajaRoja">
                <ul className="text-justify" style={{ marginBottom: "0px" }}>
                  <li>
                    <b>Generar conversación positiva</b>
                  </li>
                </ul>
                <p className="text-justify">
                  La atención al cliente no debe servir exclusivamente para gestionar incidencias. En redes
                  sociales también es importante generar conversación positiva y podemos aprovechar este canal
                  para esta función realizando acciones diversas que fidelicen a nuestros clientes, algunas de
                  ellas son:<br />
                  <ul>
                    <li>
                      Agradecer los mensajes positivos.
                    </li>
                    <li>
                      Informar que algo ha sido reparado.
                    </li>
                    <li>
                      Informar sobre novedades.
                    </li>
                    <li>
                      Felicitar a tus clientes.
                    </li>
                  </ul>
                </p>

              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTreceView
