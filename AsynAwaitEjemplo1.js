const fs = require('fs');
const _directory  = './';
const _findKeyWord  = '.txt';

/*SearchFiles ( function (directory,findKeyWord) {
    let files = fs.readdirSync(directory).filter(fn => fn.endsWith(findKeyWord));
    WriteInfiles (files, function(WroteFiles) {
        let i = 1;
        for(file in files) {
            fs.writeFileSync(file,`Value : ${i}`);
            i +=1;
        }
    });

});*/


let SearchInnerFilesByExtension  = async  ( directory,findKeyWord) => {
    let files = fs.readdirSync(directory).filter(fn => fn.endsWith(findKeyWord));
    return files;
};

let WriteInFiles = async (file,value) => {
     fs.writeFileSync(file,`Value : ${value}`);
     return file;
};

async  function main ()  {
    let files = await SearchInnerFilesByExtension(_directory,_findKeyWord);
    let filesInString = '';
    let i = 1;
    for (file in files ) {
        let path  = await WriteInFiles(`${_directory}carpeta/${file}${_findKeyWord}`,i);
        filesInString += `${path} \n`;
        i+=1;
    }
    console.info(filesInString);
}

main ();






