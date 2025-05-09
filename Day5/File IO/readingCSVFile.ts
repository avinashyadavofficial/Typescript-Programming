import * as fs from 'fs';
import * as csv from 'csv-parser';

let results: any[] = [];

fs.createReadStream('sample.csv')//Opens the file as a stream
  .pipe(csv())  //Feeds data through the CSV parser
  .on('data', (data) => results.push(data)) //Fires for each row in the CSV
  .on('end', () => {    //	Called after all rows are read
    // results=results.filter(result=>result.id===String(1)); 
    // Output would be:
    // CSV Data: [
    //   { id: '1', name: 'Avinash', email: 'avinash@example.com', age: '21' }
    // ]
    console.log('CSV Data:', results);
  })
  .on('error', (err) => {
    console.error('Error reading CSV:', err);
});
//Output:
// CSV Data: [
//   { id: '1', name: 'Avinash', email: 'avinash@example.com', age: '21' },
//   { id: '2', name: 'Rahul', email: 'rahul@example.com', age: '27' },
//   { id: '3', name: 'Gaurav', email: 'gaurav@example.com', age: '29' }
// ]

//each row will be fetch like this: { id: '1', name: 'Avinash', email: 'avinash@example.com', age: '28' }
//Note: All values come in as strings, so you may need to cast age to a number.


// Bonus: Type-Safe Row Parsing
// If you want types for rows:

// type User = {
//   id: string;
//   name: string;
//   email: string;
//   age: string;
// };

// const users: User[] = [];