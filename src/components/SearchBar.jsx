import React from 'react'

const SearchBar = ({
  value,
  isLoading,
  handleSubmit,
  onChange
}) => {
  return (
    <form onSubmit={handleSubmit}>
    <input
     value={value}
     disabled ={isLoading}
     onChange={onChange}
     placeholder='Search Recipe'
     className='px-10 ml-64 py-1 bg-slate-200'
     />
     <input
     disabled={isLoading || !value}
     type='submit'
     value='Search'
     className='font-bold rounded py-1 px-4 bg-blue-400 hover:bg-blue-500 cursor-pointer'
     />
    </form>
  )
}

export default SearchBar
