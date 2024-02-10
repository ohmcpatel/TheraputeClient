import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import './Analysis.css'; // Import your CSS file for analysis styling
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';

function Analysis() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch data from API and update chartData state
    // Example: fetchChartData().then(data => setChartData(data));
    // Replace fetchChartData() with actual API call
    const mockChartData = [
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 7 },
      { x: 5, y: 11 },
      { x: 6, y: 13 },
    ];
    setChartData(mockChartData);
  }, []);

  return (
    <div className="analysis-container">
      <Navbar />
      <div className="analysis-content">
        <h1>Analysis</h1>
        <div className="chart-container">
          <VictoryChart theme={VictoryTheme.material}>
            <VictoryLine data={chartData} x="x" y="y" />
          </VictoryChart>
        </div>
        <div className="additional-info">
          <h2>Most Frequently Done Exercises</h2>
          {/* Add your additional analysis data here */}
        </div>
      </div>
    </div>
  );
}

export default Analysis;
