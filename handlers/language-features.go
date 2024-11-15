package handlers

import (
	"github.com/tliron/glsp"
	protocol "github.com/tliron/glsp/protocol_3_16"
	"github.com/x0y14/emoji-lsp/mappers"
)

func TextDocumentCompletion(context *glsp.Context, params *protocol.CompletionParams) (any, error) {
	var completionItems []protocol.CompletionItem

	for word, emoji := range mappers.EmojiMapper {
		emojiCopy := emoji
		completionItems = append(completionItems, protocol.CompletionItem{
			Label:      word,
			InsertText: &emojiCopy,
		})
	}

	return completionItems, nil
}
