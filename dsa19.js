//https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/

const displayTable = (orders) => {
  const result = [["Table"]];
  const a = [];

  const foodItems = orders.map((order) => order[2]);
  foodItems.sort();

  const uniqueFoodItems = new Set(foodItems);
  uniqueFoodItems.forEach((val) => {
    result[0].push(val);
    a.push("0");
  });

  const tables = orders.map((order) => order[1]);
  tables.sort((a, b) => a - b);

  const uniqueTables = new Set(tables);

  uniqueTables.forEach((table) => {
    result.push([table, ...a]);

    for (let i = 1; i < result[0].length; i++) {
      for (let j = 0; j < orders.length; j++) {
        if (orders[j][1] === table && orders[j][2] === result[0][i]) {
          result[result.length - 1][i] = (
            parseInt(result[result.length - 1][i]) + 1
          ).toString();
        }
      }
    }
  });
  return result;
};

const data = [
  ["David", "3", "Ceviche"],
  ["Corina", "10", "Beef Burrito"],
  ["David", "3", "Fried Chicken"],
  ["Carla", "5", "Water"],
  ["Carla", "5", "Ceviche"],
  ["Rous", "3", "Ceviche"],
];

console.log(displayTable(data));
