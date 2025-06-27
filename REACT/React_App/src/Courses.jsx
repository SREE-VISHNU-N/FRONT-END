import Course from './Course'
import { useEffect, useState } from 'react'

function courseList() {
    const [Courses, setCourses] = useState(null);
    //npx json-server --watch data/dummyData.json --port 3000 --static ./data
const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(()=>{
        fetch('http://localhost:3000/Courses')
            .then((response) => {
                if(!response.ok){
                    throw Error("This page is Could't driven")
                }
                console.log(response);
                return response.json();
            })
            .then((data) => {
                setCourses(data)
            }).catch((error)=>{
                console.log(error.message);
                setError(error.message);
            })},1000)
    }, []);

    function handleDelete(id) {
        const newCourses = Courses.filter((course) => course.id != id);
        setCourses(newCourses);

    }


    // Courses.sort((x, y) => y.price - x.price)
    if (!Courses) {
     
        return (<>
    {error && <h3 className="error">{error}</h3>}
    {!error && <div className="loding"><img src="data\assets\Loding.gif"/></div>}
        </>)
    }
    const CoursesLists = Courses.map((course) =>
        <Course key={course.id} name={course.name}
            price={course.price} image={course.image}
            delete={handleDelete} id={course.id} />
    );

    return (
        <> {CoursesLists}</>
    );

}

export default courseList