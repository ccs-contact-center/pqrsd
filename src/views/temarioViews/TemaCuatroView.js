import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import cuatro from '../../assets/img/pqrsd/cuatro.jpg'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaCuatroView extends Component {
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
                  Reclamo
                </b>
              </h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="4" md="3">
              <img
                src={cuatro}
                style={{ width: 400 }}
                alt="cuatro"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>
            <Col xs="8" md="9">
              <div className="cajaRoja">
                <p className="text-justify">
                  Un reclamo se manifiesta como la acción directa del cliente para hacer <b>conocer a la empresa 
                  su nivel de insatisfacción</b> parcial o total acerca del o los productos y/o servicios que adquirió 
                  por medio de la empresa.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCuatroView
