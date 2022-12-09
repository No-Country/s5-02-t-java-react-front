import { useDispatch, useSelector } from 'react-redux'
import useSesion from 'hooks/useSesion'
import { useEffect } from 'react'
import Search from 'components/search/Search'
import Pagination from 'components/pagination/Pagination'
import CardHouse from 'components/cards/CardHouse'
import HousesSort from 'components/sorts/HousesSort'
import { getAllHouses, getHouseByName } from 'features/actions/housesActions'

function HousesContainer() {
  const { houses, totalElements, currentPage, search, order } = useSelector(
    ({ housesStore }) => housesStore
  )
  const { user } = useSesion()
  const dispatch = useDispatch()

  useEffect(() => {
    if (user.token !== null) {
      if (search === '') {
        const type = order?.name !== '' ? `&name=${order.name}` : ''
        const dir = order?.dir !== '' ? `&dir=${order.dir}` : ''
        const query = `enablePage=true&size=6&page=${currentPage}${dir}${type}`
        dispatch(
          getAllHouses({
            token: user.token,
            query,
          })
        )
      } else {
        dispatch(
          getHouseByName({
            token: user.token,
            name: search,
          })
        )
      }
    }
  }, [user.token, currentPage, search, dispatch, order.name, order.dir])

  return (
    <div className="lg:col-span-3">
      <div className="flex items-center justify-between">
        {totalElements && (
          <p className="hidden lg:inline text-sm text-gray-500">
            <span className="font-medium"> Disponibles </span>
            {totalElements}
          </p>
        )}

        <Search />
        <HousesSort />
      </div>

      {/* contenedor de las cards houses */}
      <div className="mt-4 grid grid-cols-1 gap-px border border-gray-200 bg-gray-50 sm:grid-cols-2 lg:grid-cols-3">
        {houses.length > 0 &&
          houses.map((house) => (
            <CardHouse key={crypto.randomUUID()} {...house} />
          ))}
      </div>
      <Pagination />
    </div>
  )
}

export default HousesContainer
