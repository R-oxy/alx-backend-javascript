const express = require('express');
const students = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await students(process.argv[2]);
    res.send(`This is the list of our students\n
              Number of students: ${data.students.length}\n
              Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n
              Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
