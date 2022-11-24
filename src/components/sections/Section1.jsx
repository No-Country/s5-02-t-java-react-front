import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Section1 = () => {
  return (
    <Container
      className="d-flex flex-column min-vh-100 min-vw-100"
      style={{
        backgroundImage:
          'url(https://i.ibb.co/CK8zgQc/pexels-rosario-fernandes-3835638-1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      expand="xl"
    >
      <Card
        expand="xl"
        style={{
          width: '60vw',
          background: 'transparent',
          border: 'none',
          position: 'relative',
          top: '20vh',
          left: '20vw',
        }}
      >
        <Card.Body className="align-content-center align-items-center">
          <Card.Title
            style={{
              fontSize: '4rem',
            }}
          >
            Entertainament Rooms
          </Card.Title>
          <Card.Subtitle className="fs-3 mb-2">
            Una experiencia única
          </Card.Subtitle>
          <Card.Text className="fs-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            aliquam non consectetur ipsum cum vitae, facilis ab hic eius!
            Temporibus ducimus adipisci ab quisquam ut quidem exercitationem cum
            molestias deserunt.
          </Card.Text>
          <div className="d-flex pb-2 mt-5">
            <Button
              variant="primary"
              className="bg-white border-light m-2"
              style={{
                color: '#4D0084',
                fontWeight: '500',
              }}
            >
              RESERVAR UN SALON
            </Button>
            <Button
              variant="primary"
              className="bg-white border-light m-2"
              style={{
                color: '#4D0084',
                fontWeight: '500',
              }}
            >
              VER SALONES
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Section1
