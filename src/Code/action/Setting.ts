import * as vscode from 'vscode';

export default class Settings {

    constructor(context: vscode.ExtensionContext) {
        
    }

    static showOptin() {
        vscode.window.showInformationMessage('settings.showOptin');
    }
}