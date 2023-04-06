import React from 'react'

const RecipeCard = ({recipe}) => {
    const { idMeal, strMeal, strCategory, strMealThumb} = recipe
  return (
    <div className='flex  sm:grid-cols-2 md:grid-cols-4 gap-2  sm:px-0'>

   
    <div className='max-w-sm mx-auto  shadow-lg p-3'>
    <img
        src={strMealThumb}
        alt={strMeal}
        className=' h-48 w-96 space-x-5 flex-auto'
    />
    <div className=''>
    <div className='text-center'>
    <span className='text-gray-700 text-base'>{strCategory}</span>
    <h3 className='font-bold text-xl mb-2 pt-2'>{strMeal}</h3>
    <a href={"https://www.themealdb.com/meal/"+ idMeal} 
    className='bg-orange-500 hover:bg-orange-600 px-5 rounded-2xl py-2'
    >Ingredients</a>
    </div>
    </div>
    </div>
    </div>
  )
}

export default RecipeCard
