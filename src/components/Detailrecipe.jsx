import React from 'react'
import axios from 'axios'
import { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';
import Detailresult from '../pages/Detailresult';
const Detailrecipe = () => {
    const { id } = useParams();
    // console.log(id);
    const [recipes,setRecipes]=useState([])  
    const [ingredients,setIngredients]=useState([])  
    const [loading, setLoading] = useState(true);
  function getRecipes(){
    axios.get(`https://dummyjson.com/recipes/${id}`)
    .then((response)=>{
setRecipes(response.data)
setIngredients(response.data.ingredients)
setLoading(false);
// console.log(response.data);
// console.log(ingredients);

    }).catch((error)=>{
alert(error)
    })
}
  useEffect(() => {
    getRecipes()
  
    
  }, [id])

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
   <Loader/>
    </div>
    );
  }
  return (
    <>
    <Header/>
    <Detailresult recipes={recipes} ingredients={ingredients}/>
    <Footer/>
    </>
  )
}

export default Detailrecipe