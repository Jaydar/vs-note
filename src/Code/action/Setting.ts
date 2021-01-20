import * as vscode from 'vscode';

export default class Settings {

    constructor(context: vscode.ExtensionContext) {
        
    }


    static sync(){
        vscode.window.showInformationMessage('settings.sync');
    }

    static showOptin() {
        vscode.window.showInformationMessage('settings.showOptin');
    }
}