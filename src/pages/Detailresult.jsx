import React from 'react'

const Detailresult = ({recipes,ingredients}) => {
  return (
    <>
 <div className='responsive-div'>
<div>
<img src={recipes.image} alt={recipes.name} className='img'/>
</div>
<div className='text'>
<h1>{recipes.name}</h1>
<h3>Prepare Time: {recipes.prepTimeMinutes} Mintues</h3>
<h1>Ingredients</h1>
{ingredients.map((val,ind)=>{
return(<li key={ind}>{val}</li>
)
})}
<h1>Instruction</h1>
<p>{recipes.instructions}</p>

</div>
    </div>
    </>
  )
}

export default Detailresult