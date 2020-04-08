const vscode = require('vscode')
const altDown = require('./src/altDown')
const altUp = require('./src/altUp')
const altOver = require('./src/altOver')

function activate(context) {
  let up = vscode.commands.registerCommand('extension.alt-up', altUp)
  let down = vscode.commands.registerCommand('extension.alt-down', altDown)
  let over = vscode.commands.registerCommand('extension.alt-over', altOver)
  context.subscriptions.push(up)
  context.subscriptions.push(down)
  context.subscriptions.push(over)
}
exports.activate = activate

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
