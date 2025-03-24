import React, {useState} from 'react'
const Message = () => {
    
    const [message, setMessage] = useState("Welcome Visitor");
    
    const changeMessage = () => {
        setMessage("Thanks for subscribing")
    }
    return (

        <div>
            <h1>{message}</h1>
        <button onClick = {changeMessage}
        
            >Subscribe</button>

        </div>
    )
}

export default Message