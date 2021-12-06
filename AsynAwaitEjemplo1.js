const fs = require('fs');
const _directory  = './';
const _findKeyWord  = '.txt';

let SearchInnerFilesByExtension  = async  ( directory,findKeyWord) => {
    let files = fs.readdirSync(directory).filter(fn => fn.endsWith(findKeyWord));
    return files;
};

async  function main ()  {
    const files = await SearchInnerFilesByExtension(_directory,_findKeyWord);
    let filesInString = '';
    for (file in files ) {
        filesInString += `${file} \n`;
    }
    console.info(filesInString);
}

main ();






