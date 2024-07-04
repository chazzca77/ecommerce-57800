const ItemListContainer = ({ saludo } ) => {

  return (
    <div className="w-full h-full flex justify-center p-12">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4 ">
          <div className="font-bold text-blueEcommerce text-xl mb-2">{saludo}</div>
          <p className="text-gray-700 text-base">
            Esta es el la primera Prentrega del curso
          </p>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer