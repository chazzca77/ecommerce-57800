
const FormularioCheckout = ({datosForm,handleChangeInput,handleSubmitForm, puedeContinuar}) =>{
  return (
    <form className="max-w-sm mx-auto p-3"  onSubmit={handleSubmitForm}  >
      <div className="mb-3">
        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre</label>
        <input type="name" id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blueEcommerce
         focus:border-blueEcommerce block w-full p-2.5 " placeholder="Nombre" name="nombre" value={datosForm.nombre} onChange={handleChangeInput}  required/>
      </div>
      <div className="mb-3">
        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 ">Apellido</label>
        <input type="nombre" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blueEcommerce
         focus:border-blueEcommerce block w-full p-2.5 " placeholder="Apellido (s)" name="apellido" value={datosForm.apellido} onChange={handleChangeInput} required />
      </div>      
      <div className="mb-3">
        <label className="block mb-2 text-sm font-medium text-gray-900 ">Teléfono</label>
        <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blueEcommerce
         focus:border-blueEcommerce block w-full p-2.5 " 
         maxLength={10} type="number" placeholder="771128515" required
         onInput={(event) => {
          if (event.target.value.length > event.target.maxLength) event.target.value = event.target.value.slice(0, event.target.maxLength);
        }}
         name="telefono" value={datosForm.telefono} onChange={handleChangeInput}/>
      </div>
      <div className="mb-3">
        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
        <input type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blueEcommerce
         focus:border-blueEcommerce block w-full p-2.5 " placeholder="nombre@correocom" name="email" value={datosForm.email} onChange={handleChangeInput} required/>
      </div>
      <div className="mb-3">
        <label className="block mb-2 text-sm font-medium text-gray-900">Repite email</label>
        <input type="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blueEcommerce
         focus:border-blueEcommerce block w-full p-2.5 " autoComplete="off" placeholder="nombre@correocom"  name="repEmail" value={datosForm.repEmail} onChange={handleChangeInput} required/>
      </div>
      <button disabled={!puedeContinuar} 
      type="submit" className={`text-white ${puedeContinuar ? 'bg-blueEcommerce hover:bg-blueStrongEcommerce' : 'bg-gray-500'} focus:ring-4 focus:outline-none mb-3
       focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
        Realizar compra</button>
    </form>
  ) 
}

export default FormularioCheckout