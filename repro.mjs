import * as echarts from 'echarts';

const categories = ['a', 'b', 'c', 'd', 'e'];

function optionWith(seriesCount) {
  return {
    animation: false,
    series: Array.from({length: seriesCount}, (_, seriesIndex) => ({
      data: categories.map((_, index) => (seriesIndex + 1) * (index + 1)),
      name: `Series ${seriesIndex + 1}`,
      type: 'line',
    })),
    tooltip: {trigger: 'axis'},
    xAxis: {data: categories, type: 'category'},
    yAxis: {type: 'value'},
  };
}

const chart = echarts.init(document.getElementById('chart'));

chart.setOption(optionWith(5));

window.shrinkToOneSeries = () => {
  chart.setOption(optionWith(1), {
    lazyUpdate: false,
    notMerge: false,
    replaceMerge: ['series', 'xAxis', 'yAxis'],
  });
};

window.addEventListener('keydown', (event) => {
  if (event.key === 's') {
    window.shrinkToOneSeries();
  }
});
