import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import { BiSearchAlt } from 'react-icons/bi'

const Search = () => {
  const [search, setSearch] = useState('')

  return (
    <>
      <InputGroup>
        <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
        <Form.Control
          placeholder="Buscar Salon"
          aria-label="Buscar Salon"
          aria-describedby="basic-addon1"
        />

        <Button onClick={() => setSearch('text')} rippleColor="dark">
          <BiSearchAlt />
        </Button>
      </InputGroup>
    </>
  )
}

export default Search
