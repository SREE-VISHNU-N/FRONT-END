/* // FS means file system

const { error } = require('console');
const fs = require('fs'); // This for import filesystem function

 //mkdir means make directory lika a folder

if (!fs.existsSync('./FileSystem/cFolder')) {
    fs.mkdir('./FileSystem/cFolder', (error) => {
        if (error) {
            console.log(error);
        }
        else
            console.log('File Created');

    }
    )
    console.log('Before created'); // This line means it is a asyn
}


// It for create file or write file

fs.writeFile('./FileSystem/cFolder/cFile.txt', 'Hello, i writtend', (error)=>{
    if(error)
        console.log(error.message);
    else
        console.log('File written');
})


//It for read file

setTimeout(()=>{

if (fs.existsSync('./FileSystem/cFolder/cFile.txt')) {
    fs.readFile('./FileSystem/cFolder/cFile.txt', (error, data) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(data.toString());
        }
    })
}

},1000)


//It for delete file

if(fs.existsSync('./FileSystem/cFolder/cFile.txt')){
    fs.unlink('./FileSystem/cFolder/cFile.txt',(err)=>{
        if(err)
            console.log(err);
        else
            console.log('File deleted');
    })
}

//It for delete folder

if(fs.existsSync('./FileSystem/cFolder')){
    fs.rmdir('./FileSystem/cFolder',(err)=>{
        if(err)
            console.log(err);
        else
            console.log('File Deleted');
    })
}   */



//After practicing Filesystem

/* const fs = require('fs');

if( ! fs.existsSync('./FileSystem/NewFolder'))
{
    
fs.mkdir('./FileSystem/NewFolder',(error)=>{
    if(error){
        console.log(error.message);
    }
    else{
        console.log('File is created');
    }
})

}


else{
    console.log('File is already created');
}
 */

const fs = require('fs');

/* fs.writeFile('./FileSystem/newfile.txt','Hello, created file',(error)=>{
    if(error){
        console.log(error.message);
    }
    else{
        console.log('file is created');
    }
}) */



if (fs.existsSync('./FileSystem/newfile.txt')) {
    fs.readFile('./FileSystem/newfile.txt', (error, data) => {
        if (error) {
            console.log(error.message);
        }
        else {
            console.log(data.toString());
        }
    })
    
}

else{
    console.log('File is not here');
}

 