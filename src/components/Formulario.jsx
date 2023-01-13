import React, { useState, useEffect } from 'react'
import Error from './Cards/Error';

const Formulario = ({pacientes, setPacientes, paciente }) => {
  const [mascota, setMascota] = useState('');
  const [dueño, setDueño] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0 ){
      setMascota(paciente.mascota) 
      setDueño(paciente.dueño) 
      setEmail(paciente.email) 
      setAlta(paciente.alta) 
      setSintomas(paciente.sintomas) 
    }
  },[paciente])

  const generarID = () => {
    const random = Math.random().toString(32).substring(2)
    const fecha = Date.now().toString(32)
    return random + fecha
  }

  const handleSubmit = e => {
    e.preventDefault()
    //Validacion del formulario 
    if ([mascota, dueño, email, alta, sintomas].includes('')) {
      console.log('Hay algun campo vacio')
      setError(true)
    } else {
      setError(false)

      //Objecto del paciente
      const objectoPaciente = {
        mascota,
        dueño,
        email,
        alta,
        sintomas
      }

      if(paciente.id) {
        //Editando un registro
        objectoPaciente.id = paciente.id 
        const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objectoPaciente : pacienteState)
        setPacientes(pacientesActualizados)
      } else {
        //Registrando Nuevo
        objectoPaciente.id = generarID()
        setPacientes([...pacientes, objectoPaciente])
      }
      //Reinicio del form
      setMascota(''), setDueño(''), setEmail(''), setAlta(''), setSintomas('')
    }
  }

  return (
    <div className='md:w-1/2 p-4 sm:p-0 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center '>Seguimiento Pacientes</h2>
      <p className='text-md xl:text-xl mt-4 text-center mb-5'>
        Añade Pacientes y &nbsp;
        <span className='text-indigo-600 font-bold'>Administrarlos</span>
      </p>

      <form className='bg-white shadow-2xl rounded-lg py-10 px-5 m-5'
        onSubmit={handleSubmit}>
        {error && <Error mensaje='Todos los campos son obligatorios' />}

        <div className='mb-4'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota: </label>
          <input className='border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md'
            id='mascota' type='text' placeholder='Nombre de la mascota'
            value={mascota} onChange={e => setMascota(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='dueño' className='block text-gray-700 uppercase font-bold'>Nombre Propietario: </label>
          <input className='border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md'
            id='dueño' type='text' placeholder='Nombre del propietario'
            value={dueño} onChange={e => setDueño(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email: </label>
          <input className='border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md'
            id='email' type='text' placeholder='Email propietario'
            value={email} onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta: </label>
          <input className='border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md'
            id='alta' type='date'
            value={alta} onChange={e => setAlta(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Síntomas: </label>
          <textarea className='border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md'
            id='sintomas' placeholder='Describe los Sintomas'
            value={sintomas} onChange={e => setSintomas(e.target.value)} />
        </div>

        <input className='bg-indigo-800 w-full p-2 text-white uppercase font-bold rounded hover:bg-indigo-900 cursor-pointer transition-colors'
          type='submit' value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} />
      </form>
    </div>
  )
}

export default Formulario