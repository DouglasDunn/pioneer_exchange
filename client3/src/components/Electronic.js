import React from 'react';

const Electronic = (props) => {
    return(
            <div>  
                <h2>Title: {this.props.title}</h2>
                <h4>Description: {this.props.details}</h4>
                <h5>Price: {this.props.price}</h5>
            </div>
        );
}

export default Electronic;