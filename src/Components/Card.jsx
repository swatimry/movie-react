import React from "react";
import { Box, Grid } from "@mui/material";
const Card = (props) => {
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <div className="moviecard">
        <h3 className="title">{props.movie.Title}</h3>
        <img
          className="poster"
          src={
            props.movie.Poster != "N/A"
              ? props.movie.Poster
              : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcringemdb.com%2F&psig=AOvVaw2XwvGdAxHTfiGcbTzI0cLp&ust=1696614160078000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDwrqu634EDFQAAAAAdAAAAABAJ"
          }
        />
        <div className="stats">
          <div className="title">
            <h2 className="title">Genre: {props.movie.Type}</h2>
          </div>
          <div className="year">
            <h2 className="title">{props.movie.Year}</h2>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Card;
