import CustomImage from "./Customimage";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt="65%" />
      <div className="recipe-card-info">
        <img className="auther-img" src={recipe.authorImg} alt=" " />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">This is a simple recipe for {recipe.title}</p>

        {/* Link to the dynamic route based on recipe title */}
        <Link to={`/recipe/${encodeURIComponent(recipe.title)}`} className="view-btn">
          VIEW RECIPE
        </Link>
      </div>
    </div>
  );
}
