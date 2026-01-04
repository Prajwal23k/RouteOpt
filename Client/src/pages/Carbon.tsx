import { useState } from "react";
import API from "../services/api";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

type CarbonData = {
  soloEmission: number;
  carpoolEmission: number;
  saved: number;
};

export default function Carbon() {
  const [distance, setDistance] = useState("");
  const [people, setPeople] = useState("");
  const [data, setData] = useState<CarbonData | null>(null);

  const calculate = async () => {
    const dist = Number(distance);
    const ppl = Number(people);

    if (dist <= 0 || ppl <= 0) {
      alert("Enter valid distance and number of people");
      return;
    }

    const res = await API.get(
      `/rides/carbon?distance=${dist}&people=${ppl}`
    );

    setData(res.data);
  };

  return (
    <div style={{ maxWidth: 600 }}>
      <h2>🌱 Carbon Savings Calculator</h2>

      <input
        placeholder="Distance (km)"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
      />

      <input
        placeholder="Number of people"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />

      <button onClick={calculate}>Calculate</button>

      {data && (
        <>
          <h3>Results</h3>

          <p>Solo Emission: {data.soloEmission} g CO₂</p>
          <p>Carpool Emission: {data.carpoolEmission} g CO₂</p>
          <p>
            <b>CO₂ Saved: {data.saved} g 🌍</b>
          </p>

          <Bar
            data={{
              labels: ["Solo Commute", "Carpool"],
              datasets: [
                {
                  label: "CO₂ Emissions (grams)",
                  data: [
                    data.soloEmission,
                    data.carpoolEmission,
                  ],
                  backgroundColor: ["#ef4444", "#22c55e"],
                },
              ],
            }}
          />
        </>
      )}
    </div>
  );
}
