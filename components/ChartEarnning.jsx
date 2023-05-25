import React, { Component, PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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
      <div style={{ width: "100%" }}>
        <AreaChart
          width={700}
          height={270}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </div>
    );
  }
}
