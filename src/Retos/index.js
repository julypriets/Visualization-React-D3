/*------   Reto 1   ----- */
const svg = d3.select("#canvas1").append("svg")
    .attr("width", 400)
    .attr("height", 200)
    .style("border-color", "black")
    .style("border-style", "solid")
    .style("border-width", "1px");

const rectangle = svg.append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 50)
    .attr("height", 50);

d3.select("#start").on("click", function () {
    rectangle
        .transition()
        .attr("x", 250);
});

d3.select("#reset").on("click", function () {
    rectangle
        .transition()
        .attr("x", 50);
});

/*------   Reto 2   ----- */

const svg2 = d3.select("#canvas2").append("svg")
    .attr("width", 400)
    .attr("height", 200)
    .style("border-color", "black")
    .style("border-style", "solid")
    .style("border-width", "1px");

const rectangle2 = svg2.append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 50)
    .attr("height", 50);

d3.select("#start2").on("click", function () {
    rectangle2
        .transition()
        .attr("x", 250)
        .attr("width", 100) 
	    .attr("height", 100); 
});

d3.select("#reset2").on("click", function () {
    rectangle2
        .transition()
        .attr("x", 50)
        .attr("width", 50)
        .attr("height", 50);
});

/*------   Reto 3   ----- */
const svg3 = d3.select("#canvas3").append("svg")
    .attr("width", 400)
    .attr("height", 200)
    .style("border-color", "black")
    .style("border-style", "solid")
    .style("border-width", "1px");

const circle = svg3.append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 10)

d3.select("#start3").on("click", function () {
    circle
        .transition()
        .attr("fx", 250)
        .attr("cy", 150)
        .attr("r", 20)
        .attr("opacity",0.5)
        .style("fill","pink")
});

d3.select("#reset3").on("click", function () {
    circle
        .transition()
        .attr("r", 10)
        .attr("cx", 50)
        .attr("cy", 50)
        .style("fill", "blue")
        .attr("opacity", 1);
        
});
