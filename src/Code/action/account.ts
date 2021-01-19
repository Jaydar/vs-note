import * as vscode from 'vscode';

export default class Account {


    constructor(context: vscode.ExtensionContext) {
    }   

    static login() {
        vscode.window.showInformationMessage('account.login');
    }

    static logout() {
        vscode.window.showInformationMessage('account.logout');
    }

    static sync() {
        vscode.window.showInformationMessage('account.sync');
    }


}