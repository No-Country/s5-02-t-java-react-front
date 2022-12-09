import { setOrder } from 'features/reducers/housesSlice'
import { useDispatch } from 'react-redux'

function HousesSort() {
  const dispatch = useDispatch()
  const handleSort = (e) => {
    e.preventDefault()
    if (e.target.value !== 'ordenar') {
      dispatch(setOrder(e.target.value))
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
        <option value="name-ASC">Nombre, A-Z</option>
        <option value="name-DESC">Nombre, Z-A</option>
        <option value="capacity-ASC">Capacidad, 0-9</option>
        <option value="capacity-DESC">Capacidad, 9-0</option>
      </select>
    </div>
  )
}

export default HousesSort
