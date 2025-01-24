import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file

const Login = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const navigate = useNavigate();

    const login = async () => {
        try {
            const res = await axios.post(`http://localhost:9090/login`, { "username": ref1.current.value, "password": ref2.current.value });
            const { data } = res;
            const { login } = data;
            if (login === "success") {
                const { role, token } = data;
                // Store token to localStorage
                window.localStorage.setItem("token", token);
                role === "ROLE_USER" ? navigate("/userdashboard") : navigate("/admindashboard");
            } else {
                navigate("/error");
            }
        } catch (e) {
            navigate("/error");
        }
    }

    return (
        <div className="login-container">
            <fieldset className="login-fieldset">
                <legend className="login-legend">LOGIN FORM</legend>
                <input type="text" ref={ref1} placeholder="Enter username" className="login-input" />
                <br /><br />
                <input type="password" ref={ref2} placeholder="Enter password" className="login-input" />
                <br /><br />
                <button onClick={login} className="login-button">Login</button>
            </fieldset>
        </div>
    )
}
export default Login;




// import { useRef } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const Login = ()=>{
//     const ref1 = useRef(null);
//     const ref2 = useRef(null);
//     const navigate = useNavigate();
//     const login = async ()=>{
//         try{
//             const res = await axios.post(`http://localhost:9090/login`,{"username":ref1.current.value,"password":ref2.current.value});
//             const {data} = res;
//             const {login} = data;
//             if(login == "success"){
//                 const {role,token} = data;
//                 //store token to localStorage
//                 window.localStorage.setItem("token",token);
//                 role == "ROLE_USER" ? navigate("/userdashboard") : navigate("/admindashboard");
//             }else{
//                 navigate("/error");
//             }
//         }catch(e){
//             navigate("/error");
//         }
//     }
    
//     return(
//         <>
//             <fieldset>
//                 <legend>LOGIN FORM</legend>
//                 <input type="text" ref={ref1} placeholder="enter username"></input>
//                 <br></br><br></br>
//                 <input type="password" ref={ref2} placeholder="enter password"></input>
//                 <br></br><br></br>
//                 <button onClick={login}>Login</button>
//             </fieldset>
//         </>
//     )
// }
// export default Login;
