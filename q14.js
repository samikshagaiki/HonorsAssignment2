// 14. Generate a CSV Report from JSON Data

const fs = require('fs');
const { Parser } = require('json2csv');

const data = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 27 }
];

const fields = ['name', 'age'];
const opts = { fields };

try {
  const parser = new Parser(opts);
  const csv = parser.parse(data);

  fs.writeFileSync('report.csv', csv);
  console.log('CSV file generated as report.csv');
} catch (err) {
  console.error('CSV generation failed:', err.message);
}