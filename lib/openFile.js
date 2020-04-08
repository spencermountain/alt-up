const vscode = require('vscode')

const openFile = function (file) {
  // let oldDoc = vscode.window.activeTextEditor.document

  console.log('opening file', file)
  return vscode.workspace.openTextDocument(file).then((newDoc) => {
    return vscode.window.showTextDocument(newDoc, { preview: false })
  })
  // .then(() => {
  //   console.log('closing old doc')
  //   return vscode.window
  //     .showTextDocument(oldDoc, { preview: true, preserveFocus: false })
  //     .then(() => {
  //       return vscode.commands.executeCommand(
  //         'workbench.action.closeActiveEditor'
  //       )
  //     })
  // })

  // vscode.window.showTextDocument(document, { preview: false })

  // vscode.commands.executeCommand('workbench.action.closeActiveEditor')
  // return vscode.workspace.openTextDocument(file).then((document) => {
  //   vscode.window.showTextDocument(document, { preview: false })
  // })
}
module.exports = openFile
