import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'

function Cuisine() {
  const [cuisine, setCuisine]= useState([])
  let params= useParams();

  const getCusisine = async (name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}
  `)
  const recipe = await data.json()
  console.log(recipe)
  setCuisine(recipe.results);
}; 

useEffect(()=>{
  getCusisine(params.type)
}, [params.type]);

return <Grid>
    {cuisine.map((item)=>{
      return(
        <Link to={'/recipes/'+ item.id}>
        <Card key={item.id}>
          <img src={item.image}></img>
          <h4>{item.title}</h4>
        </Card>
        </Link>
      )
    })}
  </Grid>;
}

const Grid = styled.div`
display  : grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap:2rem;
`;

const Card = styled.div`
border-radius: 2rem;
margin: 2rem;
position: relative;
min-height: 17rem;

img{
  border-radius: 2rem;
  position: absolute;
  left:0;
  width:100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(80%)
}

h4{
  position:absolute;
  z-index:12;
  left:50%;
  bottom:0%;
  transform: translate(-50%,0);
  color:white;
  text-align:center;
  height:50%;
  display-flex;
  justify-content:center;
  align-items: center;
  font-family: 'Dancing Script', cursive;
  font-size:1.5rem;
  line-height:1.3rem;
}
`;
export default Cuisine
