import PropTypes from 'prop-types'


function Course(props) {

   
        return (
            <div className="card">
                <img src={props.image} alt="" />
                <h2>{props.name}</h2>
                <p>{props.price}</p>
            </div>
        );
}

Course.PropTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    show: PropTypes.bool
}



export default Course