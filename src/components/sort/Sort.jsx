import Form from 'react-bootstrap/Form'

function Sort() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Sort</option>
      <option value="1">A-Z</option>
      <option value="2">Z-A</option>
      <option value="3">Cap min-max</option>
      <option value="3">Cap max-min</option>
    </Form.Select>
  )
}

export default Sort
