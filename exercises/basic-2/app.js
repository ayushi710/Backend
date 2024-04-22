const fs = require('fs')
const ExcelJS = require('exceljs');

// Read a given txt file from your file system	
// Create and write to a file, save file in your local machine	
// Copy from one file to another	

const textBuffer = fs.readFileSync('mock.txt')
const dataText = textBuffer.toString()
fs.writeFileSync("mock-copy.txt", dataText)


// Read data from json and write it to excel file.	
// You can use exceljs library for this or any other spreadsheet support package.	
async function excelCreation () {
    const dataBuffer = fs.readFileSync('data.json')
    const data = dataBuffer.toString()
    const obj = JSON.parse(data)
    const _col = Object.keys(obj[0])
    console.log(_col)
    
    const workbook = new ExcelJS.Workbook();
    
    workbook.creator = 'Ayushi';
    const sheet = workbook.addWorksheet('My Sheet');
    
    sheet.columns = _col.map(_c => {
        return {
            header : _c,
            key: _c,
            width : 30
        }
    })
    
    
    sheet.addRows(obj)
    
    console.log(obj)

    await workbook.xlsx.writeFile('demo1.xlsx')
}


// fs.writeFileSync('data-2.xlsx', JSON.parse(newRows)

excelCreation()

