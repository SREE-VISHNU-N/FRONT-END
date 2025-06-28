import { useState } from "react"

function Login() {

    const [pwd1, setPwd1] = useState("");
    const [pwd2, setPwd2] = useState("");
    const [passCheck, setpassCheck] = useState(true);

    function handlePwd1Change(event) {

        setPwd1(event.target.value);
    }

    function handlePwd2Change(event) {
        setPwd2(event.target.value);
        if (pwd1 == event.target.value) {
            setpassCheck(true);
        }
        else {
            setpassCheck(false);
        }

    }


    return (
        <>
            <form className="my-5" style={{ width: "40%", margin: "auto" }}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input value={pwd1} onChange={handlePwd1Change} type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Re-enter Password</label>
                    <input value={pwd2} onChange={handlePwd2Change} type="password" className="form-control" />
                </div>
                {console.log(pwd1, pwd2)}
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Check me out</label>
                    {!passCheck && <p>Password Incorrect</p>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )

}
export default Login