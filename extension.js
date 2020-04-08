const vscode = require('vscode')
const altDown = require('./src/altDown')
const altUp = require('./src/altUp')
const fileRight = require('./src/fileRight')
const fileLeft = require('./src/fileLeft')

function activate(context) {
  let up = vscode.commands.registerCommand('extension.alt-up', altUp)
  context.subscriptions.push(up)

  let down = vscode.commands.registerCommand('extension.alt-down', altDown)
  context.subscriptions.push(down)

  let right = vscode.commands.registerCommand(
    'extension.alt-file-right',
    fileRight
  )
  context.subscriptions.push(right)

  let left = vscode.commands.registerCommand(
    'extension.alt-file-left',
    fileLeft
  )
  context.subscriptions.push(left)
}
exports.activate = activate

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
