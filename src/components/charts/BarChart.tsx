import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { barChartSeries } from '../../utils/mock_chart_data';
import ChartCard from './ChartCard';

interface BarChartProps {
  title: string;
  series?: { name: string; data: [] }[];
}

const BarChart: React.FC<BarChartProps> = ({
  title,
  series = barChartSeries,
}) => {
  const state = {
    series: series,
    options: {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      // States
      states: {
        hover: {
          filter: {
            type: 'lighten',
            value: 0.04,
          },
        },
        active: {
          filter: {
            type: 'darken',
            value: 0.88,
          },
        },
      },
      // Fill
      fill: {
        opacity: 1,
        gradient: {
          type: 'vertical',
          shadeIntensity: 0,
          opacityFrom: 0.4,
          opacityTo: 0,
          stops: [0, 100],
        },
      },

      // Datalabels
      dataLabels: { enabled: false },
      // Grid
      grid: {
        show: false,
      },
      // Xaxis
      xaxis: {
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      // Markers
      markers: {
        size: 0,
        strokeColors: 'white',
      },
      // Tooltip
      tooltip: {
        x: {
          show: false,
        },
      }, // plotOptions
      plotOptions: {
        // Bar
        bar: {
          columnWidth: '80%',
          borderRadius: 4,
        },
      },
    },
  };
  return (
    <ChartCard title={title}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type='bar'
        height={200}
        width='100%'
      />
    </ChartCard>
  );
};

export default BarChart;
