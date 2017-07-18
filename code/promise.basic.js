const readFile = require('fs').readFile
const path = require('path')

const filePath = fileName => path.resolve(process.cwd(), `text/${fileName}.txt`)

const readFilePromise = (url) => (
  new Promise((resolve, reject) => {
    readFile(url, 'utf8', (err,data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
)


// problems: repetitional code
const buildHaiku = () => {

  let lines = []

  readFilePromise(filePath('opening'))
    .then(result => {
      lines.push(result+'\n')
      return readFilePromise(filePath('middle'))
  }).then(result => {
      lines.push(result+'\n')    
      return readFilePromise(filePath('end'))  
  }).then(result => {
      lines.push(result+'\n')
      console.log(lines.join(''))
  }).catch((e) => {
    console.log('theres a error')
  })
}

buildHaiku();