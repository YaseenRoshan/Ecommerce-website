import { useRef } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const register = async () => {
        const res = await axios.post(
            "http://localhost:9090/admin/register",
            {
                username: ref1.current.value,
                password: ref2.current.value,
                role: ref3.current.value,
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        const { data } = res;
        if (data != null) {
            alert("Registration Success !!!");
        } else {
            alert("Registration Fail !!!");
        }
    };

    return (
        <div className="register-container">
            <h2>Register New User</h2>
            <input type="text" ref={ref1} placeholder="Enter username" className="register-input" />
            <br />
            <br />
            <input type="password" ref={ref2} placeholder="Enter password" className="register-input" />
            <br />
            <br />
            <input type="text" ref={ref3} placeholder="Enter role" className="register-input" />
            <br />
            <br />
            <button onClick={register} className="register-button">
                Register
            </button>
        </div>
    );
};

export default Register;

