import {Link } from 'react-router-dom' 

const ItemNotFound = () => {
  return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-2xl font-semibold text-blueEcommerce">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Producto no encontrado</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Disculpa, el producto que estás buscando no existe o no está disponible por el momento</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            
            <Link
               to={`/`} 
              className="rounded-md bg-blueEcommerce px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blueStrongEcommerce focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blueEcommerce"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
  )
}

export default ItemNotFound