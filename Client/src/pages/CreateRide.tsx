import { useState } from "react";
import API from "../services/api";

export default function CreateRide() {
  const [form, setForm] = useState({
    from: "",
    to: "",
    time: "",
    seats: 1,
  });

  const submit = async () => {
    await API.post("/rides/create", form);
    alert("Ride created successfully");
  };

  return (
    <div>
      <h2>Create Ride</h2>

      <input placeholder="From" onChange={e=>setForm({...form,from:e.target.value})}/>
      <input placeholder="To" onChange={e=>setForm({...form,to:e.target.value})}/>
      <input placeholder="Time (9:00 AM)" onChange={e=>setForm({...form,time:e.target.value})}/>
      {/* <input type="number" placeholder="Seats" onChange={e=>setForm({...form,seats:e.target.value})}/> */}
        <input
            type="number"
            placeholder="Seats"
            onChange={e =>
                setForm({ ...form, seats: Number(e.target.value) })
            }
        />

      <button onClick={submit}>Create Ride</button>
    </div>
  );
}
