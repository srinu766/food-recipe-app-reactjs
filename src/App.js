import React,{useState, useEffect} from 'react'
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const App = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () =>{
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  },[]);

  const handleSubmit = event =>{
    event.preventDefault();
    searchRecipes();
  }

  return (
   <div className=' px-44'>
    <h2  className='font-bold  text-3xl py-10  ml-80'>Our Recipe App</h2>
    
    <SearchBar
        handleSubmit ={handleSubmit}
        value ={query}
        onChange ={event => setQuery(event.target.value)}
        isLoading={isLoading}
    />

    <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-2  sm:px-0'>
      {recipes ? recipes.map(recipe => (
        <RecipeCard
          key ={recipe.idMeal}
          recipe={recipe}
        />
        
      )):"No Recipe"} 
      </div>
    </div>
  )
}

export default App;
