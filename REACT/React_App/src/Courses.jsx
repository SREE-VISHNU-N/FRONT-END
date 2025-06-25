import Course from './Course'
import { useEffect, useState } from 'react'

function courseList() {
    const [Courses, setCourses] = useState(null);
    //npx json-server --watch data/dummyData.json --port 3000 --static ./data


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            console.log(response);
            return response.json();
        })
        .then((data)=>{
            console.log(data);
        })
    },[]);

    function handleDelete(id) {
        const newCourses = Courses.filter((course) => course.id != id);
        setCourses(newCourses);

    }


    Courses.sort((x, y) => y.price - x.price)

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