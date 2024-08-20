/* eslint-disable react/prop-types */ 
import './RecipeList.css' 
import { Link } from 'react-router-dom'
  
function RecipeList({ recipes }) {

  if (!recipes) {
    return <p>No recipes available.</p>;
  }
  
  return (

    <div className='recipe-list'> 
      {recipes.map(recipe => (
        <div key={recipe.id} className='card'>  
            <h3 className='recipelist-title'>{recipe.title}</h3>
            <h4 className='recipelist-subtitle'>By {recipe.author}</h4>
            <p className='recipe-cooking-time'>Cook Time - {recipe.cookingTime} Minutes</p>
            <Link to={`/recipes/${recipe.id}`}>Cook Now</Link>
        </div> 
      ))}
    </div>
  )
}

export default RecipeList