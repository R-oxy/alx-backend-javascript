const fs = require('fs');

async function countStudents(path) {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const students = data.split('\n').slice(1)
    .map(line => line.split(','))
    .filter(fields => fields.length === 4)
    .map(([firstName, lastName, age, field]) => ({ firstName, lastName, age, field }));

  const studentsByField = students.reduce((acc, { field, firstName }) => {
    if (!acc[field]) {
      acc[field] = [];
    }
    acc[field].push(firstName);
    return acc;
  }, {});

  console.log(studentsByField);
  return studentsByField;
}

module.exports = countStudents;
