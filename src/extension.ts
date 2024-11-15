import * as path from "path";
import { Executable, LanguageClient, LanguageClientOptions, StreamInfo, ServerOptions } from "vscode-languageclient/node";
import * as vscode from "vscode";


// 参考: https://qiita.com/www-tacos/items/23e63c4572c9f52b9825
export function activate(context: vscode.ExtensionContext) {
	const serverPath: string = context.asAbsolutePath(path.join("server", "emoji-lsp"));
	const serverOptions: ServerOptions = { command: serverPath, args: [] };

	const clientOptions: LanguageClientOptions = {
		documentSelector: [
			{ scheme: "file", language: "plaintext" },
			{ scheme: "untitled", language: "plaintext" },
		]
	};

	let client = new LanguageClient(
		"Emoji LS",
		"DESC",
		serverOptions,
		clientOptions,
	)
	client.start().then(r => console.log(r));
}

// This method is called when your extension is deactivated
export function deactivate() {}