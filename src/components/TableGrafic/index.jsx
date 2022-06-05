import React from 'react';
import { Table, Body } from './styles';
import Chart from 'react-apexcharts';

const TableGrafic = () => {

  const chartOptions = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago"]
      },
    },
    series: [
      {
        name: "series",
        data: [30, 40, 45, 50, 49, 60, 87, 79]
      }
    ],
  }

  return (
    <Table>
      <Body>
        <Chart
          options={chartOptions.options}
          series={chartOptions.series}
          type="bar"
          width="100%"
          height="250"
        />
      </Body>
    </Table>
  )
}

export default TableGrafic;