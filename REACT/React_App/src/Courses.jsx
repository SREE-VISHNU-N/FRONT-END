import Course from './Course'
import useFetch from './useFetch';


function courseList() {
   
    //npx json-server --watch data/dummyData.json --port 3000 --static ./data
   const [Courses,error] = useFetch('http://localhost:3000/Courses')


    

    function handleDelete(id) {
        const newCourses = Courses.filter((course) => course.id != id);
        setCourses(newCourses);

    }


    // Courses.sort((x, y) => y.price - x.price)
    if (!Courses) {

        return (<>
            {error && <h3 className="error">{error}</h3>}
            {!error && <div className="loding"><img src="data\assets\Loding.gif" /></div>}
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