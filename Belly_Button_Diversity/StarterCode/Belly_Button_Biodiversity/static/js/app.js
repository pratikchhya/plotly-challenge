function buildMetadata(sample) {

  // Use `d3.json` to fetch the metadata for a sample
      var url = "/metadata/"+sample;
      d3.json(url).then(function(sample){
    // console.log(sample);

 // Use d3 to select the panel with id of `#sample-metadata`
      var sample_metaData = d3.select("#sample-metadata");

  // Use `.html("") to clear any existing metadata
      sample_metaData.html("");

  // Use `Object.entries` to add each key and value pair to the panel

      Object.entries(sample).forEach(([key, value]) => {
        console.log(key,value);
        // var row = sample_metadata.append("tr");
        sample_metaData.append("h6").text(`${key.toUpperCase()}:${value}`);
      })
  })
};
  
    // buildGauge(data.WFREQ);


function buildCharts(sample) {

  //  Use `d3.json` to fetch the sample data for the plots
  var url = `/samples/${sample}`;
  //  Build a Bubble Chart using the sample data
  d3.json(url).then(function(data){
    var x = data.otu_ids;
    var y = data.sample_values;
    var Values = data.otu_labels;
    var Size = data.sample_values;
    var Colors = data.otu_ids;
    var trace_bubble = {
      x: x,
      y: y,
      text: Values,
      mode: 'markers',
      marker: {
        size: Size,
        color: Colors
      }
    };

    var data = [trace_bubble];
    var layout = {
      xaxis: {title: "OTU ID"}
    };
    Plotly.newPlot('bubble', data, layout);
  
    // Build a Pie Chart
    d3.json(url).then(function(data) {
      var Value = data.sample_values.slice(0,10);
      var label = data.otu_ids.slice(0, 10);
      var Hover = data.otu_labels.slice(0, 10);
      var data = [{
        values: Value,
        labels: label,
        hovertext: Hover,
        type: 'pie'
      }];
      Plotly.newPlot('pie', data);
    })
  })
};


function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
