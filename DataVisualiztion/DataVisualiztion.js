// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Play phone", "Take cake of baby", "Work", "Do homework","Sleep"],
      datasets: [
        {
          label: "Time Spent Per Week(hours)",
          backgroundColor: ["lightblue", "lightpink","violet","lightgreen","orange"],
          data: [43,65,8,10,42]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Danying Chen'
      }
    }
});

// Pie Chart
new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Play phone", "Take cake of baby", "Work", "Do homework","Sleep"],
      datasets: [{
        label: "Time Spent Per Week(hours)",
        backgroundColor: ["lightblue", "lightpink","violet","lightgreen","orange"],
        data: [43,65,8,10,42]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Danying Chen'
      }
    }
});
