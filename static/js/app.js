d3.json("samples.json").then((Z) => {
   
  //  Create the Traces

    var v_id = Z.metadata[0];
    var dropdown_values = v_id.id;
    var dropdown_id = d3.select("#seldataset");
     //dropdown_id.options[0] = v_id;

  // function getData() {
  //   var dropdownMenu = d3.select("#selDataset");
  //   // Assign the value of the dropdown menu option to a variable
  //   var dataset = dropdownMenu.property("value");
  //   // Initialize an empty array for the country's data
  //   var data = [];
  
  //   if (dataset == '940') {
  //       data = 940;
   
    
    // Call function to update the chart
    //updatePlotly(data);
  

    var meta_data = Z.metadata[0]

  var table = d3.select("#sample-metadata");
  table.append("li").text(`id: ${meta_data.id}`);;
  table.append("li").text(`ethnicity: ${meta_data.ethnicity}`);;
  table.append("li").text(`gender: ${meta_data.gender}`);;
  table.append("li").text(`age: ${meta_data.age}`);;
  table.append("li").text(`location: ${meta_data.location}`);;
  table.append("li").text(`bbtype: ${meta_data.bbtype}`);;
  table.append("li").text(`wfreq: ${meta_data.wfreq}`);;

  
    var otu_data = Z.samples[0]
  
    var trace1 = {
      x: [otu_data.sample_values[9],otu_data.sample_values[8],otu_data.sample_values[7],otu_data.sample_values[6],otu_data.sample_values[5],otu_data.sample_values[4],otu_data.sample_values[3],otu_data.sample_values[2],otu_data.sample_values[1],otu_data.sample_values[0]],
      y: [`OTU ${otu_data.otu_ids[9]}`,`OTU ${otu_data.otu_ids[8]}`,`OTU ${otu_data.otu_ids[7]}`,`OTU ${otu_data.otu_ids[6]}`,`OTU ${otu_data.otu_ids[5]}`,`OTU ${otu_data.otu_ids[4]}`,`OTU ${otu_data.otu_ids[3]}`,`OTU ${otu_data.otu_ids[2]}`,`OTU ${otu_data.otu_ids[1]}`,`OTU ${otu_data.otu_ids[0]}`],
      type: "bar",
      orientation: "h",
      name: "Bellybutton Biodiversity",
    };

    // console.log(Z.samples[0]);

    // console.log(otu_data.otu_ids[0]);
    // console.log(otu_data.otu_ids[1]);

    var data = [trace1];

    var layout = {
        title: "Bellybuttons",
        xaxis: { title: "Values" },
        yaxis: { title: "OTU IDs" }
      };

    Plotly.newPlot("bar", data, layout);

   

    var trace2 = {
      y: otu_data.sample_values,
      x: otu_data.otu_ids,
      mode: "markers",
      marker: {
        size: otu_data.sample_values,
        color: otu_data.otu_ids
      },
      name: "Bellybutton Biodiversity",
    };

    console.log(otu_data.otu_ids);

    var data2 = [trace2];

    var layout2 = {
        title: "Colors!",
        showlegend: false,
        height: 400,
        weight: 400
      };

    Plotly.newPlot("bubble", data2, layout2);

    
});