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
    <Link to={`/names-detail/${data.idDrink}`} onClick={()=> props.setShow(false)} alt='cocktail image click for details' style={{cursor:"pointer"}}>
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
        <div className='random-cocktail'>
          {data ? populatedData : stillLoading}
        </div>
    </section>
  )
}

export default Random;