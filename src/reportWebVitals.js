const reportWebVitals = () => {
  console.log("is it workin ?");
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    [getCLS, getFID, getFCP, getLCP, getTTFB].forEach((metricFunction) =>
      metricFunction((metric) => {
        fetch('http://pushgateway:9091/metrics/job/pushgateway', {
          method: 'POST',
          headers: {'Content-Type': 'x-www-form-urlencoded'},
          body: `${metric.name} ${metric.value}`
        }).catch((err) => console.error('Error pushing metric to Pushgateway:', err));
      })
    );
  });
};

export default reportWebVitals;