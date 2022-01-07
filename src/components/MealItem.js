import { Link } from "react-router-dom";

function MealItem(props) {
  const { strMeal, strMealThumb, idMeal } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={idMeal} />
      </div>
      <div className="card-content">
        <span className="card-title"> {strMeal} </span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn">
          Watch Category
        </Link>
      </div>
    </div>
  )
}

export { MealItem };