import HouseFilter from 'components/filters/HouseFilter'
import HousesContainer from 'components/containers/HousesContainer'

const Home = () => {
  return (
    <>
      <section className="relative top-10 sm:top-10 lg:top-10 xl:top-0">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
            <HouseFilter />
            <HousesContainer />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
