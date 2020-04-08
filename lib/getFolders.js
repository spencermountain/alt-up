const fs = require('fs')
const path = require('path')

const getFolders = function (dir) {
  let files = fs.readdirSync(dir)
  let dirs = files.filter((file) => {
    return fs.lstatSync(path.join(dir, file)).isFile() === false
  })
  dirs = dirs.map((f) => dir + '/' + f)
  return dirs
}
module.exports = getFolders
