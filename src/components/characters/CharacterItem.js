import React from 'react'
import '../../App.css'

const CharacterItem = ( {item} ) => {
    console.log(item);
    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img className='logo' src={item.image} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {item.name}
            </li>
            <li>
              <strong>Gender:</strong> {item.gender}
            </li>
            <li>
              <strong>Species:</strong> {item.species}
            </li>
            <li>
              <strong>HomeWorld:</strong> {item.homeworld}
            </li>
            <li>
              <strong>Born Location:</strong> {item.bornLocation}
            </li>
            <li>
              <strong>Born:</strong> {item.born}
            </li>
            <li>
              <strong>Died:</strong> {item.died}
            </li>
            <li>
              <strong>Appearence:</strong>
              <br></br>
              <strong>Eye Color:</strong> {item.eyeColor}
              <br></br>
              <strong>Hair Color:</strong> {item.hairColor}
              <br></br>
              <strong>Skin Color:</strong> {item.skinColor}  
            </li>
            <li>
              <strong>Affiliations:</strong> {item.affiliations.join(', ')}
            </li>
            <li>
              <strong>Cybernetics:</strong> {item.cybernetics}
            </li>
            <li>
              <strong>Apprentices:</strong> {item.apprentices}
            </li>
            <li>
              <strong>Learn more about {item.name}:</strong> <a className='visited_link' href={item.wiki}>{item.wiki}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
