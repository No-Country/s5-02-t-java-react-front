import React from 'react'

function HousesSort() {
  return (
    <div className="ml-4">
      <label for="SortBy" className="sr-only ">
        Ordenar
      </label>

      <select
        id="SortBy"
        name="sort_by"
        className="rounded border-gray-100 text-sm font-medium"
      >
        <option readonly>Ordenar</option>
        <option value="name-asc">Nombre, A-Z</option>
        <option value="name-desc">Nombre, Z-A</option>
        <option value="capacidad-asc">Capacidad, 0-9</option>
        <option value="capacidad-desc">Capacidad, 9-0</option>
      </select>
    </div>
  )
}

export default HousesSort
