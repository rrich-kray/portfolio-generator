const fs = require('fs')
const generatePage = require('./src/page-template.js')

const profileDataArgs = process.argv.slice(2, process.argv.length);

// const [name, github] = profileDataArgs;

fs.writeFile('index.html', generatePage('john', 'johnsgit'),  err => {
    if (err) throw err;
})



