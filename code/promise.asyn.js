const readFile = require('fs').readFile
const path = require('path')

const filePath = fileName => path.resolve(process.cwd(), `text/${fileName}.txt`)

const readFilePromise = (url) => (
  // implicit return
  new Promise((resolve, reject) => {
    readFile(url, 'utf8', (err,data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
)

// run this function asynchronous
// don't need to chain .then anymore
// if we are not doing anything except extracting the value

async function buildHaiku() {
  try {
    const opening = await readFilePromise(filePath('opening'));
    const middle = await readFilePromise(filePath('middle'));
    const end = await readFilePromise(filePath('end'));
    console.log(`${opening}\n${middle}\n${end}`)
  } catch(e){
    console.log('Something is wrong')
  }
  
}

buildHaiku();