/* eslint-disable no-unused-vars */  
import RecipeList from '../../components/RecipeList/RecipeList'
import useFetch from '../../hooks/useFetch';
import './Home.css'

function Home() {

const { data, isLoading, error } = useFetch('http://localhost:3000/recipes')

  return (
    <div className='home-container'>
      <h1 className="home-title">Recipe List</h1>  
       {error && <p className='error'>{error}</p>}
       {isLoading && <p className='loading'>Loading Recipies...</p>}
      <RecipeList recipes={data}/>
    </div>
  )
}

export default Home
