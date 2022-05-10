const scriptConvertBtn = document.querySelector('button[name="scriptConvertBtn"]');
scriptConvertBtn.addEventListener('click', convertResult);

function convertResult() {
  document.querySelector('textarea[name="scriptToChange"]').value = document.querySelector('textarea[name="scriptResult"]').value;
}

// 우측 결과를 왼쪽으로