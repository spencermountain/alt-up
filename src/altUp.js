const vscode = require('vscode')
const path = require('path')
const getFiles = require('../lib/getFiles')
const openFile = require('../lib/openFile')
const dropDown = require('../lib/dropDown')

const tooDeep = function (root, dir) {
  return path.relative(root, dir).startsWith('..')
}

// ensure we don't go past the root directory
const tooFar = function (parent) {
  let roots = vscode.workspace.workspaceFolders.map(
    (folder) => folder.uri.fsPath
  )
  let found = roots.find((root) => tooDeep(root, parent))
  return Boolean(found)
}

// ====alt-up====
// looks for an '../index' with the same extension
// if not found, looks for files in root with same extension
// (does not go above workspace root)
let altUp = function () {
  let ourFile = vscode.window.activeTextEditor.document.fileName
  let dir = path.dirname(ourFile)
  let parent = path.dirname(dir)
  if (tooFar(parent)) {
    vscode.window.setStatusBarMessage(`Reached top.`, 3000)
    return
  }
  // just one file?
  let files = getFiles(parent)
  console.log('looking in ' + parent)
  if (files.length === 1) {
    openFile(files[0])
    return
  }
  if (files.length === 0) {
    vscode.window.setStatusBarMessage(`No parent file.`, 3000)
    return
  }
  // try just indexes
  let indexes = files.filter((f) => path.parse(f).name === 'index')
  if (indexes.length === 1) {
    openFile(indexes[0])
    return
  }
  // try just same extension
  let ext = path.extname(ourFile) || '.js'
  let byExt = files.filter((f) => path.parse(f).ext === ext)
  if (byExt.length === 1) {
    openFile(byExt[0])
    return
  }
  dropDown(files)
}
module.exports = altUp
