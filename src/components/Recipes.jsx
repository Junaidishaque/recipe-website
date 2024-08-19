import React from 'react'
import axios from 'axios'
import { useState ,useEffect} from 'react';
import Result from '../pages/Result';
import Loader from './Loader';
const Recipes = () => {
    const [recipes,setRecipes]=useState([])  
    const [loading, setLoading] = useState(true);
  function getRecipes(){
    axios.get(`https://dummyjson.com/recipes`)
    .then((response)=>{
setRecipes(response.data.recipes)
setLoading(false);
// console.log(response.data.recipes);

    }).catch((error)=>{
alert(error)
    })
}
  useEffect(() => {
    getRecipes()    
  }, [])
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
   <Loader/>
    </div>
    );
  }
return(
    <>
<Result data={recipes}/>
    </>
  )
}


export default Recipes