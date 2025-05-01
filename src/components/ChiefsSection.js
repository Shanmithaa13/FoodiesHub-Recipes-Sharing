import ChiefCard from "./ChiefsCard"

export default function ChiefsSection(){
    const chiefs =[
        {
            name: "Cheruba",
            img: "/img/Top_chiefs/img_7.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "Saravanan",
            img: "/img/Top_chiefs/img_8.jpg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: "/img/Top_chiefs/img_3.jpg",
            recipesCount: "13",
            cuisine: "Italian"
        },
        {
            name: "Damu",
            img: "/img/Top_chiefs/img_4.jpg",
            recipesCount: "10",
            cuisine: "Indian",
        },
        {
            name: "Venkatesh ",
            img: "/img/Top_chiefs/img_5.jpg",
            recipesCount: "10",
            cuisine: "Chinese",
        },
        {
            name: "Madhampatty",
            img: "/img/Top_chiefs/img_6.jpg",
            recipesCount: "10",
            cuisine: "Indian",
        },
    ]
    return(
        <div className="section chiefs">
            <h1 className="title "> Our Top Chiefs</h1>
            <div className="top-chiefs-container">{
                }
                
                { chiefs.map(chief => <ChiefCard key ={chief.name} chief={chief} /> )}
            </div>
        </div>
    )
}