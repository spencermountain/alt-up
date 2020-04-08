const vscode = require('vscode')
const path = require('path')
const dropDown = require('../lib/dropDown')
const getFiles = require('../lib/getFiles')

// alt-over
let altOver = function () {
  let ourFile = vscode.window.activeTextEditor.document.fileName
  let ext = path.extname(ourFile) || '.js'
  let dir = path.dirname(ourFile)

  let files = getFiles(dir)
  files = files.filter((f) => {
    return f !== ourFile && path.extname(f) === ext
  })
  if (files.length === 0) {
    vscode.window.setStatusBarMessage(`No sibling ${ext} files`, 3000)
    return
  }
  dropDown(files, ourFile)
}

module.exports = altOver
