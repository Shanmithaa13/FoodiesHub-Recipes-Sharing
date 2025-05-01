import CustomImage from "./Customimage"

export default function HeroSection(){
    const image = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg",
    ]
    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are WE About</h1>
                <p className="info">FoodiesHub is a place where you can please your soul and tummy with 
                    delicious food recepies of all cuisine.And our servics is absolutely free. So start exploring now
                <button className="btn">Explore now </button>
                </p>
            </div>
            <div className="col gallery">
                {image.map((src ,index) => (
                    <CustomImage  key ={index} imgSrc = {src} pt ={"90%"} />
                ))}
            </div>
            
        </div>
    )
}