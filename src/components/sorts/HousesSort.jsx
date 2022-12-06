import { useState } from 'react'

function HousesSort() {
  const [sort, setSort] = useState('')

  const handleSort = (e) => {
    e.preventDefault()
    if (e.target.value !== 'ordenar') {
      setSort(e.target.value)
    }
  }

  return (
    <div className="ml-4">
      <label htmlFor="SortBy" className="sr-only ">
        Ordenar
      </label>

      <select
        id="SortBy"
        name="sort_by"
        className="rounded border-gray-100 text-sm font-medium"
        onChange={handleSort}
      >
        <option value={'ordenar'} readOnly>
          Ordenar
        </option>
        <option value="name-asc">Nombre, A-Z</option>
        <option value="name-desc">Nombre, Z-A</option>
        <option value="capacity-asc">Capacidad, 0-9</option>
        <option value="capacity-desc">Capacidad, 9-0</option>
      </select>
    </div>
  )
}

export default HousesSort
