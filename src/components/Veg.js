import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Veg() {
    const [veg, setVeg] = useState([]);
    useEffect(() => {
      getVeg();
    }, []);

    const getVeg = async () => {
      const check = localStorage.getItem("veg");
  
      if (check) {
        setVeg(JSON.parse(check));
      } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15&tags=vegetarian`
        );
        const data = await api.json();
        localStorage.setItem("veg", JSON.stringify(data.recipes));
        setVeg(data.recipes);
      }
    };
  
    return (
      <div>
        <Wrapper>
            <h2>Top veg picks</h2>
          <Splide
            options={{
              perPage: 4,
              drag: "free",
              gap: "0.5rem",
            }}
          >
            {veg.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card>
                    <Link to={'/recipes/'+recipe.id}>
                    <h3>{recipe.title}</h3>
                    <img src={recipe.image} alt={recipe.title} />
                    </Link>
                  </Card>
                </SplideSlide>
              );
            })}
          </Splide>
        </Wrapper>
      </div>
    );
  }
  const Wrapper = styled.div`
    margin: 4rem 0rem;
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
  
  h3{
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
    font-size:1.25rem;
    line-height:1.1rem;
  }
  `;

export default Veg