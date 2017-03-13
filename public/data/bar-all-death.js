$(document).ready(function() {

    var width, fullheight, height, margin = {};

    updateWidth();

    var xScale = d3.scale.ordinal()
        .rangeRoundBands([0, width], .3);

    var yScale = d3.scale.linear()
        .rangeRound([height, 0]);

    var color = d3.scale.ordinal().range(["#ccc", "#d9b127"]); //d3.scale.category20();

    var xAxis_bars = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .ticks((width < 700 ? 8 : 15))
        .innerTickSize([0]);

    var yAxis_bars = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .tickFormat(d3.format(".2s"));

    // we don't need to specify the x and y if we provide them as d.x and d.y.
    var stack = d3.layout.stack();
    //.offset("expand");  // use this to get it to be relative/normalized! Default is zero.

    var tooltip = d3.select("body").append("div").classed("tooltip", true);
    var lowyear
    var highyear

    var $svg = d3.select("#death-all-month-chart").append("svg")
        .attr("width", width)
        .attr("height", height)

    var $bars_death = $svg.append("g")
        .attr("transform", "translate(" + margin.left + ", 0)");

    var xAxis = $bars_death.append("g").attr("class", "x axis");
    var yAxis = $bars_death.append("g").attr("class", "y axis");
    var illness;
    var illnessall;
    var illnesses_reversed;
    var stacked;
    var legend;
    var illnesses = ["Confirmed", "Estimated"];

    d3.csv("/data/bar-all-death.csv", function(data) {
        setupData(data);
        render();
        window.addEventListener('resize', render);
    });

    function setupData(data) {

      updateWidth();

        xAxis
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis_bars)
            .selectAll("text")
            .attr("dy", "0.35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "end");

        yAxis
          .attr("class", "y axis")
          //.attr("transform", "translate(0," + height + ")")
          .call(yAxis_bars)
          .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Deaths");

        color.domain(illnesses);

        xScale.rangeRoundBands([0, width], .1);

        yScale.rangeRound([height, 0], .1);

        // grouping by illness, right way - and making the x and y the stack looks for.
        var dataToStack = illnesses.map(function(illness) {
            return data.map(function(d) {
                return {
                    x: d.MonthAbrev+" "+d.Year,
                    y: +d[illness],
                    illness: illness
                };

            })
        });

        stacked = stack(dataToStack);

        // do these after the stack, so you have access to d.y0!
        xScale.domain(data.map(function(d) {
            return d.MonthAbrev+" "+d.Year;
        }));

        var ayear = [];

        for (i = 0; i < data.length; i++) {
            //console.log(data[i].Year)
            ayear.push(data[i].Year);
        }

        var maxyear = Math.max.apply(Math, ayear)
        var minyear = Math.min.apply(Math, ayear)
        d3.select("#death-all-month-text")
            .append("h2")
            .text("All Intent Opioid-Related Deaths of Massachusetts Residents " + minyear + "-" + maxyear)
        //console.log(minyear, maxyear)

        // this domain is using the last of the stacked arrays, and getting the max height.
        yScale.domain([0, d3.max(stacked[stacked.length - 1], function(d) {
            return d.y0 + d.y;
        })]);

        // we set the colors per illness - the outer nesting
        illness = $svg.selectAll("g.illness")
            .data(stacked) // an array of arrays
            .enter().append("g")
            .attr("class", "illness")
            .style("fill", function(d, i) {
                return color(d[0].illness);
            });

        // but we draw one rect for each country, bottom up.
        // but we draw one rect for each country, bottom up.
        illnessall = illness.selectAll("rect")
            .data(function(d) {
                //console.log(d[0]);
                return d;
            }) // this just gets the array for bar segment.
            .enter().append("rect")
            .attr("width", xScale.rangeBand())
            .attr("x", function(d) {
                return (xScale(d.x) + margin.left)
                ;
            })
            .attr("y", function(d) {
                return yScale(d.y0 + d.y);
            }) //
            .attr("height", function(d) {
                return yScale(d.y0) - yScale(d.y0 + d.y);
            }) // height is base - tallness
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseout", mouseout);;

        illnesses_reversed = illnesses.slice().reverse();

        legend = $svg.selectAll(".legend")
            .data(illnesses_reversed)
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
                return "translate(0," + i * 20 + ")";
            });

        legend.append("rect")
            .attr("x", width*0.9)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", function(d) {
                return color(d);
            }); // illness name

        legend.append("text")
            .attr("x", width*0.9 + 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "start")
            .text(function(d, i) {
                return illnesses_reversed[i].replace(/_/g, " ");
            });
    };





    function mouseover(d) {

        d3.select(this)
            .transition()
            .style("stroke", "black");

        tooltip
            .style("display", null) // this removes the display none setting from it
            .html("<p>" + d.illness.replace(/_/g, " ") +
                "<br>Deaths: " + d.y +
                "<br>Month: " + d.x + " </p>");


    }

    function mousemove(d) {
        tooltip
            .style("top", (d3.event.pageY - 10) + "px")
            .style("left", (d3.event.pageX + 10) + "px");
    }

    function mouseout(d) {
        d3.select(this)
            .transition()
            .style("stroke", "none");

        tooltip.style("display", "none"); // this sets it to invisible!
    }

    function render() {

        //console.log("THIS WAS TRIGGERED")

        updateWidth();

        xScale.rangeRoundBands([0, width], .3);

        yScale.rangeRound([height, 0]);
        yScale.domain([0, d3.max(stacked[stacked.length - 1], function(d) {
            return d.y0 + d.y;
        })]);

        xAxis_bars.scale(xScale);
        yAxis_bars.scale(yScale);

        $svg.attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)

        $bars_death.attr("transform", "translate(" + margin.left + ", 0)");

        xAxis
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis_bars)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 2)
            .attr("dy", ".35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start");

        //.selectAll(".tick text")
        //.call(xScale.rangeBand())

        yAxis.call(yAxis_bars);

        //legend = $svg.selectAll(".legend")
        //    .data(illnesses_reversed)
        //    .enter().append("g")
        //    .attr("class", "legend")
        //    .attr("transform", function(d, i) {
        //        return "translate(0," + i * 20 + ")";
        //    });

        legend.selectAll("rect")
            .attr("x", (width*0.85))
            .attr("width", 18)
            .attr("height", 18)
            //.style("fill", function(d) {
            //    return color(d);
            //}); // illness name

        legend.selectAll("text")
            .attr("x", width*0.85 + 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            //.style("text-anchor", "start")
            //.text(function(d, i) {
            //    return illnesses_reversed[i].replace(/_/g, " ");
            //});

        illnessall = illness.selectAll("rect")
            .attr("x", function(d) {
                return (xScale(d.x) + margin.left);
            })
            .attr("y", function(d) {
                return yScale(d.y0 + d.y);
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                return yScale(d.y0) - yScale(d.y0 + d.y);
            });
    }

    function updateWidth() {
        var w = document.querySelector('#death-all-month-chart').clientWidth;
        margin = {
                top: 50,
                right: 10,
                bottom: 60,
                left: 50
            },
            width = w - margin.left - margin.right;

        if (w < 500) {
            fullheight = 350
            height = 350 - margin.top - margin.bottom;
            linemult = 1.4
            linepad = 40
        } else {
            fullheight - 500
            height = 500 - margin.top - margin.bottom;
            linemult = 1.35
            linepad = 30
        }

    }

});
