import React from "react";
const Card=(props)=>{
    return(
        <>
         <div>
      <h1>{props.movie.Year}</h1>
      <img src={props.movie.Poster!="N/A"?props.movie.Poster:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcringemdb.com%2F&psig=AOvVaw2XwvGdAxHTfiGcbTzI0cLp&ust=1696614160078000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDwrqu634EDFQAAAAAdAAAAABAJ"}/>
      <h2>{props.movie.Type}</h2>
      <h2>{props.movie.Title}</h2>
    </div>
        </>
    )
}

export default Card;