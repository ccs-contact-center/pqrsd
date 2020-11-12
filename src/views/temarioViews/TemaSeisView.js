import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import seis from '../../assets/img/pqrsd/seis.jpg'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaSeisView extends Component {
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
                  Denuncia
                </b>
              </h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="4" md="3">
              <img
                src={seis}
                style={{ width: 400 }}
                alt="seis"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>
            <Col xs="8" md="9">
              <div className="cajaRoja">
                <p className="text-justify">
                  Es la puesta en conocimiento ante una autoridad competente de una conducta posiblemente
                  irregular, para que se adelante la correspondiente investigación penal disciplinaria,
                  fiscal, administrativa - sancionatoria o ético profesional. Es necesario que se indiquen
                  las circunstancias de tiempo modo y lugar, con el objeto de que se establezcan responsabilidades.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView
