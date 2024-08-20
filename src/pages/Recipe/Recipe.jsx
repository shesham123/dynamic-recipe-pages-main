import { useParams, Link} from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;
  const { error, isLoading, data: recipe } = useFetch(url)

  return (
    <div className="recipe-container">

      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading Recipe...</p>}
 
      {recipe && (
        <div className='recipe'>
          <h2 className="recipe-title">{recipe.title}</h2>
          <h3 className='recipe-author'> Recipe By {recipe.author}</h3>


          <div className="ingredients">
              <h3 className='recipe-ingredients recipe-subtitle'>Ingredients</h3>
              <ul>
                {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
              </ul>
          </div>

          <div className="instructions">
              <h3 className='recipe-instructions recipe-subtitle'>Instructions</h3>
              <ul>
                {recipe.instructions.map(ing => <li key={ing}>{ing}</li>)}
              </ul>
          </div>

          
        </div>
      )}

        <Link to="/" >Return to main page</Link>
    </div>
  )
}