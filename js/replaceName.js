const replaceWordBtn = document.querySelector('button[name="replaceWord"]');
replaceWordBtn.addEventListener('click', replaceWordFuc);

function replaceWordFuc() {
  result = replaceName();

  let scriptResult = document.querySelector('textarea[name="scriptResult"]');
  scriptResult.value = result;
}

function replaceWord() {
  const wordBeforeReplace = document.querySelector('input[name="wordBeforeReplace"]').value;
  const wordAfterReplace = document.querySelector('input[name="wordAfterReplace"]').value;

  let scriptToChange = document.querySelector('textarea[name="scriptToChange"]').value;

  let regexAll = new RegExp(wordBeforeReplace, 'g');
  result = scriptToChange.replace(regexAll, wordAfterReplace);

  let scriptResult = document.querySelector('textarea[name="scriptResult"]');
  scriptResult.value = result;
}

function replaceName() {
  const josa = [
    ['가', '이'],
    ['를', '을'],
    ['는', '은'],
    ['와', '과'],
    ['', ''],
  ];

  const wordBeforeReplace = document.querySelector('input[name="wordBeforeReplace"]').value;
  const wordAfterReplace = document.querySelector('input[name="wordAfterReplace"]').value;

  let scriptToChange = document.querySelector('textarea[name="scriptToChange"]').value;

  for (index in josa) {
    let makeRegExp = (word) => {
      return `${word}${josa[index][+isEndWithConsonant(word)]}`;
    };

    const regexBefore = makeRegExp(wordBeforeReplace);
    const regexAfter = makeRegExp(wordAfterReplace);

    console.log(regexBefore, regexAfter);
    scriptToChange = scriptToChange.replaceAll(regexBefore, regexAfter);
  }

  return scriptToChange;
}

// 받침 없음: false(0), 영어/받침 있음: true(1);
function isEndWithConsonant(word) {
  const finalChrCode = word.charCodeAt(word.length - 1);
  const finalConsonantCode = (finalChrCode - 44032) % 28;
  return !!finalConsonantCode;
}
