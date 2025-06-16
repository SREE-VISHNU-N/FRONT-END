import HTML from './assets/HTML.png'

function Course(props) {

    return (
        <div className="card">
            <img src={props.image} alt="" />
            <h2>{props.name}</h2>
            <p>{props.price}</p>
        </div>
    );
}

Course.defaultProps = {
    name  : 'React js',
    price : '$599',
    image : HTML

}

export default Course