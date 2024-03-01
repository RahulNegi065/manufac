import "./App.css";
import wineData from "./wineData.json";
import { useEffect, useState } from "react";
import Table from "./components/Table";
import useMeanCalculator from "./hooks/useMeanCalculator";
import useMedianCalculator from "./hooks/useMedianCalculator";
import useModeCalculator from "./hooks/useModeCalculator";

function getTablesData() {
  const flavanoidsData: any = [];
  const gammaData: any = [];

  wineData.forEach((wine: any) => {
    const indexFlavanoids = flavanoidsData.findIndex(
      (item: any) => item.alcohol === wine.Alcohol
    );
    const indexGamma = gammaData.findIndex(
      (item: any) => item.alcohol === wine.Alcohol
    );

    const gamma = (wine.Ash * wine.Hue) / wine.Magnesium;

    if (indexFlavanoids >= 0) {
      flavanoidsData[indexFlavanoids].flavanoids.push(wine.Flavanoids);
      flavanoidsData[indexFlavanoids].counts[wine.Flavanoids] =
        (flavanoidsData[indexFlavanoids].counts[wine.Flavanoids] || 0) + 1;
    } else {
      const counts = { [wine.Flavanoids]: 1 };
      flavanoidsData.push({
        alcohol: wine.Alcohol,
        flavanoids: [wine.Flavanoids],
        counts,
        mean: null,
        median: null,
        mode: null,
      });
    }

    if (indexGamma >= 0) {
      gammaData[indexGamma].gamma.push(gamma);
      gammaData[indexGamma].counts[gamma] =
        (gammaData[indexGamma].counts[gamma] || 0) + 1;
    } else {
      const counts = { [gamma]: 1 };
      gammaData.push({
        alcohol: wine.Alcohol,
        gamma: [gamma],
        counts,
        mean: null,
        median: null,
        mode: null,
      });
    }
  });

  // Calculate statistics for flavanoidsData
  flavanoidsData.forEach((wine: any) => {
    wine.mean = useMeanCalculator(wine.flavanoids);
    wine.median = useMedianCalculator(wine.flavanoids);
    wine.mode = useModeCalculator(wine.counts);
  });

  // Calculate statistics for gammaData
  gammaData.forEach((wine: any) => {
    wine.mean = useMeanCalculator(wine.gamma);
    wine.median = useMedianCalculator(wine.gamma);
    wine.mode = useModeCalculator(wine.counts);
  });

  return { flavanoidsData, gammaData };
}

function App() {
  const [tablesData, setTablesData] = useState<any>({
    flavanoidsData: [],
    gammaData: [],
  });

  useEffect(() => {
    const { flavanoidsData, gammaData } = getTablesData();
    setTablesData({ flavanoidsData, gammaData });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Table title={"Table 1"} data={tablesData.flavanoidsData} />
      <Table title={"Table 2"} data={tablesData.gammaData} />
    </div>
  );
}

export default App;
