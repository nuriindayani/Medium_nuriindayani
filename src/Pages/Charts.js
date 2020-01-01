import React, { Component } from "react";
import Chart from "react-apexcharts";

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 50, 45, 60, 49, 92, 62, 70]
        }
      ]
    };
  }

  render() {
    return (
      <div
        className="app"
        style={{
          width: "80%",
          height: "5%",
          margin: "auto",

          justifyContent: "center"
        }}
      >
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
