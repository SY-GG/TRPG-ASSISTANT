const scriptForm = document.querySelector('#scriptForm');
const scriptToChange = document.querySelector('textarea[name="scriptToChange"]');
scriptForm.addEventListener('submit', submitScript);

// 확인 버튼 누르면
function submitScript(event) {
  event.preventDefault();
  let result = trimScript(scriptToChange.value);
  console.log(result)
}

//TEXT 다듬고 자르기:
function trimScript(scriptToChange) {
  let result = scriptToChange.replaceAll(/[\n]{1,}/g, '');
  result = result.replaceAll(/([.]{2,})/g, '…');
  result = result.split(/(?<=[!?.])/);
  return result;
}