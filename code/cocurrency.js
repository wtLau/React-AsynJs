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

const buildHaiku = () => {

  let lines = []
  const promise = ['start', 'middle', 'end'].map((name) => readFilePromise(filePath(name)))
  Promise.all(promise).then((result) => {
    console.log(result.join('\n'))
  }).catch((e) => {
    console.log(e)
  })
}

buildHaiku();