import React, { Component, useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// export const EditorComponent = () => (
//   // <Editor />
//   <Editor toolbarClassName="" />
// );

export const EditorComponent = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <Editor
      // 에디터 & 툴바 모두 적용되는 클래스
      wrapperClassName="wrapper-class"
      // 에디터 주변에 적용되는 클래스
      editorClassName="editor"
      // 툴바 주위에 적용되는 클래스
      toolbarClassName="toolbar-class"
      // 툴바 설정
      toolbar={{
        // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
        list: { inDropdown: true },
        // textAlign: { inDropdown: true },
      }}
      placeholder="내용을 작성해주세요"
      // 한국어 설정... 이거 디폴트 값 설정하는건가? 잘 모르겠음
      localization={{
        locale: "ko",
      }}
      // 초기값 설정
      editorState={editorState}
      // 에디터의 값이 변경될 때마다 호출하는 함수
      onEditorStateChange={onEditorStateChange}
    />
  );
};
