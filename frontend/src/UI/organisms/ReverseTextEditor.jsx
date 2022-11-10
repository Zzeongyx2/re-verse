// // test for react quill
// import React, { useState } from "react";
// import ReactQuill, { Quill } from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import ImageResize from "quill-image-resize";
// Quill.register("modules/ImageResize", ImageResize);

// function ReverseTextEditor() {
//   const imageHandler = () => {
//     const input = document.createElement("input");
//     input.setAttribute("type", "file");
//     input.setAttribute("accept", "image/*");
//     input.click();

//     input.onchange = async () => {
//       if (input.files) {
//         var file = input.files[0];
//         var formData = new FormData();

//         formData.append("image", file);
//         var fileName = file.name;
//         console.log(formData);
//       }
//     };
//   };
//   const modules = {
//     /* 툴바에서 사용하고 싶은 옵션들을 추가 */
//     toolbar: [
//       //[{ 'font': [] }],
//       [{ header: [1, 2, false] }],
//       ["bold", "italic", "underline", "strike", "blockquote"],
//       [
//         { list: "ordered" },
//         { list: "bullet" },
//         { indent: "-1" },
//         { indent: "+1" },
//       ],
//       ["link", "image"],
//       [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
//       ["clean"],
//     ],
//     ImageResize: {
//       parchment: Quill.import("parchment"),
//     },
//     handlers: {
//       image: imageHandler,
//     },
//   };

//   const formats = [
//     "header",
//     "font",
//     "size",
//     "bold",
//     "italic",
//     "underline",
//     "list",
//     "bullet",
//     "align",
//     "color",
//     "background",
//     "image",
//   ];

//   const [text, setText] = useState("");
//   const handleText = (value) => {
//     console.log(value);
//     setText(value);
//   };

//   return (
//     <div className="bg-white">
//       <ReactQuill
//         style={{ height: "600px" }}
//         theme="snow"
//         modules={modules}
//         formats={formats}
//         value={text}
//         onChange={handleText}
//       />
//     </div>
//   );
// }

// export default ReverseTextEditor;
