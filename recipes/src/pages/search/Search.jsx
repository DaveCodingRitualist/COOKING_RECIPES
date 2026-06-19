import React from 'react'
import {useLocation} from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../component/RecipeList'
const Search = () => {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = `http://localhost:3000/recipes`
  const { data: allRecipes, isPending, error } = useFetch(url)
  
  // Filter recipes on the frontend based on search query
  const recipes = allRecipes ? allRecipes.filter((recipe) => 
    recipe.title.toLowerCase().includes(query.toLowerCase()) ||
    recipe.method.toLowerCase().includes(query.toLowerCase()) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query.toLowerCase()))
  ) : null

  return (
    <div>
      <h2 className='page-title'>Recipes including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  )
}

export default Search