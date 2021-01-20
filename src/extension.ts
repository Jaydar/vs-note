
import * as vscode from 'vscode';
import { SettingsTDO } from './Code/view/main';
import Account from './Code/action/account';
import Settings from './Code/action/Setting';


export function activate(context: vscode.ExtensionContext) {


	
	// const settingsTDP = new SettingsTDO();

	context.subscriptions.push(
		vscode.commands.registerCommand('vs-note.dico', () => {
			vscode.window.showInformationMessage('Hello World from VS Note!');
		}),
		vscode.commands.registerCommand('account.login', () => Account.login()),
		vscode.commands.registerCommand('account.logout', () => Account.login()),
		vscode.commands.registerCommand('account.sync',()=> Settings.showOptin())
	);
	
	
	
	
	// let account = new Account(context);
	// vscode.commands.registerCommand('account.login', account.login);
	// vscode.commands.registerCommand('account.logout', account.logout);
	// vscode.commands.registerCommand('account.sync', account.sync);


	// let settings = new Settings(context);
	// vscode.commands.registerCommand('settings.showOptin', settings.showOptin);



}

// this method is called when your extension is deactivated
export function deactivate() { }
