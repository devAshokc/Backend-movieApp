// const fs = require('fs')
import fs from "fs"
// /ex-1
// const data = 'Hello from ashok'
// fs.writeFile('./msg.txt', data, (err) => {
//     console.log('File creation has been completed')
// })

// // ex-2
// const quotes = "Live more worry less!!"

// for (var i = 1; i <= 100; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quotes, (err) => {
//         console.log('File creation has been completed in Backup folder')
//     })
// }
// ex-3
// const quotes2 = "Live more worry less!!"
// const [, , numOfTimes] = process.argv
// for (var i = 1; i <= numOfTimes; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quotes2, (err) => {
//         console.log('File creation has been completed in Backup folder')
//     })
// }

// ex-4
// fs.readFile('./msg.txt', 'UTF-8', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(data)
//     }
// })
// Ex-5
// const Append = "Append this line"
// fs.appendFile('./msg.txt', "\n" + Append, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Append has completed')
//     }
// })

// ex-6
// fs.unlink('./dashboard.css', (err) => {
//     console.log('Finally it has been deleted')
// })

// for (var i = 1; i <= 100; i++) {
//     fs.unlink(`./backup/text-${i}.html`, (err) => {
//         console.log("Every file in backup folder has been deleted")
//     })
// }

// fs.unlink("./msg.txt", (err) => {
//     console.log("msg file has been deleted")
// })
