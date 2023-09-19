import { NavLink, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const categories = useLoaderData();
    const allCategories = categories.meals;
    const location = useParams();
    const loc = location.mealCategory
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`${loc}`)
    }
    return (
        <>
            <nav className="navbar border-b-4">
                <h1 className="btn btn-ghost normal-case font-bold text-xl max-lg:text-2xl lg:text-3xl">TheMealBD</h1>
            </nav>
            <div className="flex justify-center items-center gap-1 mx-auto flex-wrap my-5">
                {
                    allCategories.map((category, i)=> <NavLink onClick={handleClick} to={category.strCategory} className="btn btn-xs sm:btn-sm" key={i}>{category.strCategory}</NavLink>)
                }
            </div>
        </>
    );
};
export default Header;