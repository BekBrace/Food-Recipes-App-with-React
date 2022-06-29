import React from "react";
import './RECIPE.css';

const Recipe = ({title,calories,image,ingredients}) =>{
	return(
		<div className="recipe">
			<h1>
				{title}
			</h1>
			<ul>
				{ingredients.map(ingredient=>(
					<li id="ing" >{ingredient.text}</li>
				))}
			</ul>
			<img className="image" src={image} alt=""/>

		</div>
	);

}
export default Recipe;
