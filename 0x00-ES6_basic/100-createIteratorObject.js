export default function createIteratorObject(report) {
  let employees = [];

  for (const department of Object.values(report.allEmployees)) {
    employees = employees.concat(department);
  }

  let currentIndex = 0;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (currentIndex < employees.length) {
            const value = employees[currentIndex];
            currentIndex += 1;
            return { value, done: false };
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}
