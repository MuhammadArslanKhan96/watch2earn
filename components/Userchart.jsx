import React, { Component } from "react";
import { Bar, ComposedChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "JUL",
    uv: 10,
    pv: 25,
  },
  {
    name: "AUG",
    uv: 20,
    pv: 20,
  },
  {
    name: "SEPT",
    uv: 30,
    pv: 30,
  },
  {
    name: "OCT",
    uv: 30,
    pv: 22,
  },
  {
    name: "NOV",
    uv: 30,
    pv: 17,
  },
  {
    name: "DEC",
    uv: 30,
    pv: 29,
  },
];

export default class Example extends Component {
  render() {
    return (
      <>
        <ComposedChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis dataKey="uv" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="pv"
            barSize={10}
            fill="#fb6340"
            style={{ borderRadius: "50px" }}
          />
        </ComposedChart>
      </>
    );
  }
}
