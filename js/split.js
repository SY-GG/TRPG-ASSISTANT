const scriptForm = document.querySelector('#scriptForm');
scriptForm.addEventListener('submit', submitScript);

function submitScript(event) {
  event.preventDefault();

  const scriptToChangeEl = document.querySelector('textarea[name="scriptToChange"]');
  const scriptToChangeValue = scriptToChangeEl.value;
  let trimedScript = trimScript(scriptToChangeValue);
  makeScriptResult(trimedScript);
}

function trimScript(scriptToChange) {
  let result = scriptToChange.replaceAll(/[\n]{1,}/g, '');
  result = result.replaceAll(/([.]{2,})/g, '…');
  result = result.split(/(?<=[!?.])/);
  return result;
}

function makeScriptResult(trimedScript) {
  const commandWord = document.querySelector('.command').value;
  trimedScript.forEach((element) => {
    const content = element.trim();
    const copyText = `${commandWord} ${content}`;
    makeResultDiv(copyText);
  });
}

//임의 추가 버튼
const addOptionBtn = document.querySelector('button[name="addOptionBtn"]');
addOptionBtn.addEventListener('click', () => {
  makeResultDiv('');
});
console.log(addOptionBtn);

function makeResultDiv(textValue) {
  const resultDiv = document.querySelector('.fieldset-result div');
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

  newArticle.appendChild(newInput);
  newArticle.appendChild(newPasteBtn);

  return newArticle;
}