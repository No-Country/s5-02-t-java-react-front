import Card from 'react-bootstrap/Card'
import { FaMapMarkerAlt } from 'react-icons/fa'

function Cardhouse() {
  return (
    <Card
      style={{
        width: '18rem',
        background: '#3B3B3B',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        border: 'none',
      }}
      className="m-4 text-white border-rounded"
    >
      <Card.Img
        style={{
          height: '16rem',
        }}
        className="rounded-top"
        variant="top"
        src="https://www.conclusion.com.ar/wp-content/uploads/2020/07/Salon.jpg"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>Salon</Card.Title>
        <Card.Text>
          <FaMapMarkerAlt className="text-warning mb-1" /> Dirección
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Text className="text-muted">
            Capacidad máxima <br></br> <span className="text-white">300</span>
          </Card.Text>
          <Card.Text className="text-muted">
            Superficie <br></br> <span className="text-white">1.200m2</span>
          </Card.Text>
        </div>
      </Card.Body>
      <Card.Body>
        <Card.Link
          className="text-decoration-none fw-bolder text-warning"
          href="#"
        >
          Ver mas
        </Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Cardhouse
