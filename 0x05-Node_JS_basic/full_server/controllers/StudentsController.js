const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      response.status(200).setHeader('Content-Type', 'text/plain');
      response.write('This is the list of our students\n');
      
      const data = await readDatabase('./database.csv');
      
      response.write(`Number of students in CS: ${data['CS'].length}. List: ${data['CS'].join(', ')}\n`);
      response.write(`Number of students in SWE: ${data['SWE'].length}. List: ${data['SWE'].join(', ')}`);
      response.end();
    } catch (err) {
      response.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const { major } = request.params;
      
      if (major !== 'CS' && major !== 'SWE') {
        response.status(400).send('Major parameter must be CS or SWE\n');
        return;
      }
      
      const data = await readDatabase('./database.csv');
      
      response.status(200).setHeader('Content-Type', 'text/plain');
      response.send(`List: ${data[major].join(', ')}\n`);
    } catch (err) {
      response.status(500).send(err.message);
    }
  }
}

export default StudentsController;
