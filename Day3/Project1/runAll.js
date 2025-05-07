const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

fs.readdirSync(distDir)
  .filter(file => file.endsWith('.js'))
  .forEach(file => {
    console.log(`Running ${file}`);
    require(path.join(distDir, file));
});

