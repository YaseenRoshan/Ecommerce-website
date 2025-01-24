import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./global/Login";
import UserDashboard from "./user/UserDashboard";
import AdminDashboard from "./admin/AdminDashboard";
import Error from "./global/Error";
import Register from "./admin/Register";
import UploadLaptop from "./admin/UploadLaptop";
import UploadMobile from "./admin/UploadMobile";
import UploadHeadphone from "./admin/UploadHeadphone";
import Laptops from "./user/Laptops";
import Mobiles from "./user/Mobiles";
import Headphones from "./user/Headphones";
import LaptopDetails from "./user/LaptopDetails";
import { CartProvider } from "../CartContext";
import CartInvoice from "../CartInvoice";
import MobilesDetails from "./user/MobileDetails";
import HeadphoneDetails from "./user/HeadphoneDetails";

const Master = ()=>{
    return(
        <>
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login></Login>}></Route>
                        
                        
                        <Route path="/userdashboard" element={<UserDashboard></UserDashboard>}>
                            <Route index element={<Laptops></Laptops>}></Route>

                            <Route path="userdashboard/laptops" element={<Laptops></Laptops>}></Route>
                            <Route path="userdashboard/mobiles" element={<Mobiles></Mobiles>}></Route>
                            <Route path="userdashboard/headphones" element={<Headphones></Headphones>}></Route>
                        </Route>
                        
                        <Route path="/admindashboard" element={<AdminDashboard></AdminDashboard>}>
                            <Route path="admindashboard/register" element={<Register></Register>}></Route>
                            <Route path="admindashboard/uploadlaptop" element={<UploadLaptop></UploadLaptop>}></Route>
                            <Route path="admindashboard/uploadmobile" element={<UploadMobile></UploadMobile>}></Route>
                            <Route path="admindashboard/uploadheadphone" element={<UploadHeadphone></UploadHeadphone>}></Route>
                        </Route>
                        
                        <Route path="/laptopdetails" element={<LaptopDetails></LaptopDetails>}></Route>
                        <Route path="/mobiledetails" element={<MobilesDetails></MobilesDetails>}></Route>
                        <Route path="/headphonedetails" element={<HeadphoneDetails></HeadphoneDetails>}></Route>

                        <Route path="/error" element={<Error></Error>}></Route>

                        <Route path="/cart" element={<CartInvoice></CartInvoice>}></Route>
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </>
    )
}
export default Master;