const fs = require('fs')

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                // return out of the function here to make sure the promise doesn't acciedentally execute the resolve() function as well
                return;
            }

            // if everythingt went well, resolve the Promise and send the data to the .then() method
            resolve({
                ok: true,
                message: 'File created'
            })
        })
    })
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './utils/style.css', err => {
            if (err) {
                reject(err)
            } else {
                return;
            }
        })
    })
}

module.exports = {writeFile, copyFile}

// This is known as using shorthand property names. So if we have a property key name with the same name as the value we're associating with it, like writeFile: writeFile, we can just say writeFile, and it will understand that we're using writeFile for both the property name and its value.