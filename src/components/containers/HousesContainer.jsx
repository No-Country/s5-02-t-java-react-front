import Search from 'components/search/Search'
import Pagination from 'components/pagination/Pagination'
import CardHouse from 'components/cards/CardHouse'
import HousesSort from 'components/sorts/HousesSort'

function HousesContainer() {
  return (
    <div className="lg:col-span-3">
      <div className="flex items-center justify-between">
        <p className="hidden lg:inline text-sm text-gray-500">
          <span> Showing </span>6 of 24 Products
        </p>

        <Search />
        <HousesSort />
      </div>

      {/* contenedor de las cards houses */}
      <div className="mt-4 grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
        <CardHouse />
        <CardHouse />
        <CardHouse />
        <CardHouse />
        <CardHouse />
        <CardHouse />
      </div>

      <Pagination />
    </div>
  )
}

export default HousesContainer
