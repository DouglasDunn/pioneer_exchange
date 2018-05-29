import React from 'react';


const Textbook = (props) =>{
    return(
            <div>
                <h1>Title:{props.textbook.title}</h1> 
                <h4>Author:{props.textbook.author}</h4>
            </div>
    )
}


export default Textbook;