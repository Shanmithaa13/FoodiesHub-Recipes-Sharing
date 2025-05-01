// src/pages/RecipeDetails.js

import { useParams } from "react-router-dom";
//import "./RecipeDetails.scss"; // optional: if you want to style it separately
import '../styles/partials/RecipeDetails.scss';



export default function RecipeDetails({ recipes }) {
  const { title } = useParams();

  // Find the matching recipe based on the title from URL
  const recipe = recipes.find((r) => r.title === title);

  if (!recipe) {
    return <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Recipe not found 😢</h2>;
  }

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }}
      />

      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Method</h2>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
