import { promises as fs } from 'fs';
const filePath = 'users.json';

async function readUsers() {
  const data = await fs.readFile(filePath, 'utf-8');
  let datas=JSON.parse(data);
  console.log(datas);
  return datas;
}

async function writeUsers(users: any[]) {
  await fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf-8');
}

// CREATE: Add new user
async function createUser(newUser: any) {
  const users = await readUsers();
  newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
  users.push(newUser);
  await writeUsers(users);
  console.log(`User ${newUser.username} added.`);
}

// READ: Get user by ID
async function getUser(id: number) {
  const users = await readUsers();
  const user = users.find(u => u.id === id);
  console.log(user ?? 'User not found');
}

// UPDATE: Change user info
async function updateUser(id: number, updates: Partial<any>) {
  const users = await readUsers();
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return console.log(' User not found');
  users[index] = { ...users[index], ...updates };
  await writeUsers(users);
  console.log(` User ${id} updated.`);
}

// DELETE: Remove a user
async function deleteUser(id: number) {
  const users = await readUsers();
  const updatedUsers = users.filter(u => u.id !== id);
  if (users.length === updatedUsers.length) return console.log(' User not found');
  await writeUsers(updatedUsers);
  console.log(`User ${id} deleted.`);
}

// Try it here!
async function runCRUD() {
  await createUser({ username: 'gaurav', role: 'viewer', active: true });
  await getUser(2);
  await updateUser(2, { active: true });
  await deleteUser(1);
  await readUsers();
}

runCRUD();
