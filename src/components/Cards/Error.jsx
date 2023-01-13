const Error = ({mensaje}) => {
  return (
    <div className='my-2 bg-red-100 border-l-4 border-1-4 border-red-500 text-red-700 py-4 px-2'>
      <p className='font-bold'>Error</p>
      {mensaje}
    </div>
  )
}

export default Error