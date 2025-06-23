import PropTypes from 'prop-types'
import { useState } from 'react';


function Course(props) {

    //let Purchased = false;

    const [Purchased, setParchased] = useState(false);

    function BuyCourse(discount) {
        console.log(props.name, 'Purchased with', discount, '% Discount');
        setParchased(true);
        console.log(Purchased);
    }


    return (
        props.name && <div className="card">
            <img src={props.image} alt="" />
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <button onClick={() => BuyCourse(20)}>Buy Course</button>
            <button onClick={() => props.delete(props.id)}>Delete</button>
            <p>{Purchased ? 'Already Purchased' : 'Get it out'}</p>


        </div>
    );
}

Course.PropTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    show: PropTypes.bool
}

export default Course