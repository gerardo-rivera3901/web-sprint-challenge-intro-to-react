// Write your Character component here
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import styled from 'styled-components'

const MainStyledDiv = styled.div`
  color: #fff;
  background: #060C0C;
  opacity: 90%;
  border: 1px solid #415A1E;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 78%;
  margin-left: 10%;
  margin-bottom: 2rem;
`

const StyledDiv = styled.div`
  display: flex;
  align-self: center:
  opacity: 100%;
  border: 1px solid #415A1E;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  

  &:hover {
    transform: scale(1.04);
		transition: all 0.2s ease-in-out;
  }
  transition: all 0.2s ease-in-out;

  button {
    color: #362053;
    background: #585A5A;
    border-radius: 10px 30%;
    font-family: 'Saira Stencil One', cursive;
    font-size: 2rem;
    margin: 0%;
    width: 200px;
    height: 4rem;
    outline: none;
  }
`

export default function Characters({name, birthYear}) {
  const [starWarsData, setStarWarsData] = useState([])

  useEffect(() => {
    const fetchStarWarsData = () => {
      Axios.get('https://swapi.dev/api/people/')
        .then(res => {
          console.log(res.data.results);
          setStarWarsData(res.data.results)
        })
        .catch(err => {
        debugger
        })
    }
    fetchStarWarsData()
  }, [])

  return (
    <MainStyledDiv>
      {starWarsData.map(element => (
        <StyledDiv>
          <h1 key={element.id}>{element.name}</h1>
          <button key={element.id}>{element.birth_year}</button>
        </StyledDiv>
      ))}
    </MainStyledDiv>
  )
}

