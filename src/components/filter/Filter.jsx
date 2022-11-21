import React from 'react'
import { Form, Card } from 'react-bootstrap'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import Accordion from 'react-bootstrap/Accordion'

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!')
  )

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
      className="fs-5 border-0 bg-transparent w-100 d-flex"
    >
      {children}
    </button>
  )
}

function Filter() {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card
          style={{
            width: '18rem',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 3px',
          }}
        >
          <Card.Header className="bg-black-50">
            <CustomToggle eventKey="0">Filters</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Capacity</Accordion.Header>
                  <Accordion.Body>
                    <Form.Check aria-label="option 1" label="0-50" />
                    <Form.Check aria-label="option 2" label="50-100" />
                    <Form.Check aria-label="option 3" label="100-150" />
                    <Form.Check aria-label="option 4" label="150-200" />
                    <Form.Check aria-label="option 5" label="200-MAX" />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Disponibilidad</Accordion.Header>
                  <Accordion.Body>
                    <Form.Check aria-label="option 1" label="Enero-Marzo" />
                    <Form.Check aria-label="option 2" label="Abril-Julio" />
                    <Form.Check aria-label="option 3" label="Agosto-Octubre" />
                    <Form.Check
                      aria-label="option 4"
                      label="Noviembre-Diciembre"
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
}

export default Filter
