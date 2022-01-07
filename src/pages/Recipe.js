import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealById } from "../api";
import { Loader } from "../components/Loader";

function Recipe() {
  const [recipe, setRecipe] = useState([])
  const {id} = useParams()
  const {goBack} = useHistory()

  useEffect(() => {
    getMealById(id).then(data => setRecipe(data.meals[0]))
  })

  return(
    <>
      <button className="btn" onClick={goBack}>Go back</button>
      {!recipe.idMeal ? <Loader /> : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6><b>Category:</b>{recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>                                               
        </div>
      )}
    </>
  )
}

export { Recipe };



































// import { useState, useEffect } from "react";
// import { useParams, useHistory } from "react-router-dom";
// import { getMealById } from "../api";
// import { Loader } from "../components/Loader";

// function Recipe() {
//   const [recipe, setRecipe] = useState([]);
//   const {id} = useParams();
//   const {goBack} = useHistory();

//   useEffect(() => {
//     getMealById(id).then(data => setRecipe(data.meals[0]))
//   }, [id])

//   return(
//     <>
//       <button className="btn" onClick={goBack}>Go back</button>
//       {!recipe.idMeal ? <Loader /> : <h1>Love Me</h1> } 
//     </>
//   )
// }

// export { Recipe };