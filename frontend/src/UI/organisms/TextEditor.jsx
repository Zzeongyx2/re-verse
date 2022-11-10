import React, { Component, useState } from "react";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../styles/draft.css";
import { convertToHTML, convertFromHTML } from "draft-convert";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

// import { SketchPicker } from "react-color";
// import ColorPic from "../molecules/ColorPicker";

// export const EditorComponent = () => (
//   // <Editor />
//   <Editor toolbarClassName="" />
// );

function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://");
  });
}

export const EditorComponent = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const [exportContent, setExportContent] = useState();
  const exportHTML = () => {
    setExportContent({
      convertedContent: convertToHTML(editorState.getCurrentContent()),
    });
  };

  console.log(exportContent);

  // const [updateContent, setUpdateContent] = useState();
  // const updateHTML = (e) => {
  //   e.preventDefault();
  //   setUpdateContent({ convertedContent: e.target.value });
  // };



  return (
    <div>
      <Editor
        // 에디터 & 툴바 모두 적용되는 클래스
        wrapperClassName="wrapper"
        // wrapperClassName="wrapper-class"
        // 에디터 주변에 적용되는 클래스
        editorClassName="editor"
        // 툴바 주위에 적용되는 클래스
        toolbarClassName="toolbar"
        // 툴바 설정
        toolbar={{
          // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
          // list: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: {
            uploadCallback: uploadImageCallBack,
            alt: { present: true, mandatory: true },
          },
          textAlign: { className: "textalign" },
          // colorPicker: { component: ColorPic },
        }}
        // placeholder="내용을 작성해주세요"
        localization={{
          locale: "ko",
        }}
        // 초기값 설정
        editorState={editorState}
        // 에디터의 값이 변경될 때마다 호출하는 함수
        onEditorStateChange={onEditorStateChange}
      />
      <button onClick={exportHTML}>convert to HTML</button>
      {/* importHTML */}
      <input type="text" />
    </div>
  );
};
