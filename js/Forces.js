// This code creates a circle radial network with forces


var svg = d3.select(".network"),
    width = +svg.attr("width"),
    height = +svg.attr("height");
var r = 15;
var y = d3.scaleLog();
// var r = d3.scaleSqrt().domain([0, 50]).range([1, 15]);
var color = d3.scaleOrdinal(d3.schemeCategory10);
tooltip = svg.append("text");       

const blue = d3.scaleSequential()
    	.domain([0, 1000])
    	.interpolator(d3.interpolateBlues);

console.log(width);


function set_highlight(d) {
  var list1 = d3.selectAll(".links line")
                .attr("class", function (o) {
                  return o.source.id == d.id || o.target.id == d.id ? "enabled-links" : "disabled-links";
                });}

function exit_highlight() {
  var list1 = d3.selectAll(".links line").attr("class", "");}


console.log("ok setting variables")

// Load data, start of data using json 
// JSON was converted from csv to JSON online to be an array of arrays
// All data has to main arrays nodes and links used as such from now on
d3.json("data/data.json").then(function(data){
 		
		
		console.log(data);
//		console.log("nodes", data.nodes);
//		console.log("links", data.links);

// Variable with all desired forces 
	var simulation = d3.forceSimulation(data.nodes)
                    .force("r", d3.forceRadial(function (d) {
                             return (d.group == "sample") ? (width / 2) - (2 * r) : 0;})) // separate by group one in the center the other outside
                    .force("link", d3.forceLink(data.links).id(function (d) { return d.id;}).strength(0.005)) //Closer togetuer by their links
                    .force("charge", d3.forceManyBody().strength(function (d) {
                             return (d.group == "sample", console.log("boo")) ? -80 : 1;})) // Makes bubles to organice similar to a beehive
					.force("collide", d3.forceCollide(r + 1)) // Avoids collition or overlaping of circles data needed: radius r
					.on("tick", ticked); // Obligatory is a function found further down to actualize the data points of x and y for each point being drawn

// Variable to draw all selected links --> extracted from the data
    var sellinks = svg.append("g")
                .attr("class", "links")
    			.selectAll("line")
                .data(data.links)
                .enter()
                .append("line")                
                .style("stroke", function(d) {return blue(+d.abundance);})
               	.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
                .attr("stroke-width", (d) => y(+d.abundance*5))

		console.log("links", data.links);

// Variable to draw all selected nodes --> extracted from the data 
    var selnodes = svg.append("g") // put into the svg var created above
    			.selectAll(".node") // obligatory
                .data(data.nodes) // to search inside the nodes array
                .enter().append("circle") // a point in space
				.attr("class", "node")	    
			    .attr("fill", function(d) {return color(d.group);})	// colour distintly OTUs from samples	
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")") // everything to the center
                .attr("r", r) // how big will my circle be, in casse i want a dinamic radius here is to be changed
                .on("mouseover", (d) => {tooltip.text(d.id) // appear text and moves along 
                		.transition()
                		.duration(1000)
               		.attr("x", d.x + width/2 + 20)
                		.attr("y", d.y + height/2);

                		console.log("clicked!", d);	
            			})
                .call(d3.drag() // allows to move the nodes around freely. Enjoy
		            .on("start", dragstarted)
		            .on("drag", dragged)
		            .on("end", dragended));




// The most IMPORTANT function in forces
// UPDATES all data to change the positions according to the developed forces
// For points - circles only needs a position x (cx) and position y (cv) to work
// For lines - needs four data - x1,y1,x2,y2 - from a source to a target node - data comes from nodes
// Ticked helps modifiyng links array with all the data organized to extract x and y
function ticked() {
	sellinks.attr("x1", (l) => l.source.x)
        .attr("y1", (l) => l.source.y)
        .attr("x2", (l) => l.target.x)
        .attr("y2", (l) => l.target.y);

console.log("hello ticking here")

     selnodes.attr("cx", (d) => d.x)
	      .attr("cy", (d) => d.y);
   }// ticked

// The next three functions are to allow draggable nodes
// Copy paste literal from the original sets
function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

    	selnodes.append("title") // this is the actual text
    			.text(d => d.id)

}); // End of json
