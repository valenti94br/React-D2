import React from 'react'

function Home(props) {
  return (
    <div>
        <div >{props.foods.map((food) => <span> {food.description} {food.name}  el precio son {food.price} euros. <br /></span> )}</div>
    </div>
  )
}

export default Home