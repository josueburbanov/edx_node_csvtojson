const fs = require('fs')
const csv = require('csvtojson')
const path = require('path')
const util = require('util');

//const fileRead =  fs.readdirSync(path.join(__dirname,'customer-data.csv'))
const csvFilePath = path.join(__dirname,'customer-data.csv')
csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{        
    fs.appendFileSync(path.join(__dirname,'customer-data.json'),util.format(jsonObj))
    
})
.on('done',(error)=>{
    console.log('end')
})
