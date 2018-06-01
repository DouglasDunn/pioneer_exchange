import React from 'react';


const Textbook = (props) =>{
    return(
            <div>
                <h1>Title:{props.title}</h1> 
                <h4>Author:{props.author}</h4>
                <h5>Price:{props.price}</h5>
            </div>
    )
}


export default Textbook;