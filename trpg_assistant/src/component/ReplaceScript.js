import React from 'react';
import '../css/index.css';
import '../css/cssReset.css';

const TrimSentence = () => {
  return (
    <>
      <fieldset id="fieldset-replace">
        <legend>공백 제거/변환</legend>
        <label>
          구분자: <input name="delimeter" value="." placeholder="구분자를 입력해주세요" />
        </label>
        <details>
          <summary>단어 바꾸기</summary>
          <input type="text" name="wordBeforeReplace" />
          ➔
          <input type="text" name="wordAfterReplace" />
          <button type="button" name="replaceWord">
            바꾸기
          </button>
        </details>
        <section>
          <textarea class="scriptToChange" name="scriptToChange" placeholder="바꿀 내용을 이곳에 입력해주세요." />
          <div>
            <button type="submit">❯</button>
            <button type="button" name="scriptConvertBtn">
              ❮
            </button>
          </div>
          <textarea class="scriptResult" name="scriptResult" placeholder="공백 제거 결과는 여기에 보입니다." />
        </section>
      </fieldset>
    </>
  );
};

export default TrimSentence;
