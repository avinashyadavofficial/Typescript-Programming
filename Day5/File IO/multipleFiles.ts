import { promises as fs } from 'fs';
import * as path from 'path';

const files = ['user1.json', 'user2.json', 'user3.json'];

async function readAndFilterUsers() {
  try {
    // Step 1: Read all files in parallel
    const fileContents = await Promise.all(
      files.map(file => fs.readFile(path.join('./data', file), 'utf-8'))
    );

    // Step 2: Parse the JSON content
    const allUsers = fileContents.map(content => JSON.parse(content));

    // Step 3: Filter active users only
    const activeUsers = allUsers.filter(user => user.active);

    // Step 4: Save active users into a new file
    await fs.writeFile('./data/activeUsers.json', JSON.stringify(activeUsers, null, 2), 'utf-8');

    //printing how many users of role: editors
    const editorsUser=(allUsers.filter(user=>user.roles.includes("editors")));
    console.log("The count of user of role editors is ",editorsUser.length);
    
    //printing username of those users
    editorsUser.forEach(a=>{
        console.log(a.username);
    });
    console.log(`Found ${activeUsers.length} active user(s). Saved to activeUsers.json`);
  } catch (err) {
    console.error('Error reading or filtering users:', err);
  }
}

readAndFilterUsers();
