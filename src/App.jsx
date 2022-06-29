import React, { useEffect, useState } from 'react'
import './App.css';
import NAVBAR from './components/NAVBAR';
import Recipe from './components/RECIPE';

const App = () => {
const APP_ID = "f6baeebb";
const APP_KEY = "196b4202ec6eb7c9c1e87e6acc43afe2";
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState("fish");

useEffect(() => {
	getRecipes();
}, [query])

const getRecipes = async () => {
	const response = await fetch
		(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
	const data = await response.json();
	setRecipes(data.hits);
	// console.log(data);

};
const updateSearch = e => {
	setSearch(e.target.value);
};
const getSearch = e => {
	e.preventDefault();
	setQuery(search);
	setSearch("");
}

return (
	<div className="App">
	<NAVBAR/>
	<form className="search-form" onSubmit={getSearch} >
		<input className="search-bar" type="text" value={search}
			onChange={updateSearch} />
		<button className="search-button" type="submit" >
			Search
		</button>
	</form>
    <div className="recipes">
      {recipes.map(recipe => (
      <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
      />

      ))}
    </div>
	</div>
  );
}
export default App;
