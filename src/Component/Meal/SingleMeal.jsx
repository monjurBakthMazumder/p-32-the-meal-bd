
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
const SingleMeal = ({meal}) => {
    const {idMeal, strMeal, strMealThumb} = meal;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/details/${idMeal}`)
    }
    return (
        <div className="card card-compact border-2 bg-base-100 shadow-xl">
        <figure><img src={strMealThumb} alt={`image of ${strMeal}`} /></figure>
        <div className="card-body flex flex-col">
            <h2 className="text-base font-bold flex-grow">{strMeal}</h2>
            <Link to={`/details/${idMeal}`} onClick={handleClick} className="btn btn-sm mt-1">Details</Link>
        </div>
        </div>
    );
};

SingleMeal.propTypes = {
    meal : PropTypes.object,
};

export default SingleMeal;