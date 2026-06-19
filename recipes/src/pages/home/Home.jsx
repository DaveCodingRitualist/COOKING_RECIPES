import './Home.css'

import RecipeList from '../../component/RecipeList'

import { useFetch } from '../../hooks/useFetch'
const Home = () => {
  const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes')
  console.log(recipes)
  return (
    <div className='home'>
      {error && <div className='error'>{error}</div>}
      {isPending && <div className='loading'>Loading...</div>}
       {recipes && <RecipeList recipes={recipes} />}
    </div>
  )
}

export default Home