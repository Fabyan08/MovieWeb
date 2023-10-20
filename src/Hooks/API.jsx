import axios from " axios";
import React, { useEffect, useState } from "react";

function Data() {
  const url =
    "https://api.themoviedb.org/3/tv/82856/credits?api_key=f8d0dccf140f8bb785d7d9b067b28ce3";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="App">
      <h1 style={{ color: "green" }}>using Axios Library to Fetch Data</h1>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div className="bg-blue-500 w-[15em]">
              <p className="text-black">{dataObj.name}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
}
