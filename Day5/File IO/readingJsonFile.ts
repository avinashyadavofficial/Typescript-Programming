import { promises as fs } from 'fs';

async function readProfiles() {
  try {
    const content = await fs.readFile('data.json', 'utf-8');
    const data = JSON.parse(content);

    // Detect if it's array or object
    const profiles = Array.isArray(data) ? data : Object.values(data);

    profiles.forEach((person: any, index: number) => {
      console.log(`\nPerson ${index + 1}`);
      console.log(`Username: ${person.username}`);
      console.log(`Active: ${person.isActive ? 'Yes' : 'No'}`);
      console.log(`Languages Known: ${person.languages?.join(', ')}`);
    });
  } catch (err) {
    console.error('Error reading or parsing JSON:', err);
  }
}

readProfiles();
