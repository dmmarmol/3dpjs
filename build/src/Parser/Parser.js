const fs = require('fs');
const OBJFile = require('obj-file-parser');
class Parser {
    constructor(filePath) {
        this.readFile(filePath);
    }
    readFile(filePath) {
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
//# sourceMappingURL=Parser.js.map