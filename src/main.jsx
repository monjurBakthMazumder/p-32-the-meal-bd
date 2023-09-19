import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Meal from './Component/Meal/Meal';
import MealDetails from './Component/MealDetails/MealDetails';
const router = createBrowserRouter([
  {
    path: "/",
    loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list'),
    element: <Home/>,
    children:[
      {
        path: "/",
        loader:()=> fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=Beef`),
        element:<Meal/>
      },
      {
        path: ":mealCategory",
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.mealCategory}`),
        element:<Meal/>
      },
      {
        path: "/details/:mealId",
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
        element:<MealDetails/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
