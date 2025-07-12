import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [Courses, setCourses] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw Error("This page is Could't driven")
                    }
                    console.log(response);
                    return response.json();
                })
                .then((data) => {
                    setCourses(data)
                }).catch((error) => {
                    console.log(error.message);
                    setError(error.message);
                })
        }, 1000)
    }, []);

    return [Courses, error]

}

export default useFetch