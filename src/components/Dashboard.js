import { useEffect, useRef } from "react";
import * as d3 from "d3";
import '../App.css';

function Dashboard() {
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);

  const createBlankGraph = (chartRef, chartId, title) => {
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    if (!chartRef.current) return;

    d3.select(chartRef.current).selectAll("*").remove();

    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand()
      .domain(["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"])
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, 1])
      .range([height, 0]);

    svg.append("g")
      .attr("class", "grid horizontal-grid")
      .call(d3.axisLeft(yScale)
        .ticks(11)
        .tickSize(-width)
        .tickFormat("")
      );

    svg.append("g")
      .attr("class", "grid vertical-grid")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale)
        .tickSize(-height)
        .tickFormat("")
      );

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .style("font-size", "0.8rem")
      .style("fill", "#666");

    svg.append("g")
      .call(d3.axisLeft(yScale).ticks(11).tickFormat(d3.format(".1f")))
      .selectAll("text")
      .style("font-size", "0.8rem")
      .style("fill", "#666");
  };

  useEffect(() => {
    createBlankGraph(chart1Ref, "chart1", "Monthly Projects [By Count]");
    createBlankGraph(chart2Ref, "chart2", "Monthly Projects [By Amount]");
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-title">
        <span className="dashboard-title-text">Project Mgmt. Overview</span>
      </div>
      <div className="breadcrumb">
        <div className="breadcrumb-left">
          <img src="https://via.placeholder.com/16x16.png?text=Home" alt="Home Icon" className="breadcrumb-icon" />
          <span className="breadcrumb-arrow">←</span>
          <span className="breadcrumb-item">Masters</span>
          <span className="breadcrumb-separator"></span>
          <span className="breadcrumb-item">Transaction</span>
          <span className="breadcrumb-separator"></span>
          <span className="breadcrumb-item">Reports</span>
        </div>
      </div>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Projects</h3>
          <div className="card-value">6</div>
        </div>
        <div className="dashboard-card">
          <h3>WIP Projects</h3>
          <div className="card-value">6</div>
        </div>
        <div className="dashboard-card">
          <h3>Closed Projects</h3>
          <div className="card-value">0</div>
        </div>
        <div className="dashboard-card">
          <h3>Total SOW Amount</h3>
          <div className="card-value">27.16 Lakh</div>
        </div>
        <div className="dashboard-card">
          <h3>Outstanding SOW Amt</h3>
          <div className="card-value">10.34 Lakh</div>
        </div>
      </div>
      <div className="dashboard-charts">
        <div className="chart-container">
          <h3>Monthly Projects [By Count]</h3>
          <div id="chart1" className="chart" ref={chart1Ref}></div>
        </div>
        <div className="chart-container">
          <h3>Monthly Projects [By Amount]</h3>
          <div id="chart2" className="chart" ref={chart2Ref}></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;