import { promises as fs } from 'fs';

async function writeIfNotExists() {
  try {
    await fs.access('output.txt');
    console.log('File already exists. Not overwriting.');
  } catch {
    await fs.writeFile('output.txt', 'Critical setup data.', 'utf-8');
    console.log('output.txt created');
  }
}
writeIfNotExists();