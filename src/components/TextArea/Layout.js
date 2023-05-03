import React from "react";
import "styles/cssReset.css";
import "styles/index.css";

function TextArea() {
  return (
    <section>
      <form autoComplete="off" id="scriptForm">
        <fieldset id="fieldset-command">
          <legend>머릿말(명령어)</legend>
          <input type="text" className="command" value="/desc" placeholder="앞에 붙일 명령어" />
        </fieldset>
        <fieldset id="fieldset-replace">
          <legend>공백 제거/변환</legend>
          <label>
            구분자: <input name="delimeter" className="delimeter" value="." placeholder="구분자를 입력해주세요" />
          </label>
          <details className="replaceWord-wrap">
            <summary>단어 바꾸기</summary>
            <input type="text" name="wordBeforeReplace" />
            ➔
            <input type="text" name="wordAfterReplace" />
            <button type="button" name="replaceWord">
              바꾸기
            </button>
          </details>
          <section className="replace-wrap">
            <textarea
              className="scriptToChange"
              name="scriptToChange"
              placeholder="바꿀 내용을 이곳에 입력해주세요."
            ></textarea>
            <div>
              <button type="button">❯</button>
              <button type="button" name="scriptConvertBtn">❮</button>
            </div>
            <textarea
              className="scriptResult"
              name="scriptResult"
              placeholder="공백 제거 결과는 여기에 보입니다."
            ></textarea>
          </section>
        </fieldset>
        <fieldset id="fieldset-result">
          <legend>결과</legend>
          <textarea
            className="resultPaste"
            name="resultPaste"
            placeholder="전체 결과는 여기에 보입니다. 더블 클릭하면 복사가 됩니다!"
          ></textarea>
          <div className="resultDiv">
            <div></div>
          </div>
          <button type="button" name="addOptionBtn">
            임의 추가{" "}
          </button>
        </fieldset>
      </form>
    </section>
  );
}

export default TextArea;
