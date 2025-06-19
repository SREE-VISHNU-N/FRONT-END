import Course from './Course'
import html from './assets/HTML.png'
import css from './assets/CSS.png'
import js from './assets/JS.png'



function courseList() {
    const Courses = [
        {
            id: 1,
            name: 'HTML',
            price: "$199",
            image: html
        },
        {
            id: 2,
            name: 'CSS',
            price: "$199",
            image: css
        },
        {
            id: 3,
            name: 'Java Script',
            price: "$499",
            image: js
        }
    ]


    const CoursesLists = Courses.map((course) =>
        <Course key = {course.id}name={course.name} price={course.price} image={course.image} />
    );


    return (
        <> {CoursesLists}</>
    );

}

export default courseList