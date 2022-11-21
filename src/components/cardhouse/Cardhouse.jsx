import Card from 'react-bootstrap/Card'

function Cardhouse() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src="https://www.conclusion.com.ar/wp-content/uploads/2020/07/Salon.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Cardhouse
