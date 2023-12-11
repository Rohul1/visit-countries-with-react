import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  return (
  <div>
<LoadCountries></LoadCountries>
  </div>
  )
}

function LoadCountries (){
  const [countries, setCountries]= useState ([]);
  useEffect (()=> {
    fetch("https://restcountries.com/v3.1/all")
    .then(res =>res.json())
    .then(data =>setCountries(data));
  } ,[])

  return(
    <div>
      <h1>Visiting all the countries in the world</h1>
      <h2>Available countries : {countries.length}</h2>


      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}
 function Country (props) {
return(
<div>
<h2>Name : {props.name}</h2>
<h3>Population : {props.population}</h3>
</div>
)
}

export default App
