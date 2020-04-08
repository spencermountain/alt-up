const vscode = require('vscode')
const path = require('path')
const fs = require('fs')
const dropDown = require('../lib/dropDown')
const getFiles = require('../lib/getFiles')
const getFolders = require('../lib/getFolders')

const ignore = {
  node_modules: true,
  '.git': true,
}

// alt-down
let altDown = function () {
  let ourFile = vscode.window.activeTextEditor.document.fileName
  let ext = path.extname(ourFile) || '.js'
  let dir = path.dirname(ourFile)

  let folders = getFolders(dir)
  // remove crud folders
  folders = folders.filter((dir) => {
    return dir.startsWith('.') === false && ignore.hasOwnProperty(dir) === false
  })
  if (folders.length === 0) {
    vscode.window.setStatusBarMessage(`Reached bottom.`, 3000)
    return
  }
  // find most-appropriate file for each folder
  let found = folders.map((dir) => {
    let files = getFiles(dir)
    // let name = path.basename(path.dirname(dir))
    let file = null
    // accept only file
    if (!file && files.length === 1) {
      file = files[0]
    }
    // find index file
    file = file || files.find((f) => path.parse(f).name === 'index')
    // find first matching extension
    file = file || files.find((f) => path.parse(f).ext === ext)

    return file
  })
  found = found.filter((f) => f)

  console.log(found)
  dropDown(found, ourFile)
}

module.exports = altDown
