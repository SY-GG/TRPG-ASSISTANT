import React, { useState } from 'react';
import '../css/index.css';
import '../css/cssReset.css';

const TrimSentence = () => {
  // 스크립트 수정
  const [script, setScript] = useState('');

  const onChangeScript = (e) => {
    setScript(e.target.value);
  };

  const submitScript = (e) => {
    e.preventDefault();
    trimScript(script);
  };

  // 스크립트 정리
  function trimScript(scriptToChange) {
    let result = scriptToChange.replaceAll(/[\n]{1,}}|[\s]{2,}/g, ''); //공백 제거
    setScript(result);
  }

  // 구분자
  const [delimeter, setDelimeter] = useState('.');

  const onChangeDelimeter = (e) => {
    setDelimeter(e.target.value);
  };

  return (
    <form onSubmit={submitScript}>
      <fieldset id="fieldset-replace">
        <legend>공백 제거/변환</legend>
        <label>
          구분자:{' '}
          <input name="delimeter" value={delimeter} placeholder="구분자를 입력해주세요" onChange={onChangeDelimeter} />
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
          <textarea
            className="scriptToChange"
            name="scriptToChange"
            placeholder="바꿀 내용을 이곳에 입력해주세요."
            onChange={onChangeScript}
            value={script}
          />
          <div>
            <input type="submit" value="❯"></input>
            {/* <input type="button" name="scriptConvertBtn" value="❮"></input> */}
          </div>
          {/* <textarea
            className="scriptResult"
            name="scriptResult"
            placeholder="공백 제거 결과는 여기에 보입니다."
            value={script}
            ref={resultDiv}
          /> */}
        </section>
      </fieldset>
    </form>
  );
};

export default TrimSentence;
