import Course from './Course'
import html from './assets/HTML.png'
import css from './assets/CSS.png'
import js from './assets/JS.png'
import react from './assets/REACT.png'
import { useState } from 'react'

function courseList() {
    const [Courses, setCourses] = useState([
        {
            id: 1,
            name: 'HTML',
            price: 199,
            image: html
        },
        {
            id: 2,
            name: 'CSS',
            price: 199,
            image: css
        },
        {
            id: 3,
            name: 'Java Script',
            price: 499,
            image: js
        },
        {
            id: 4,
            name: 'REACT',
            price: 999,
            image: react
        }


    ]);

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