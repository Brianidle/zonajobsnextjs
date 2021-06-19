import { useRef, useState, useEffect } from "react";

const CKEditorCustom = ({ name, onChange }) => {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("ckeditor5-custom-build/build/ckeditor"),
    };
    setEditorLoaded(true);
  }, []);

  const [data, setData] = useState("");

  const editorConfiguration = {
    toolbar: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "bulletedList",
      "numberedList",
      "alignment",
      "|",
      "undo",
      "redo",
    ],
  };

  return (
    <>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          config={editorConfiguration}
          data={data}
          name={name}
          onChange={(event, editor) => {
            const data = editor.getData();
            setData(data);
            onChange({ name, data });
          }}
        />
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default CKEditorCustom;
