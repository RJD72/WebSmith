import * as d3 from "d3";
import { useEffect, useRef } from "react";

export const Languages = () => {
  const svgRef = useRef();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data/data.json");
      const data = await response.json();

      data.forEach((data) => (data.level = +data.level));

      // Chart dimensions
      const margin = { top: 20, right: 30, bottom: 30, left: 200 };
      const width = window.innerWidth * 0.8;
      const height = window.innerHeight * 0.8;
      const graphWidth = width - margin.left - margin.right;
      const graphHeight = height - margin.top - margin.bottom;

      //  Append svg to the chart div
      const svg = d3
        .select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");

      const g = svg
        .append("g")
        .attr("transform", "translate(150, 50)")
        .attr("className", "graph")
        .attr("width", graphWidth)
        .attr("height", graphHeight);

      // Creating the xAxis
      const xScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.level)])
        .range([0, graphWidth]);

      // Creating the yAxis
      const yScale = d3
        .scaleBand()
        .domain(data.map((d) => d.language))
        .range([0, graphHeight])
        .padding(0.3);

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
        .attr("width", (d) => xScale(d.level))
        .attr("height", yScale.bandwidth())
        .attr("x", 20)
        .attr("y", (d) => yScale(d.language))
        .attr("fill", (d) => colorScale(d.language));

      // Add y Axis
      g.append("g")
        .style("font-size", "16px")
        .attr("class", "labels")
        .call(d3.axisLeft(yScale).tickSize(0));
    }

    fetchData();
  }, []);

  return (
    <section className="dark:bg-gray-900 dark:text-white pt-24 ">
      <div id="languages" className=" mx-5 md:mx-10 xl:mx-80 ">
        <h2 className="mt-10 text-3xl">Languages</h2>
        <svg ref={svgRef} className="w-full"></svg>
      </div>
    </section>
  );
};
