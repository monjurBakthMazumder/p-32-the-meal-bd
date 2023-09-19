import { useLoaderData, useNavigate } from "react-router-dom";

const MealDetails = () => {
    const meal1 = useLoaderData();
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate(-1)
    }
    const meal =meal1.meals[0];
    const {strArea, strMealThumb, strSource, strYoutube, strMeal, strCategory, strIngredient1, strIngredient2 ,strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20, strInstructions, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14,strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20} = meal
    console.log(meal);
    return (
        <div className="px-10 sm:px-[30%] lg:px-[35%] my-10">
            <div className="card card-compact border-2 bg-base-100 shadow-xl">
            <figure><img src={strMealThumb} alt={`image of ${strMeal}`} /></figure>
            <div className="card-body flex flex-col">
                <h2 className="text-base font-bold flex-grow">{strMeal}</h2>
                <span>Category: {strCategory}</span>
                <span>Area: {strArea}</span>
                <span><span className="font-bold underline">Ingredient:</span> {strIngredient1} - {strMeasure1} , 
                {strIngredient2} - {strMeasure2} , 
                {strIngredient3} - {strMeasure3} ,
                 {strIngredient4} - {strMeasure4} ,
                  {strIngredient5} - {strMeasure5} ,
                   {strIngredient6} - {strMeasure6} ,
                    {strIngredient7} - {strMeasure7} ,
                     {strIngredient8} - {strMeasure8} , 
                     {strIngredient9} - {strMeasure9} ,
                      {strIngredient10} - {strMeasure10} ,
                       {strIngredient11} - {strMeasure11} ,
                        {strIngredient12} - {strMeasure12} ,
                         {strIngredient13} - {strMeasure13} ,
                          {strIngredient14} - {strMeasure14} ,
                           {strIngredient15} - {strMeasure15} ,
                            {strIngredient16} - {strMeasure16} ,
                             {strIngredient17} - {strMeasure17} ,
                              {strIngredient18} - {strMeasure18} ,
                               {strIngredient19} - {strMeasure19} ,
                                {strIngredient20} - {strMeasure20} </span>
                <span><span className="font-bold underline">Instructions:</span> {strInstructions}</span>
            </div>
            <div className="card-actions justify-center mb-10">
                <button className="btn" onClick={handleClick}>Go Back</button>
            </div>
            </div>
        </div>
    );
};

export default MealDetails;