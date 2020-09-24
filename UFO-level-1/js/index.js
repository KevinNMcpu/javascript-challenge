console.log('Hello this is a test')

console.log(data)

var tbody = d3.select("tbody");

data.forEach(function(Sighting)
{ 
    console.log(Sighting);
    var row = tbody.append("tr").attr("id","kevfilter");
    Object.entries(Sighting).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td").attr("id","kevfilter");
    cell.text(value);})
})

var button = d3.select("#filter-btn");
var form = d3.select("#datetime");
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    d3.selectAll("#kevfilter").remove();
    console.log("Running!")
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = data.filter(data => data.datetime === inputValue);
    console.log(filteredData);
    filteredData.forEach(function(filteredSighting)
    { 
        console.log(filteredSighting);
        var row = tbody.append("tr").attr("id","kevfilter");
        Object.entries(filteredSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td").attr("id","kevfilter");
        cell.text(value);})
    })
}