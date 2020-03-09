# Belly Button Biodiversity

Built an interactive dashboard to explore the Belly Button Biodiversity DataSet. All of the plots are updated any time that a new sample is selected. Used Flask API to serve the data needed for plots.


### Technology Used

- Html, 
- JavaScript, 
- Css, 
- Python, 
- Sqlite



## Step 1 - Plotly.js

Interactive charts for your dashboard were created using Plotly.js.

* PIE chart -  used data from samples route (`/samples/<sample>`) to display the top 10 samples.

  -  Used `sample_values` as the values for the PIE chart.

  -  Used `otu_ids` as the labels for the pie chart.

  -  Used `otu_labels` as the hovertext for the chart.



* Bubble Chart - used data from samples route (`/samples/<sample>`) to display each sample.

  - Used `otu_ids` for the x values.

  - Used `sample_values` for the y values.

  - Used `sample_values` for the marker size.

  - Used `otu_ids` for the marker colors.

  - Used `otu_labels` for the text values.

 * Gauge Chart - plotted the Weekly Washing Frequency obtained from the `/metadata/<sample>`route.

* Sample metadata from the route `/metadata/<sample>` was displayed.* Display each key/value pair from the metadata JSON object somewhere on the page.

  
## Step 2 - Heroku

Flask app was Deployed to Heroku.

* You can use the provided sqlite file for the database.


## Flask API

Flask API was used to serve the data needed for plots.


* Don't forget to `pip install -r requirements.txt` before starting your server.





