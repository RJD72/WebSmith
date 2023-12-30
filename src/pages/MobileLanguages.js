import * as d3 from "d3";
import { useEffect, useRef } from "react";

export const MobileLanguages = () => {
  const svgRef = useRef();

  useEffect(() => {
    // Your CSV data
    async function fetchData() {
      const response = await fetch("/data/data.json");
      const data = await response.json();

      data.forEach((data) => (data.level = +data.level));

      // Chart dimensions
      const margin = { top: 20, right: 30, bottom: 30, left: 30 };
      const width = window.innerWidth * 0.8;
      const height = window.innerHeight * 0.6;
      const graphWidth = width - margin.left - margin.right;
      const graphHeight = height - margin.top - margin.bottom;

      //  Append svg to the chart div
      const svg = d3
        .select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`);

      const g = svg
        .append("g")
        .attr("transform", `translate(25,0)`)
        .attr("className", "mobile-graph")
        .attr("width", graphWidth)
        .attr("height", graphHeight);

      // Creating the xScale
      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.language))
        .range([0, graphWidth])
        .padding(0.3);

      // Creating the yScale
      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.level)])
        .range([graphHeight, 0]);

      const colorScale = d3
        .scaleOrdinal()
        .domain(data.map((d) => d.language))
        .range([
          "#cfe8fc",
          "#bbdefb",
          "#90caf9",
          "#64b5f6",
          "#42a5f5",
          "#2196f3",
          "#1e88e5",
          "#1976d2",
          "#1565c0",
          "#0d47a1",
        ]);

      // Draw the bars
      g.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("className", "bar")
        .attr("x", (d) => xScale(d.language))
        .attr("y", (d) => yScale(d.level))
        .attr("width", (d) => xScale.bandwidth())
        .attr("height", (d) => yScale(0) - yScale(d.level))
        .attr("fill", (d) => colorScale(d.language));

      // Add x Axis
      g.append("g")
        .attr("transform", `translate(${0}, ${graphHeight})`)
        .style("font-size", "12px")
        .attr("class", "labels")
        .call(d3.axisBottom(xScale).tickSize(0))
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end");
    }

    fetchData();
  }, []);

  return (
    <section className="dark:bg-gray-900 dark:text-white">
      <div id="languages" className=" mx-5 md:mx-10  pt-24">
        <h2 className="my-10 text-3xl">Languages</h2>
        <svg ref={svgRef} className="w-full"></svg>
      </div>
    </section>
  );
};
