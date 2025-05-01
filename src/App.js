import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './styles/index.scss';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  const recipes = [
    {
      title: "Chicken Wings",
      image: "/img/gallery/img_7.jpg",
      authorImg: "/img/Top_chiefs/img_1.jpg",
      ingredients: [
        "500g chicken wings",
        "2 tbsp soy sauce",
        "1 tsp chili powder",
        "Salt to taste",
        "1 tbsp oil"
      ],
      steps: [
        "Marinate chicken with soy sauce, chili powder, and salt.",
        "Heat oil in a pan.",
        "Fry the wings until golden brown.",
        "Serve hot!"
      ]
    },
    {
      title: "Omelette salad",
      image: "/img/gallery/img_8.jpg",
      authorImg: "/img/Top_chiefs/img_5.jpg",
      ingredients: [
        "2 eggs",
        "1/4 cup chopped onions",
        "Lettuce leaves",
        "Salt and pepper",
        "1 tbsp olive oil"
      ],
      steps: [
        "Whisk the eggs with salt and pepper.",
        "Cook the omelette in olive oil.",
        "Cut into strips and serve over lettuce with onions."
      ]
    },
    {
      title: "Biriyani",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/Top_chiefs/img_6.jpg",
      ingredients: [
        "2 cups basmati rice",
        "500g chicken",
        "1 cup yogurt",
        "Spices (garam masala, turmeric, chili powder)",
        "1 onion, sliced"
      ],
      steps: [
        "Marinate chicken with yogurt and spices.",
        "Fry onions, then add chicken and cook until done.",
        "Layer rice and chicken, cook on low flame.",
        "Garnish and serve hot."
      ]
    },
    // Add more recipes as needed
  ];

  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes recipes={recipes} />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/recipe/:title" element={<RecipeDetails recipes={recipes} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
