const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/(<(?:p|span|div|ul|li|a)[^>]*?className=(?:(?:`[^`]*)|(?:"[^"]*)))font-sans((?:[^`]*`)|(?:[^"]*"))/g, '$1font-secondary$2');

fs.writeFileSync('src/App.tsx', content);
