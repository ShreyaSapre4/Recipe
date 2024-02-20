import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'

function Recipe() {

  let params = useParams()
  const [details, setDetails]= useState({})
  const [activeTab, setActiveTab] = useState("instructions")

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json()
    setDetails(detailData)
  }
  useEffect(()=>{
    fetchDetails()
  },[params.name])

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button className={activeTab ==='instructions' ? 'active': ''} onClick={()=>{setActiveTab("instructions")}}>
          Instructions
        </Button>
        <Button className={activeTab ==='ingredients' ? 'active': ''} onClick={()=>{setActiveTab("ingredients")}}>
        Ingredients 
        </Button>
        {activeTab === 'instructions' && (<div>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div>)}

        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient)=>(
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
        
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper= styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display:flex;
  .active{
    filter:brightness(70%);
  }
  h2{
    margin-bottom:2rem;
  }
  li{
    font-size:1rem;
    line-height:2rem;
  }
  ul{
    margin-top: 2rem;
  }
`

const Button=styled.button`
padding: 1rem 2rem;
color: white;
background: linear-gradient(35deg, #ff724c, #fdbf50);;
border: 3px solid #ff724c;
margin-right: 2rem;
font-size: 0.8rem;
font-weight: 600;
`
const Info = styled.div`
 margin-left:10rem;
`
export default Recipe
