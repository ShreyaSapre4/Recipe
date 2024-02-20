import React from 'react'
import { useState } from 'react'
import { LuSearch } from 'react-icons/lu'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function Search() {

    const [Input, setInput]= useState("")
    const navigate= useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault()
        navigate('/searched/'+Input)
    }
  return (
    <div>
      <FormStyle onSubmit={submitHandler}>
        <LuSearch />
        <input onChange={(e)=>{
            setInput(e.target.value)
        }} type='text' value={Input} />
      </FormStyle>
    </div>
  )
}

const FormStyle = styled.form`
margin: 0rem 10rem;
position: relative;
width: 100%;
color: white;
input{
    border: none;
    font-size:1.3rem;
    border-radius: 1rem;
    padding: 1rem 3rem;
    color:white;
    outline:none;
    background: linear-gradient(35deg, #ff724c, #fdbf50);
    width:70%;
}

svg{
    position: absolute;
    top: 40%;
    left: 1%;
    transform: translate(100%, -50%)
    color:white;
}
`

export default Search
