import { useEffect } from 'react'
import { getHousesPrediction } from 'features/actions/housesActions'
import { useDispatch, useSelector } from 'react-redux'
import useSesion from 'hooks/useSesion'
import { setSearch } from 'features/reducers/housesSlice'

function Search() {
  const { searchPredictions } = useSelector(({ housesStore }) => housesStore)

  const dispatch = useDispatch()
  const { user } = useSesion()

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value))
  }

  useEffect(() => {
    if (user.token !== null) {
      dispatch(
        getHousesPrediction({
          token: user.token,
        })
      )
    }
  }, [user.token, dispatch])

  return (
    <>
      <div
        // className=" flex justify-start items-center relative w-96">
        className=" flex justify-start items-center relative w-96 rounded-full p-[2px] bg-gradient-to-tr from-gray-500 to-gray-300"
      >
        <input
          list="predictivo"
          className="text-sm font-medium leading-none text-left text-black px-4  w-full border rounded-full border-gray-300   "
          type="text"
          placeholder="Buscar"
          onChange={handleSearch}
        />
        <svg
          className="absolute right-3  cursor-pointer z-20 bg-white"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
            stroke="#4B5563"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 21L15 15"
            stroke="#4B5563"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {searchPredictions.length > 0 && (
          <>
            <datalist id="predictivo">
              {searchPredictions.map((dato) => (
                <option key={crypto.randomUUID()} value={dato?.name}></option>
              ))}
            </datalist>
          </>
        )}
      </div>
    </>
  )
}

export default Search
