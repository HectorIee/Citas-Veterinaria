import React from 'react'
import Paciente from './Cards/Paciente';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className=' md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll m-3 md:m-0'>

      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center '>Listado Pacientes</h2>
          <p className='text-md xl:text-xl mt-4 text-center mb-5'>
            Administra tus &nbsp;
            <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
          </p>

          {pacientes.map(paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center '>No Hay Pacientes</h2>
          <p className='text-md xl:text-xl mt-4 text-center mb-5'>
            Comienza Agregando Pacientes y &nbsp;
            <span className='text-indigo-600 font-bold'>Apareceran Aqui</span>
          </p>
        </>
      )}

    </div>
  )
}

export default ListadoPacientes