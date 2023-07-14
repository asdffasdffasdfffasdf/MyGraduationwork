<template>
  <div>
    <div class="chart">
      <Bar :data="chartData" :options="options" />
      
    </div>
  </div>
  <div class="chart-grid">
    <div class="chart-item">
      <Line :data="lineChartData2" :options="options2" />
      <h3>용존산소량</h3>
    </div>
    <div class="chart-item">
      <Line :data="lineChartData" :options="options2" />
      <h3>수온</h3>
    </div>
    <div class="chart-item">
      <Line :data="lineChartData" :options="options2" />
      <h3>PH</h3>
    </div>
    <div class="chart-item">
      <Line :data="lineChartData" :options="options2" />
      <h3>탁도</h3>
    </div>
  </div>

</template>

<script>
import { Bar, Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js'
import * as chartConfig from '../assets/chartConfig.js'
import * as status from '../assets/status'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
)

export default {
  name: 'CombinedChart',
  components: {
    Bar,
    Line
  },
  data() {
    return {
      options: status.options,
      options2: chartConfig.options,
      chartData: {
        labels: ['용존산소량', '탁도', '수온', 'pH'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#f87979', '#81D4FA', '#CE93D8', '#FFD54F'],
            data: status.getStatusData()
          }
        ]
      },
      
      lineChartData: chartConfig.data,
      lineChartData2: chartConfig.data2
    }
  },
  watch: {
  chartdata(data){
    if (data) {
      alert('Data has changed!');
    }
  }
  }
}

</script>

<style>

.status {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f9fa;
  padding: 10px;
  height: 80px; /* Adjust the height as needed */
  width: 90%;
  max-width: 100vw;
  margin: 0 auto;
}

.status-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.status-label {
  font-size: 16px;
  font-weight: bold;
}

.status-value {
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
  margin-top: 5px;
}
.chart {
  height: 800px;
  width: 80%;
  max-width: 100vw;
  margin: 0 auto;
}
.chart-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 10px;
  height: 100vh;
}

.chart-bar {
  height: 100%;
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
}

.chart-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
}

.chart-item {
  height: 100%;
  width: 100%;
  max-width: 100%;
}
</style>
