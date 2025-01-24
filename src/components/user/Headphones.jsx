import axios from "axios";
import { useEffect, useState } from "react";
import "./UserDashboard.css";
import { useNavigate } from "react-router-dom";


const Headphones = ()=>{
    const [headphones,setHeadphones] = useState([]);
    
    const navigate = useNavigate();

    const get_headphones = async ()=>{
        const res = await axios.get(`http://localhost:9090/user/headphones`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem("token")}`
            }
        });
        const {data} = res;
        setHeadphones(data);
    }

    useEffect(()=>{
        get_headphones();
    },[]);

    const display_singleitem = (headphone)=>{
        navigate("/headphonedetails",{state:{headphone}})
    }




    return(
        <>
            <div className="product-container">
                {headphones.map((headphone) => (
                    <div key={headphone.pid} className="product-card" onClick={()=> display_singleitem(headphone)}>
                    <img src={headphone.pimage} alt={headphone.pname} className="product-image" />
                    <div className="product-details">
                        <div className="product-name">{headphone.pname}</div>
                        <div className="product-price">Price: ${headphone.pcost}</div>
                    </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Headphones;