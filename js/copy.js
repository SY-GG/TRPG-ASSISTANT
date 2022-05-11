const copyCommandResult = document.querySelector('textarea[name="resultPaste"]');
copyCommandResult.addEventListener('dblclick', copyResult);

function copyResult() {
  const text = document.querySelector('textarea[name="resultPaste"]');
  text.select();
  document.execCommand('copy');
}
