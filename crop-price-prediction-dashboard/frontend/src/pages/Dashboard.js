import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

export default function Dashboard() {
    const [crop, setCrop] = useState("wheat");
    const [type, setType] = useState("current");
    const [data, setData] = useState(null);
    

    const fetchData = async () => {
        try {
            const res = await API.get(
                `/crops/price?crop=${crop}&type=${type}`
            );

            setData(res.data);
        } catch (err) {
            alert("Error fetching data");
        }
    };

//     const handleLogOut = ()=>{
//       localStorage.clear();
//       navigate('/');
// };

    return (
        <div>
            <Navbar /> 
            <h2>Dashboard</h2>

            <select onChange={(e) => setCrop(e.target.value)}>
                <option value="wheat">Wheat</option>
                <option value="rice">Rice</option>
            </select>

            <select onChange={(e) => setType(e.target.value)}>
                <option value="current">Current</option>
                <option value="next_week">Next Week</option>
                <option value="next_month">Next Month</option>
            </select>

            <button onClick={fetchData}>Get Price</button>

            {data && (
                <div>
                    <h3>Price: {data.predictedPrice}</h3>
                    <p>History: {data.history.join(", ")}</p>
                </div>
            )}

            
        </div>
    );
}