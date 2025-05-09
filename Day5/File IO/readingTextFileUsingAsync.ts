import { promises as fs } from 'fs';

async function readFileAsync() {
  try {
    const data = await fs.readFile('sample.txt', 'utf-8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFileAsync();
