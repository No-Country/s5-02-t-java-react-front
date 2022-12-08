import { useSelector, useDispatch } from 'react-redux'
import { setNext, setCurrent, setPrevius } from 'features/reducers/housesSlice'

const usePagination = () => {
  const { currentPage, totalPages } = useSelector(
    ({ housesStore }) => housesStore
  )

  const dispatch = useDispatch()

  const handleNext = () => dispatch(setNext())
  const handlePrevius = () => dispatch(setPrevius())
  const handleCurrent = (page) => dispatch(setCurrent(page))

  return { currentPage, totalPages, handleNext, handlePrevius, handleCurrent }
}

export default usePagination
