// const os = require('os')
import os from "os"

// 1kb = 1024bytes
// 1mb = 1024kb
// 1gb = 1024mb
console.log('Free memory space:', os.freemem())
console.log('Free memory space exactly:', os.freemem() / 1024 / 1024 / 1024)
console.log('Total memory space:', os.totalmem() / 1024 / 1024 / 1024)
console.log('version:', os.version())
console.log('Processor:', os.cpus())
console.log('released date:', os.release())
console.log('host name:', os.hostname())
console.log('platform:', os.platform())
console.log('type:', os.type())