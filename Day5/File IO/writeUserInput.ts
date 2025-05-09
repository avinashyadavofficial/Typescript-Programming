// Create and Write to File Based on User Input
// You can take values (e.g., from user input or API) and write them:
import {promises as fs} from 'fs';
const userData = {
  username: 'avinashyadav',
  active: true,
  roles: ['admin', 'developer'],
};
async function sol(){
    try{
        await fs.writeFile('user.json', JSON.stringify(userData, null, 2), 'utf-8');
    }
    catch{
        console.log("Error writing");
    }
}
sol();
