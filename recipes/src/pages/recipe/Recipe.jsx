import './Recipe.css'

import { useParams } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme';


const Recipe = () => {
  const { mode } = useTheme()
  const { id } = useParams()
  const url = `http://localhost:3000/recipes/${id}`
  const { data: recipe, isPending, error } = useFetch(url)

  return (
    <div className={` recipe ${mode} `}>
      {isPending && <div className='loading'>Loading</div>}
      {error && <div className='error'>{error}</div>}
        {recipe && (
          <>
          <h2 className="page-title">{recipe?.title}</h2>
          <p>Take {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
          </>
        )}
    </div>
  )
}

export default Recipe