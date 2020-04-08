const path = require('path')
const fs = require('fs')

const getFiles = function (dir) {
  let files = fs.readdirSync(dir)
  files = files.filter((file) => {
    return fs.lstatSync(path.join(dir, file)).isFile()
  })
  files = files.map((f) => dir + '/' + f)
  return files
}
module.exports = getFiles
