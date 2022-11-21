import Card from 'react-bootstrap/Card'

function Cardhouse() {
  return (
    <Card
      style={{
        width: '18rem',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        border: 'none',
      }}
      className="m-4"
    >
      <Card.Img
        variant="top"
        src="https://www.conclusion.com.ar/wp-content/uploads/2020/07/Salon.jpg"
      />
      <Card.Body>
        <Card.Title>Salon</Card.Title>
        <Card.Text>
          Salon ubicado en... <br></br>
          Con capacidad de...
        </Card.Text>
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
