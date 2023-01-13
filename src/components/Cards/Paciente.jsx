import React from 'react'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { mascota, dueño, email, alta, sintomas, id } = paciente;

  const handleEliminar = () => {
    const result = confirm('Desea eliminar este paciente ? ')
    if (result) {
      eliminarPaciente(id)
    } 
  }

  return (
    <div className='m-5 bg-white shadow-md px-5 py-6 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'> Nombre: &nbsp;
        <span className='font-normal normal-case'>{mascota}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'> Propietario: &nbsp;
        <span className='font-normal normal-case'>{dueño}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'> Email: &nbsp;
        <span className='font-normal normal-case'>{email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'> Fecha Alta: &nbsp;
        <span className='font-normal normal-case'>{alta}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'> Síntomas: &nbsp;
        <span className='font-normal normal-case'>{sintomas}</span>
      </p>

      <div className='flex justify-around mt-5'>
        <button className='py-2 px-5 md:px-10  bg-indigo-800 hover:bg-indigo-900 text-white font-bold uppercase rounded-lg'
          type='button' onClick={() => setPaciente(paciente)}
        >Editar</button>
        <button className='py-2 px-5 md:px-10 bg-red-800 hover:bg-red-900 text-white font-bold uppercase rounded-lg'
          type='button' onClick={handleEliminar}
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Paciente