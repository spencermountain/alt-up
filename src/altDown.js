const vscode = require('vscode')
const path = require('path')
const fs = require('fs')
const dropDown = require('../lib/dropDown')

const getFolders = function (dir) {
  let files = fs.readdirSync(dir)
  let dirs = files.filter((file) => {
    return fs.lstatSync(path.join(dir, file)).isFile() === false
  })
  dirs = dirs.map((f) => dir + '/' + f)
  return dirs
}

// alt-down
let altDown = function () {
  let ourFile = vscode.window.activeTextEditor.document.fileName
  let ext = path.extname(ourFile) || '.js'
  let dir = path.dirname(ourFile)

  let folders = getFolders(dir)
  let files = folders.map((f) => path.join(dir, f, '/index' + ext))
  files = files.filter((f) => fs.existsSync(f))
  if (folders.length === 0) {
    vscode.window.setStatusBarMessage(`Reached bottom.`, 3000)
    return
  }
  dropDown(files, ourFile)
}

module.exports = altDown
