import { promises as fs } from 'fs';

fs.readFile('sample.txt', 'utf-8')
  .then(data => {
    console.log('File content:', data);
  })
  .catch(err => {
    console.error('Error:', err);
  });
