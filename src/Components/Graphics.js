import React, { Component } from "react";
import * as d3 from "d3";

class Graphics extends Component {
  componentDidMount() {
    const data = [2, 4, 2, 6, 8];
    this.drawChart(data);
  }

  drawChart(data) {
    const svg = d3
      .select("#canvas")
      .append("svg")
      .attr("width", 400)
      .attr("height", 200)
      .style("border-color", "black")
      .style("border-style", "solid")
      .style("border-width", "1px");

    const rectangle = svg
      .append("rect")
      .attr("x", 50)
      .attr("y", 50)
      .attr("width", 50)
      .attr("height", 50);

    d3.select("#start").on("click", function() {
      rectangle.transition().attr("x", 250);
    });
  }
}

export default Graphics;
