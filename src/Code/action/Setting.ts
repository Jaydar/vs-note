import { settings } from 'cluster';
import * as vs from 'vscode';

interface iSettingsItem extends vs.QuickPickItem{
    event():void;
}

export default class Settings {


    static context:vs.ExtensionContext

    static init(context: vs.ExtensionContext){
        Settings.context = context;
    }


    static sync() {
        vs.window.showInformationMessage('settings.sync');
    }

    static async showOptin() {
        
        const items: iSettingsItem[] = [
            {
                label: 'Sign in',
                description:'Sign in to GitHub',
                event:this.signIn
            },
            {
                label: 'Sign up',
                description:'Create your account',
                event:this.signUp
            },
        ]
        const quickPick = vs.window.createQuickPick();
        quickPick.items = items;
        quickPick.onDidChangeSelection((selection) => {
           let option = selection[0] as iSettingsItem;
           option.event()
        });
        quickPick.onDidHide(() => {
            quickPick.dispose()
        });
        quickPick.show();
    }

    static async signIn(){
        Settings.context.globalState.update('user',{
            name:"name",
            pass:"pass"
        })
    }

    static async signOut(){
        console.log('signOut')
    }

    static async signUp(){

    }
}

