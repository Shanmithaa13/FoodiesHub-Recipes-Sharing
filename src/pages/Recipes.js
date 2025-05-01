import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {   
    const recipe =[
        {
            title:"chicken pan pizza",
            image:"/img/gallery/img_8.jpg",
            authorImg:"/img/Top_chiefs/img_7.jpg",
            ingredients:" country chicken, shallots, dried red chilies, gingelly oil, mustard seeds, fenugreek seeds, curry leaves, water, salt, turmeric, and optionally coriander leaves",
            Steps: "Wash the chicken and deseed the red chilies, optionally soaking or grinding them. Heat sesame oil in a pan and sauté fennel seeds (if using), curry leaves, and the red chilies. Add chopped shallots and salt, cooking until they become translucent. Stir in ginger-garlic paste and spice powders if desired. Add the chicken pieces, mix well, and sauté briefly. Cover the pan and cook until the chicken is cooked through and the liquid has evaporated. Remove the lid, increase the heat, and roast the chicken until it becomes dry. Finally, stir in shredded coconut and pepper powder if you like. Garnish with fresh curry leaves and serve the Chicken Chinthamani hot."
        },
        {
            title:"Non-veg salad",
            image:"/img/gallery/img_6.jpg",
            authorImg:"/img/Top_chiefs/img_8.jpg",
        },
        {
            title:"chicken pan ",
            image:"/img/gallery/img_3.jpg",
            authorImg:"/img/Top_chiefs/img_3.jpg",
        },
        {
            title:"Beef Noodles",
            image:"/img/gallery/img_4.jpg",
            authorImg:"/img/Top_chiefs/img_4.jpg",
        },
        {
            title:"Burger",
            image:"/img/gallery/img_5.jpg",
            authorImg:"/img/Top_chiefs/img_5.jpg",
        },
        {
            title:"Biriyani",
            image:"/img/gallery/img_6.jpg",
            authorImg:"/img/Top_chiefs/img_6.jpg",
        },
        {
            title:"Chicken Wings",
            image:"/img/gallery/img_7.jpg",
            authorImg:"/img/Top_chiefs/img_1.jpg",
        },
        {
            title:"Omelette salad",
            image:"/img/gallery/img_8.jpg",
            authorImg:"/img/Top_chiefs/img_5.jpg",
        }
    ].sort(() => Math.random() -0.5)
    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/*<RecipeCard />*/}
                {recipe.map((recipe, index) => (
                    <RecipeCard key ={index}recipe = {recipe} />
                ))}
            </div>
     </div>
    );
}
