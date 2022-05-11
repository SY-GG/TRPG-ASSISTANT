const scriptForm = document.querySelector('#scriptForm');
scriptForm.addEventListener('submit', submitScript);

function submitScript(event) {
  event.preventDefault();

  resetResultDiv();

  const scriptToChange = document.querySelector('textarea[name="scriptToChange"]').value;
  let trimmedScript = trimScript(scriptToChange);

  makeScriptResult(trimmedScript);
}

function trimScript(scriptToChange) {
  let result = scriptToChange.replaceAll(/[\n]{1,}}|[\s]{2,}/g, ''); //공백 제거

  const collectDelimeter = () => {
    const delimeterValue = document.querySelector('input[name=delimeter]').value;
    return delimeterValue;
  };
  const delimeterList = collectDelimeter();
  const delimitersRegex = new RegExp(`[^${delimeterList}]{1,}[${delimeterList}]{1,}`, 'g');
  result = result.match(delimitersRegex) ?? [result];
  return result;
}

function makeScriptResult(trimmedScript) {
  const commandWord = document.querySelector('.command').value;

  commandAddedScript = trimmedScript.map((sentence) => {
    const copyText = `${commandWord} ${sentence.trim()}`;
    makeResultDiv(copyText);
    return copyText;
  });

  document.querySelector('textarea[name="scriptResult"]').value = trimmedScript.join(' ');
  document.querySelector('textarea[name="resultPaste"]').value = commandAddedScript.join('\n');
}

function resetResultDiv() {
  const resultDiv = document.querySelector('#fieldset-result .resultDiv div');
  resultDiv.remove();

  const resultField = document.querySelector('#fieldset-result .resultDiv');
  const newDiv = document.createElement('div');
  resultField.appendChild(newDiv);
}

//임의 추가 버튼
const addOptionBtn = document.querySelector('button[name="addOptionBtn"]');
addOptionBtn.addEventListener('click', () => {
  makeResultDiv('');
});

function makeResultDiv(textValue) {
  const resultDiv = document.querySelector('#fieldset-result .resultDiv div');
  const newResultInput = makeArticle(textValue);
  resultDiv.appendChild(newResultInput);
}

// article 태그
//   ㄴinput (textValue)
//   ㄴbutton (복사 func.)
function makeArticle(textValue) {
  const newArticle = document.createElement('article');

  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.className = 'splited-script';
  newInput.value = textValue;

  const newPasteBtn = document.createElement('button');
  newPasteBtn.type = 'button';
  newPasteBtn.className = 'copyBtn';
  newPasteBtn.textContent = '복사';
  newPasteBtn.addEventListener('click', copyPreviousScript);

  newArticle.appendChild(newInput);
  newArticle.appendChild(newPasteBtn);

  return newArticle;
}

function copyPreviousScript(event) {
  const text = event.target.previousElementSibling;
  text.select();
  document.execCommand('copy');
}
