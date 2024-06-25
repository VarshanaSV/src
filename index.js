import fs from "fs-extra"
const src ="file.txt"
const dst ="destination/file.txt"

fs.move(src,dst,(err)=>{
    if(err){
        return console.log("File not moved")

    }
console.log("Task completed")
})