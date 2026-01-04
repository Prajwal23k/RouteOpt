import { useState } from "react";
import API from "../services/api";

export default function SuggestedRides() {
  const [destination, setDestination] = useState("");
  const [time, setTime] = useState("");
  const [rides, setRides] = useState([]);

  const search = async () => {
    const res = await API.get(
      `/rides/suggested?destination=${destination}&time=${time}`
    );
    setRides(res.data);
  };

  return (
    <div>
      <h2>Suggested Rides</h2>

      <input placeholder="Destination" onChange={e=>setDestination(e.target.value)}/>
      <input placeholder="Time (9:15 AM)" onChange={e=>setTime(e.target.value)}/>
      <button onClick={search}>Find Carpools</button>

      {rides.map(ride => (
        <div key={ride.id} style={{border:"1px solid green", margin:10, padding:10}}>
          <p><b>From:</b> {ride.from_location}</p>
          <p><b>Time:</b> {ride.time}</p>
          <p><b>Seats:</b> {ride.seats}</p>
        </div>
      ))}
    </div>
  );
}
