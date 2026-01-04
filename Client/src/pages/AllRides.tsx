import { useEffect, useState } from "react";
import API from "../services/api";

export default function AllRides() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    API.get("/rides/all").then(res => setRides(res.data));
  }, []);

  return (
    <div>
      <h2>All Rides</h2>

      {rides.map(ride => (
        <div key={ride.id} style={{border:"1px solid gray", margin:10, padding:10}}>
          <p><b>From:</b> {ride.from_location}</p>
          <p><b>To:</b> {ride.to_location}</p>
          <p><b>Time:</b> {ride.time}</p>
          <p><b>Seats:</b> {ride.seats}</p>
        </div>
      ))}
    </div>
  );
}
