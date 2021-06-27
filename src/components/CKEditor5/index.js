import { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const CKEditorDiv = styled.div`
  position: relative;
  text-align: right;
  ${props => props.maxNumCharactersSurpassed ? "border: 1px solid red" : ""};
`;

const NumberOfWords = styled.label`
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-size: 14px;
`;

const ErrorMessage = styled.label`
  color: #ff4040;
  font-size: 13px;
`;

const CKEditorCustom = ({ name, onChange, maxNumberOfCharacters, setNumberOfCharactersEditor }) => {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [numberOfWords, setNumberOfWords] = useState(0);
  const [maxNumberOfCharactersSurpassed, setMaxNumberOfCharactersSurpassed] = useState(false);
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
    ], wordCount: {
      onUpdate: stats => {
        let numberCharacters = stats.characters;
        setNumberOfWords(numberCharacters);
        setNumberOfCharactersEditor(numberCharacters);
        setMaxNumberOfCharactersSurpassed(numberCharacters > maxNumberOfCharacters);
      }
    }
  };

  return (
    <>
      <CKEditorDiv maxNumCharactersSurpassed={maxNumberOfCharactersSurpassed}>
        {editorLoaded ? (
          <>
            <CKEditor
              editor={ClassicEditor}
              config={editorConfiguration}
              data={data}
              onChange={(event, editor) => {
                const data = editor.getData();
                setData(data);
                onChange({ name, data });
              }}
            />
            <NumberOfWords>{numberOfWords}/{maxNumberOfCharacters}</NumberOfWords>
          </>
        ) : (
          <></>
        )}
      </CKEditorDiv>
      {maxNumberOfCharactersSurpassed && <ErrorMessage>Superaste el maximo de caracteres permitidos</ErrorMessage>}
    </>
  );
};

export default CKEditorCustom;
