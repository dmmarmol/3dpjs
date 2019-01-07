const fs = require('fs');
const OBJFile = require('obj-file-parser');

class Parser {
    constructor(filePath: string) {
        this.readFile(filePath);        
    }

    readFile(filePath: string) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            
            const file = new OBJFile(data).parse();

            console.log(file);
        });
    }
}

export default Parser;