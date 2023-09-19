import { useLoaderData, useParams } from "react-router-dom";
import SingleMeal from "./SingleMeal";

const Meal = () => {
    const data = useLoaderData();
    const meals = data.meals;
    const location = useParams();
    const loc = location.mealCategory;
  
    return (
        <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold underline">{loc}: {meals?.length ? meals?.length : '0'}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 my-10 px-[10%]">
                {
                    meals !== null && meals.map((meal,i) =>
                        <SingleMeal
                            key={i}
                            meal={meal}
                            loc={loc}
                        />
                    )
                }
            </div>
            <div className="flex justify-center items-center my-20 text-center">
                {
                    meals === null && 
                        <div>
                            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">404</h1>
                            <p className="text-lg md:text-xl lg:text-2xl my-2">{loc} Not Found</p>
                            <p className="font-light">Apologies, {loc} is currently unavailable.</p>
                        </div>
                }
            </div>
        </div>
    );
};

export default Meal;