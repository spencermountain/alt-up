const vscode = require('vscode')

const openFile = function (file) {
  console.log('closing doc')

  let oldDoc = vscode.window.activeTextEditor.document
  return vscode.window
    .showTextDocument(oldDoc, { preview: true, preserveFocus: false })
    .then(() => {
      return vscode.commands.executeCommand(
        'workbench.action.closeActiveEditor'
      )
    })
    .then(() => {
      console.log('opening file', file)
      return vscode.workspace.openTextDocument(file).then((newDoc) => {
        return vscode.window.showTextDocument(newDoc, { preview: false })
      })
    })

  // vscode.window.showTextDocument(document, { preview: false })

  // vscode.commands.executeCommand('workbench.action.closeActiveEditor')
  // return vscode.workspace.openTextDocument(file).then((document) => {
  //   vscode.window.showTextDocument(document, { preview: false })
  // })
}
module.exports = openFile
