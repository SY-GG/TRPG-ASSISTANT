const scriptForm = document.querySelector('#scriptForm');
const textToChange = document.querySelector('textarea[name="textToChange"]');
scriptForm.addEventListener('submit', onScriptSubmit);

function onScriptSubmit(event) {
  event.preventDefault();
  let result = trimScript(textToChange.value);
  console.log(result)
}

//TEXT 다듬고 자르기:
function trimScript(scriptToChange) {
  let result = scriptToChange.replaceAll(/[\n]{1,}/g, '');
  result = result.replaceAll(/([.]{2,})/g, '…');
  result = result.split(/(?<=[!?.])/);
  return result;
}









