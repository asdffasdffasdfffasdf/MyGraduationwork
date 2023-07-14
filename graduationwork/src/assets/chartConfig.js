import dayjs from "dayjs";
var now = dayjs();
now.format();






export const data = {
  labels: [
    now.subtract(6, "day").format("YYYY-MM-DD"),
    now.subtract(5, "day").format("YYYY-MM-DD"),
    now.subtract(4, "day").format("YYYY-MM-DD"),
    now.subtract(3, "day").format("YYYY-MM-DD"),
    now.subtract(2, "day").format("YYYY-MM-DD"),
    now.subtract(1, "day").format("YYYY-MM-DD"),
    now.format("YYYY-MM-DD")
  ],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40],
      
    }
  ]
}
export const data2 = {
  labels: [
    now.subtract(6, "day").format("YYYY-MM-DD"),
    now.subtract(5, "day").format("YYYY-MM-DD"),
    now.subtract(4, "day").format("YYYY-MM-DD"),
    now.subtract(3, "day").format("YYYY-MM-DD"),
    now.subtract(2, "day").format("YYYY-MM-DD"),
    now.subtract(1, "day").format("YYYY-MM-DD"),
    now.format("YYYY-MM-DD")
  ],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [33, 1, 21, 36, 18, 50, 90],
      
    }
  ]
}