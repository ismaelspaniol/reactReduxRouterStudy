import React from 'react';

const Rainbow = (WrappedComponent)=>{
    const colours =['read', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColours = colours[Math.floor(Math.random()* 5)]
    const className = randomColours + '-text';

    return (props) =>{
       
        return (
            <div className={className}>
                <WrappedComponent {...props}/>

            </div>
        )
    }


}

export default Rainbow;