import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QoutrSection(){
    return(
        <div className =" section quote">
            <p className =" quote-text"><FontAwesomeIcon  icon = {faQuoteLeft}/>
                Food is everything we are. It's an extension of nationalist feeling,
                ethnic feeling, your personal history, you province, your region, your 
                tribe, your granma. It's inseparable from those from the get-go
            </p>
            <p className ="quote-auther">- Anthony Bourdain</p>
        </div>
    )
}
