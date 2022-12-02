import React from 'react'

const ShopCart = () => {
  return (
    <section>
      <div className="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2 py-8">
        <div className=" bg-gray-50">
          <div className="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
            <div>
              <p className="text-2xl font-medium tracking-tight text-gray-900">
                $99.99
              </p>

              <p className="mt-1 text-sm text-gray-600">Para el alquiler de</p>
            </div>

            <div>
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-100">
                  <li className="flex items-center py-4">
                    <img
                      src="https://i.ibb.co/CK8zgQc/pexels-rosario-fernandes-3835638-1.jpg"
                      alt=""
                      className="object-cover w-16 h-16 rounded"
                    />

                    <div className="ml-4">
                      <h3 className="text-sm text-gray-900 font-bold">
                        Salon Margarita
                      </h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="inline">Capacidad: </dt>
                          <dd className="inline">300</dd>
                        </div>

                        <div>
                          <dt className="inline">Ubicación: </dt>
                          <dd className="inline">Lorem ipsum dolor sit.</dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-lg px-4 mx-auto lg:px-8">
            <form className="grid grid-cols-6 gap-4">
              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Tarjeta
                </legend>

                <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                  <div>
                    <label for="CardNumber" className="sr-only">
                      {' '}
                      Numero de Tarjeta{' '}
                    </label>

                    <input
                      type="text"
                      id="CardNumber"
                      placeholder="Numero de Tarjeta"
                      className="relative w-full mt-1 border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                    />
                  </div>

                  <div className="flex -space-x-px">
                    <div className="flex-1">
                      <label for="CardExpiry" className="sr-only">
                        {' '}
                        Vencimiento de la Tarjeta{' '}
                      </label>

                      <input
                        type="text"
                        id="CardExpiry"
                        placeholder="Vencimiento de la Tarjeta"
                        className="relative w-full border-gray-200 rounded-bl-md focus:z-10 sm:text-sm"
                      />
                    </div>

                    <div className="flex-1">
                      <label for="CardCVC" className="sr-only">
                        {' '}
                        Card CVC{' '}
                      </label>

                      <input
                        type="text"
                        id="CardCVC"
                        placeholder="CVC"
                        className="relative w-full border-gray-200 rounded-br-md focus:z-10 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Dirección
                </legend>

                <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                  <div>
                    <label className="sr-only" for="PostalCode">
                      {' '}
                      ZIP/Post Code{' '}
                    </label>

                    <input
                      type="text"
                      id="PostalCode"
                      placeholder="ZIP/Post Code"
                      className="relative w-full border-gray-200 rounded-b-md focus:z-10 sm:text-sm"
                    />
                  </div>
                </div>
              </fieldset>

              <div className="col-span-6">
                <button className="block w-full rounded-md  bg-[#4D0084] p-2.5 text-sm text-white transition hover:shadow-lg">
                  Pagar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopCart
