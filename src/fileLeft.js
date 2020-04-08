const vscode = require('vscode')
const path = require('path')
const openFile = require('../lib/openFile')
const getFiles = require('../lib/getFiles')

let fileLeft = function () {
  let ourFile = vscode.window.activeTextEditor.document.fileName
  let ext = path.extname(ourFile) || '.js'
  let dir = path.dirname(ourFile)

  let files = getFiles(dir)
  if (files.length === 0) {
    vscode.window.setStatusBarMessage(`No sibling ${ext} files`, 3000)
    return
  }
  let index = files.findIndex((f) => f === ourFile)
  if (index === -1) {
    vscode.window.setStatusBarMessage(`No sibling files`, 3000)
    return
  }
  if (files[index - 1]) {
    openFile(files[index - 1])
  } else {
    vscode.window.setStatusBarMessage(`Reached end`, 3000)
    return
  }
}

module.exports = fileLeft
