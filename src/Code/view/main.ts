import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class SettingsTDO implements vscode.TreeDataProvider<Dependency> {
	
	onDidChangeTreeData?: vscode.Event<void | Dependency | null | undefined> | undefined;
	getTreeItem(element: Dependency): vscode.TreeItem | Thenable<vscode.TreeItem> {
		throw new Error('Method not implemented.');
	}
	getChildren(element?: Dependency): vscode.ProviderResult<Dependency[]> {
		throw new Error('Method not implemented.');
	}

	
}

export class Dependency extends vscode.TreeItem {

	constructor(
		public readonly label: string,
		private readonly version: string,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly command?: vscode.Command
	) {
		super(label, collapsibleState);

		this.tooltip = `${this.label}-${this.version}`;
		this.description = this.version;
	}

	iconPath = {
		light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
	};

	contextValue = 'dependency';
}
