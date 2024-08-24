// src/App.jsx

//css
import "./App.css"

//npm modules
import { useState } from "react"




const App = () => {
  const [totalAgility, setTotalAgility] = useState(0)
  const [totalStrength, setTotalStrength] = useState(0)
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]
  )

  const handleAddFighter = fighter => {   
    if (money >= fighter.price) {
      setTeam ([...team, fighter])
      setMoney(money - fighter.price)
      setTotalStrength(totalStrength + fighter.strength)
      setTotalAgility(totalAgility + fighter.agility)

    } else{
      return console.log("Not enough money")      
    }     
  }

  const handleRemoveFighter = fighter => {
    setTeam (team.filter(el => el.name !== fighter.name))
    setMoney(money + fighter.price)
    setTotalStrength(totalStrength - fighter.strength)
    setTotalAgility(totalAgility - fighter.agility)
  }
  
  
  return (
    <>
      <h2>Money: {money}</h2>
      <h2>Team agility: {totalAgility}</h2>
      <h2>Team strength: {totalStrength}</h2>
      <h2>Team</h2>
      {team.length ?
      team.map((fighter, idx) => 
        <ul key={idx}>
          <li><img src={fighter.img} alt="" /></li>
          <li>{fighter.name}</li>
          <li>{fighter.price}</li>
          <li>{fighter.strength}</li>
          <li>{fighter.agility}</li>
          <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
        </ul>
      )
         : "Pick some team members"}
      <h2>Fighters</h2>
      {zombieFighters.map((fighter, idx) => 
        <ul key={idx}>
          <li><img src={fighter.img} alt="" /></li>
          <li>{fighter.name}</li>
          <li>{fighter.price}</li>
          <li>{fighter.strength}</li>
          <li>{fighter.agility}</li>
                    
          <button onClick={() => handleAddFighter(fighter)}>Add</button>
        </ul>
      )}
    </>
  );
}

export default App
