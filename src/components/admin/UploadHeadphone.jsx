import { useState } from "react";
import axios from "axios";
import "./UploadLaptop.css";

const UploadHeadphone = ()=>{
    const [pname, setPname] = useState('');
    const [pcost, setPcost] = useState();
    const [pqty, setPqty] = useState();
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('pname', pname);
        formData.append('pcost', pcost);
        formData.append('file', file);
        formData.append('pqty', pqty);

        try {
            const response = await axios.post('http://localhost:9090/admin/upload/headphones', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                },
            });
            console.log(response);
            alert('headphone uploaded successfully!');
        } catch (e) {
            console.log(e);
            alert("Error while uploading headphone");
        }
    }

    return (
        <div className="upload-laptop-container">
            <h2>Upload Headphone</h2>
            <form onSubmit={handleSubmit} className="upload-laptop-form">
                <div>
                    <label>Product Name:</label>
                    <input
                        type="text"
                        value={pname}
                        onChange={(e) => setPname(e.target.value)}
                    />
                </div>
                <div>
                    <label>Product Cost:</label>
                    <input
                        type="number"
                        value={pcost}
                        onChange={(e) => setPcost(e.target.value)}
                    />
                </div>
                <div>
                    <label>Product Qty:</label>
                    <input
                        type="number"
                        value={pqty}
                        onChange={(e) => setPqty(e.target.value)}
                    />
                </div>
                <div>
                    <label>Product Image:</label>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <button type="submit">Upload Headphone</button>
            </form>
        </div>
    )
}
export default UploadHeadphone;