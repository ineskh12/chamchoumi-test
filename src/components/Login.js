
import React, {useState} from 'react';
// import { withRouter } from "react-router-dom";

function LoginForm(props) {
    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    });
    const handleChange = (e) => {
        const {id , value} = e.target;
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    };

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "email":state.email,
            "password":state.password,
        };
        if(state.email === "admin" || state.email === "chaima"){
            setState(prevState => ({
                ...prevState,
                'successMessage' : 'Login successful. Redirecting to home page..'
            }));
            localStorage.setItem('user',state.email);
           redirectToHome()
        
            //props.showError(null)
        }
        else if(state.password !== "123"){
            alert('Username and password do not match')
            //props.showError("Username and password do not match");
        }
        else{
            //props.showError("Username does not exists");
        }
    };
    const redirectToHome = () => {
        //chaima houni / moch /home 
        props.history.push('/');



    };
    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address or username</label>
                    <input type="email"
                           className="form-control"
                           id="email"
                           aria-describedby="emailHelp"
                           placeholder="Enter email"
                           value={state.email}
                           onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                           className="form-control"
                           id="password"
                           placeholder="Password"
                           value={state.password}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-check">
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Submit</button>
            </form>
            {/* <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div> */}
        </div>
    )
}

export default LoginForm;