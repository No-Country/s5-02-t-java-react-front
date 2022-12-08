import usePagination from 'hooks/usePagination'

function Pagination() {
  const { currentPage, totalPages, handleCurrent, handleNext, handlePrevius } =
    usePagination()
  return (
    <>
      <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
        <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
          <div
            className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer"
            onClick={handlePrevius}
          >
            <svg
              width={14}
              height={8}
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.1665 4H12.8332"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.1665 4L4.49984 7.33333"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.1665 4.00002L4.49984 0.666687"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
          </div>
          <div className="sm:flex hidden">
            {Array.from({ length: totalPages }, (x, i, j) =>
              currentPage === i + 1 ? (
                <button
                  key={crypto.randomUUID()}
                  className="text-xl font-bold leading-none cursor-pointer text-indigo-700 hover:text-indigo-700 border-t-2 border-transparent border-indigo-400 hover:border-indigo-400 pt-2 mr-4 px-2 "
                  onClick={() => handleCurrent(i + 1)}
                >
                  {i + 1}
                </button>
              ) : (
                <button
                  key={crypto.randomUUID()}
                  className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2"
                  onClick={() => handleCurrent(i + 1)}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
          <div
            className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer"
            onClick={handleNext}
          >
            <p className="text-sm font-medium leading-none mr-3">Next</p>
            <svg
              width={14}
              height={8}
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.1665 4H12.8332"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 7.33333L12.8333 4"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 0.666687L12.8333 4.00002"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pagination
