import React, { useState, useEffect } from 'react';

const Random= (props)=>{

  const [data, setData ]= useState({
                                    "strDrink": '',
                                    "strDrinkThumb":'',
                                    "strGlass": '',
                                    "strAlcoholic":''
                                  })

 
  const populatedData= (
    <section>
      <img className='img' style={{width:"20.5vw"}}src={`${data.strDrinkThumb}/preview`} alt="random cocktail generated" />
      <h2>{data.strDrink}</h2>
      <h3>{data.strAlcoholic}</h3>
      <h4>{`${data.strGlass}`}</h4>
    </section>
  )

  const stillLoading= (
    <section>
      <h2>Still loading...</h2>
    </section>

  )
  
  useEffect(()=>{
    if(props.loading){
      fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(res => res.status !== 200 ? console.log(`Status Code: ${res.status}`): res.json())
      .then(data => {setData(data.drinks[0])
      console.log(data)})
      .catch(err => console.log(`Fetch Error; Come on man:${err}`))
    }
  }, [props.loading])

  return(
    
    <section className="modal-content">
      <h1 style={{fontSize:"3vw", textAlign:"center"}}>Randomly Generated Cocktails</h1>
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
      <span style={{textAlign:"center", fontSize:"2vw", color:"#d62828ff"}}>Drinks will remian the same until production API key is approved.</span>                    
    </section>
  )
}

export default Random;