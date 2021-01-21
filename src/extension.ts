
import * as vscode from 'vscode';
import { SettingsTDO } from './Code/view/main';
import Account from './Code/action/Account';
import Settings from './Code/action/Setting';


export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.commands.registerCommand('vs-note.dico', () => {
			vscode.window.showInformationMessage('Hello World from VS Note!');
		})
	);
	vscode.commands.registerCommand('account.login', () => Account.login()),
	vscode.commands.registerCommand('account.logout', () => Account.login()),
	vscode.commands.registerCommand('settings.showOption',()=> Settings.showOptin()),
	vscode.commands.registerCommand('settings.sync',()=> Settings.sync())
}

// this method is called when your extension is deactivated
export function deactivate() { }
