import Editor from "@draft-js-plugins/editor";
import createEmojiPlugin from "@draft-js-plugins/emoji";
import { EditorState } from "draft-js";
import React, { useState } from "react";

import "@draft-js-plugins/emoji/lib/plugin.css";
import "draft-js/dist/Draft.css";

const emojiPlugin = createEmojiPlugin({
  useNativeArt: true,
});

const initialState = EditorState.createEmpty();

export function MyEditor() {
  const [editorState, setEditorState] = useState(initialState);
  const { EmojiSuggestions } = emojiPlugin;
  const editor = React.useRef(null);

  return (
    <div>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        plugins={[emojiPlugin]}
        ref={editor}
      />
      <EmojiSuggestions />
    </div>
  );
}
