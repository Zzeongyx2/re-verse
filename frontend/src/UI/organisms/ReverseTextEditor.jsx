// test for react quill
import React, { useMemo, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize";
import axios from "axios";
import { fileApiInstance } from "../../api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createArticle } from "../../modules/reverse";

Quill.register("modules/ImageResize", ImageResize);

function ReverseTextEditor() {
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      console.log(input.files);
      if (input.files) {
        console.log("파일 첨부!");
        console.log(input.files[0]);
        var file = input.files[0];
        var formData = new FormData();
        formData.append("images", file);
        const api = fileApiInstance();
        api
          .post("/archive/image", formData)
          .then((res) => {
            console.log(res);
            const IMG_URL = res.data.urls[0];

            const editor = quillRef.current.getEditor();
            const range = editor.getSelection();
            editor.insertEmbed(range, "image", IMG_URL);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
  };
  const quillRef = useRef();
  const modules = useMemo(() => {
    return {
      toolbar: {
        handlers: { image: imageHandler },
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
                "custom-color",
              ],
            },
            { background: [] },
          ],
          ["link", "image", "video"],
          ["clean"],
        ],
        // handlers: {
        //   image: imageHandler,
        // },
      },
      ImageResize: {
        parchment: Quill.import("parchment"),
      },
    };
  }, []);

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "indent",
    "bullet",
    "align",
    "color",
    "background",
    "link",
    "image",
    "video",
  ];

  const dispatch = useDispatch();
  const reverse = useSelector((state) => state.reverse);
  const [content, setContent] = useState("");

  const [text, setText] = useState("");
  const handleText = (value) => {
    // console.log(value);
    setText(value);
    // saveContent();
  };

  const saveContent = () => {
    dispatch(createArticle({ ...reverse.article, content: text }));
  };

  // 이거.. 왜 돼...? 너 뭐야...??
  useEffect(() => {
    saveContent();
  }, [text]);

  return (
    <div className="bg-white">
      <ReactQuill
        ref={quillRef}
        className="h-[455px]"
        theme="snow"
        modules={modules}
        formats={formats}
        value={text}
        onChange={handleText}
      />
    </div>
  );
}

export default ReverseTextEditor;
