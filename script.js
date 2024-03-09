// Sample country data (name and ISO code)
const countryData = [
  { name: "United States of America", iso_a2: "USA" },
  { name: "Canada", iso_a2: "CAN" },
  { name: "United Kingdom", iso_a2: "GBR" }
  // Add more country data as needed
];

// Load and draw world map using D3.js
d3.json("https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json").then(function(world) {
  // Create a projection for the map
  const projection = d3.geoNaturalEarth1()
    .fitSize([800, 500], world);

  // Create a path generator
  const path = d3.geoPath()
    .projection(projection);

  // Create SVG element for the map
  const svg = d3.select("#map")
    .append("svg")
    .attr("width", 800)
    .attr("height", 500);

  // Draw the map
  svg.selectAll("path")
    .data(world.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("fill", "#f9c63c") // Yellow color
    .attr("stroke", "#4ca4fd") // Blue border
    .attr("stroke-width", 0.5)
    .style("opacity", 0.8) // Adjust opacity
  
 


 // Sample data for markers
const markerData = [
  { name: "Marker 1", latitude: 40.7128, longitude: -74.0060, info: "Info for Marker 1" },
  { name: "Marker 2", latitude: 34.0522, longitude: -118.2437, info: "Info for Marker 2" },
  { name: "Marker 3", latitude: 51.5074, longitude: -0.1278, info: "Info for Marker 3" }
  // Add more marker data as needed
];

// Add markers to the map
svg.selectAll(".marker")
  .data(markerData)
  .enter()
  .append("circle")
  .attr("class", "marker")
  .attr("cx", d => projection([d.longitude, d.latitude])[0])
  .attr("cy", d => projection([d.longitude, d.latitude])[1])
  .attr("r", 5)
  .on("click", function(event, d) {
    console.log("Marker clicked!"); // Log message to check if marker click event is triggered
    // Show marker info in the panel
    const panel = document.querySelector('#panel');
    panel.style.right = '0px'; // Slide in the panel from the right
  });

// Add event listener to the close button
document.querySelector('.close-btn').addEventListener('click', function() {
  const panel = document.querySelector('#panel');
  panel.style.right = '-300px'; // Move the panel back to the right to hide it
});


});
