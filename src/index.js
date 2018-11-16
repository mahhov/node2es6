#!/usr/bin/env node

const fs = require('fs');

let main = async () => {
    const inputFile = process.argv[2];
    const outputFile = process.argv[3];

    let nodeString = await fs.promises.readFile(inputFile, 'utf8');
    let es6String = convert(nodeString);
    await fs.promises.writeFile(outputFile, es6String);
};

let convert = nodeString =>
    nodeString
        .replace(/module\.exports\s*=\s*(.*)/g, (line, exports) => `export ${exports}`)
        .replace(/module\.exports\.(.*)/g, (line, exports) => `export let ${exports}`);

main();