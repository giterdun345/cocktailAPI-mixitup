import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Random= (props)=>{

  const [data, setData ]= useState({
                                    "strDrink": '',
                                    "strDrinkThumb":'',
                                    "strGlass": '',
                                    "strAlcoholic":''
                                  })
 
  const populatedData= (
    <Link to={`/names-detail/${data.idDrink}`} alt='cocktail image click for details' style={{cursor:"pointer"}}>
      <img className='img' style={{width:"20.5vw", textAlign:"center", borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}}src={`${data.strDrinkThumb}/preview`} alt="random cocktail generated" />
      <h2>{data.strDrink}</h2>
      <h3>{data.strAlcoholic}</h3>
      <h4>{`${data.strGlass}`}</h4>
    </Link>
  )

  const stillLoading= (
    <section>
      <h2>Still loading...</h2>
    </section>

  )
  
  useEffect(()=>{
    // fetches a random cocktail
    if(props.loading){
      fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(res => res.status !== 200 ? console.log(`Status Code: ${res.status}`): res.json())
      .then(data => {setData(data.drinks[0])})
      .catch(err => console.log(`Fetch Error; Come on man:${err}`))
    }
  }, [props.loading])

  return(
    
    <section className="modal-content">
      {/* <h1 style={{fontSize:"3vw", textAlign:"center", fontFamily:"Spartan"}}>Randomly Generated Cocktails</h1> */}
      {/* <button type="button" onClick={props.showModal}>X</button> */}
      <div className="random-modal">
        <div className='random-cocktail'>
        {data ? populatedData : stillLoading}
        </div>
        <div className='random-cocktail'>
        {data ? populatedData : stillLoading}
        </div>
        <div className='random-cocktail'>
        {data ? populatedData : stillLoading}
        </div>
      </div>
      <div style={{textAlign:"center"}}>
        <span style={{fontSize:"2vw", whitespace:"no-wrap", color:"#d62828ff"}}>
          <Link exact to='/random-list' style={{textDecoration:"none", color:"#f77f00ff"}}>
            Get more random &nbsp; 
            <span style={{textDecoration:"underline", color:"#d62828ff"}}>here!</span>
          </Link>
        </span>
        <br/>
        <span style={{fontSize:"1vw", whitespace:"no-wrap", color:"#d62828ff"}}>
          Drinks will remian the same until production API key is approved.
        </span>                    
      </div>
    </section>
  )
}

export default Random;