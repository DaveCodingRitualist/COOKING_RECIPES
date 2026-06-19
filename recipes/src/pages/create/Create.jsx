import './Create.css'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const Create = () => {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [NewIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const navigate = useNavigate()
  const { postData } = useFetch('http://localhost:3000/recipes', 'POST')

  const handleSubmit = (e) => {
    e.preventDefault()
    const recipe = { title, ingredients, method, cookingTime: cookingTime + ' minutes' }
    setTitle('')
    setMethod('')
    setCookingTime('')
    setIngredients([])
    postData(recipe)
    navigate('/')
  }

  const addIngredient = (e) => {
    e.preventDefault()
    const ing = NewIngredient.trim()
    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }
  
  return (
    <div className='create'>
      <h2 className="page-title">Create a new recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input 
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          />
        </label>
       <label>
            <span>Recipe ingredients:</span>
            <div className="ingredients">
               <input 
            type="text"
            onChange={(e) => setNewIngredient(e.target.value)}
            value={NewIngredient}
            ref={ingredientInput}
            />
            <button onClick={addIngredient}>Add</button>
            </div>
          </label>
          <p>Current ingredients: {ingredients.map(ing => <em key={ing}>{ing} ,</em>)}</p>
        <label>
          
          <span>Recipe method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
          />
        </label>
        <label>
          <span>Cooking time:</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
          />
        </label>
        <button className="btn">Submit</button>
      </form>
     
    </div>
  )
}

export default Create
