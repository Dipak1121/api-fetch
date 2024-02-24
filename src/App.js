import React, { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "./Component/TableRow";
import "./App.css";
function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {

    try{

      const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets",
      {
          params:{
            "vs_currency": 'usd',
            "order": 'market_cap_desc',
            "per_page": 10,
            "page": 1,
            "sparkline": false
          }
      });
      setData(response.data);

      console.log(response);
    }
    catch(err){
      console.log("Error in fetch:", err);
    }
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
