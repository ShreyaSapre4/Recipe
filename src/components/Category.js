import { GiFullPizza, GiNoodles, GiHamburger } from "react-icons/gi";
import { LuSalad } from "react-icons/lu";
import styled from "styled-components"
import React from 'react'
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <div>
        <List>
        <Slink to={'/Cuisine/Italian'}>
        <GiFullPizza />
        <h4>Italiano</h4>
      </Slink>

      <Slink to={'/Cuisine/Chinese'}>
        <GiNoodles />
        <h4>Chinese</h4>
      </Slink>

      <Slink to={'/Cuisine/Indian'}>
        <LuSalad />
        <h4>Indian</h4>
      </Slink>

      <Slink to={'/Cuisine/American'}>
        <GiHamburger />
        <h4>American</h4>
      </Slink>
        </List>
    </div>
  )
}

const List = styled.div`
display:flex;
justify-content: center;
margin: 1rem 0rem;
`

const Slink = styled(NavLink)`
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
border-radius:100%;
margin-right:2rem;
width:6rem;
height:6rem;
background: linear-gradient(35deg, #ff724c, #fdbf50);
cursor: pointer;
text-decoration: none;

h4{
  color:white;
  font-size: 1rem;
  margin-top:5px;
}

svg{
  color:white;
  font-size: 2rem;
}
&.active{
  filter:brightness(70%);
}
`
export default Category
