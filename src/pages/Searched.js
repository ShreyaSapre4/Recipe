import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Searched() {
    const [searched, setsearched]= useState([])
  let params= useParams();

  const getSearched = async (name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}
  `)
  const recipe = await data.json()
  console.log(recipe)
  setsearched(recipe.results);
}; 

useEffect(()=>{
  getSearched(params.search)
}, [params.search]);

  return (
    <Grid>
        {searched.map((item)=>{
            return(
              <Link to={'/recipes/'+ item.id}>
              <Card key={item.id}>
                <img src={item.image}></img>
                <h4>{item.title}</h4>
              </Card>
              </Link>
            )
        })}
    </Grid>
  )
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
  filter: brightness(70%)
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
  line-height:1.5rem;
}
`;

export default Searched
