export const calculateCarbon = (distanceKm, people) => {
  const CO2_PER_KM = 120; // grams

  const soloEmission = distanceKm * CO2_PER_KM * people;
  const carpoolEmission = distanceKm * CO2_PER_KM;

  const saved = soloEmission - carpoolEmission;

  return {
    soloEmission,
    carpoolEmission,
    saved,
  };
};
