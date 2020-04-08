const vscode = require('vscode')
const path = require('path')
const openFile = require('./openFile')

const getLabel = function (abs) {
  let label = path.basename(abs)
  if (label.match(/^index\./)) {
    let dir = path.dirname(abs)
    if (dir === '.') {
      return label
    }
    return path.basename(dir) + '/'
  }
  return label
}

const dropDown = function (foundFiles, ourFile) {
  if (foundFiles.length === 0) {
    // show 'no files found'
    vscode.window
      .showQuickPick([
        {
          label: 'No links found',
        },
      ])
      .then(() => {})
    return
  }
  if (foundFiles.length === 1) {
    openFile(foundFiles[0])
    return
  }
  let showArr = foundFiles.map((abs, i) => {
    // let rel = path.relative(ourFile, abs)
    return {
      id: i,
      // description: rel,
      label: getLabel(abs),
      abs: abs,
    }
  })
  vscode.window.showQuickPick(showArr).then((item) => {
    vscode.workspace.openTextDocument(item.abs).then((document) => {
      vscode.window.showTextDocument(document, { preview: false })
    })
  })
}
module.exports = dropDown
