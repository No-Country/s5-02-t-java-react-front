import { useState } from 'react'

const initialState = {
  infantil: true,
  familiar: true,
  social: true,
  boda: true,
}

function HouseFilter() {
  const [type, setType] = useState(initialState)

  const handleChange = (e) => {
    e.preventDefault()
    console.log(e.target.name)
  }
  return (
    <div className="lg:sticky lg:top-4 ">
      <details
        open={true}
        className="overflow-hidden rounded border border-gray-200"
      >
        <summary className="flex items-center justify-between bg-gray-100 px-5 py-3 lg:hidden sticky ">
          <span className="text-sm font-medium"> Filtrar </span>

          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </summary>

        <form className="border-t border-gray-200 lg:border-t-0">
          <fieldset>
            <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
              Tipo
            </legend>

            <div className="space-y-2 px-5 py-6">
              <div className="flex items-center">
                <input
                  id="infantil"
                  type="checkbox"
                  name="type[infantil]"
                  className="h-5 w-5 rounded border-gray-300"
                />

                <label htmlFor="infantil" className="ml-3 text-sm font-medium">
                  Infantil
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="familiar"
                  type="checkbox"
                  name="type[familiar]"
                  className="h-5 w-5 rounded border-gray-300"
                />

                <label htmlFor="familiar" className="ml-3 text-sm font-medium">
                  Familiar
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="social"
                  type="checkbox"
                  name="type[social]"
                  className="h-5 w-5 rounded border-gray-300"
                />

                <label htmlFor="social" className="ml-3 text-sm font-medium">
                  Social
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="boda"
                  type="checkbox"
                  name="type[boda]"
                  className="h-5 w-5 rounded border-gray-300"
                />

                <label htmlFor="boda" className="ml-3 text-sm font-medium">
                  Boda
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="text-xs text-gray-500 underline"
                >
                  Reset Type
                </button>
              </div>
            </div>
          </fieldset>

          <div>
            <fieldset>
              <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                Capacidad
              </legend>

              <div className="space-y-2 px-5 py-6">
                <div className="flex items-center">
                  <input
                    id="100"
                    type="checkbox"
                    name="age[100]"
                    className="h-5 w-5 rounded border-gray-300"
                  />

                  <label htmlFor="100" className="ml-3 text-sm font-medium">
                    Aforo: 100
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="300"
                    type="checkbox"
                    name="age[300]"
                    className="h-5 w-5 rounded border-gray-300"
                  />

                  <label htmlFor="300" className="ml-3 text-sm font-medium">
                    Aforo: 300
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="500"
                    type="checkbox"
                    name="age[500]"
                    className="h-5 w-5 rounded border-gray-300"
                  />

                  <label htmlFor="500" className="ml-3 text-sm font-medium">
                    Aforo: 500
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="999"
                    type="checkbox"
                    name="age[999]"
                    className="h-5 w-5 rounded border-gray-300"
                  />

                  <label htmlFor="999" className="ml-3 text-sm font-medium">
                    Aforo: 999
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    className="text-xs text-gray-500 underline"
                  >
                    Reset Age
                  </button>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="flex justify-between border-t border-gray-200 px-5 py-3">
            <button
              name="reset"
              type="button"
              className="rounded text-xs font-medium text-gray-600 underline"
            >
              Reset All
            </button>
          </div>
        </form>
      </details>
    </div>
  )
}

export default HouseFilter
