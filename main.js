document.write('<body></body>');

let arr = [];
let isEng = false;
let ShiftIsTrue = false;

const doc = document;
const keyboard = doc.createElement('div');
const textArea = doc.createElement('textarea');
const basicRed = 'rgb(146, 52, 9)';
const pressedRed = 'rgb(211, 14, 14)';

function toHTML(name) {
  doc.body.appendChild(name);
}

if (localStorage.getItem('eng') === 'true') {
  isEng = true;
} else {
  isEng = false;
}

toHTML(textArea);
toHTML(keyboard);

textArea.id = 'textArea';
keyboard.id = 'keyboard';
textArea.setAttribute('readonly', true);
textArea.className = 'textArea';
keyboard.className = 'keyboard';

function CreateButton(Code, Key, Class) {
  const Element = doc.createElement('button');
  const ElementSymbol = doc.createTextNode(`${Key}`);
  toHTML(Element);
  Element.appendChild(ElementSymbol);
  keyboard.appendChild(Element);
  Element.id = Code;
  Element.classList.add(Class);
}


const ArrOfCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
const ArrOfEngKey = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const ArrOfClass = ['BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton',
  'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'Backspace'];


const ArrOfCode2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'];
const ArrOfEngKey2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];
const ArrOfClass2 = ['Tab', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton',
  'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'Backslash'];

const ArrOfCode3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
const ArrOfEngKey3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
const ArrOfClass3 = ['CapsLock', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton',
  'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'Enter'];

const ArrOfCode4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'];
const ArrOfEngKey4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'];
const ArrOfClass4 = ['ShiftLeft', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton', 'BasicButton',
  'BasicButton', 'BasicButton', 'BasicButton', 'ShiftRight'];

const ArrOfCode5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'Delete', 'ControlRight'];
const ArrOfKey5 = ['Ctrl', 'Meta', 'Alt', ' ', 'Alt', 'Del', 'Ctrl'];
const ArrOfClass5 = ['ControlLeft', 'Meta', 'Alt', 'Space', 'Alt', 'BasicButton', 'ControlRight'];

const ArrOfKey1 = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
const ArrOfKey2 = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'];
const ArrOfKey3 = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'];
const ArrOfKey4 = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift'];


const ArrOfKeysRus1 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const ArrOfCapsKeysRus1 = ['Ё', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];

const ArrOfKeysRus2 = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'];
const ArrOfCapsKeysRus2 = ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', '{', '}', '|'];

const ArrOfKeysRus3 = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
const ArrOfCapsKeysRus3 = ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'];

const ArrOfKeysRus4 = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift'];
const ArrOfCapsKeysRus4 = ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '?', 'Shift'];

function DestroyKeyboard() {
  keyboard.innerHTML = '';
}

function CreateKeyboard(ArrOfCodes, ArrOfKeys, ArrOfClasses) {
  const ArrOfCurrentClass = ArrOfClasses || ArrOfClass;
  const ArrOfCurrentCode = ArrOfCodes || ArrOfCode;
  const ArrOfCurrentKey = ArrOfKeys || ArrOfEngKey;
  for (let i = 0; i < ArrOfKeys.length; i += 1) {
    CreateButton(ArrOfCurrentCode[i], ArrOfCurrentKey[i], ArrOfCurrentClass[i]);
  }
}

function CreateRusKeyboard() {
  DestroyKeyboard();
  CreateKeyboard(ArrOfCode, ArrOfKeysRus1, ArrOfClass);
  CreateKeyboard(ArrOfCode2, ArrOfKeysRus2, ArrOfClass2);
  CreateKeyboard(ArrOfCode3, ArrOfKeysRus3, ArrOfClass3);
  CreateKeyboard(ArrOfCode4, ArrOfKeysRus4, ArrOfClass4);
  CreateKeyboard(ArrOfCode5, ArrOfKey5, ArrOfClass5);
  isEng = false;
  localStorage.setItem('eng', 'false');
  ShiftIsTrue = false;
}

function CreateEngKeyboard() {
  DestroyKeyboard();
  CreateKeyboard(ArrOfCode, ArrOfEngKey, ArrOfClass);
  CreateKeyboard(ArrOfCode2, ArrOfEngKey2, ArrOfClass2);
  CreateKeyboard(ArrOfCode3, ArrOfEngKey3, ArrOfClass3);
  CreateKeyboard(ArrOfCode4, ArrOfEngKey4, ArrOfClass4);
  CreateKeyboard(ArrOfCode5, ArrOfKey5, ArrOfClass5);
  isEng = true;
  localStorage.setItem('eng', 'true');
  ShiftIsTrue = false;
}

function CreateRusKeyboardCaps() {
  DestroyKeyboard();
  CreateKeyboard(ArrOfCode, ArrOfCapsKeysRus1, ArrOfClass);
  CreateKeyboard(ArrOfCode2, ArrOfCapsKeysRus2, ArrOfClass2);
  CreateKeyboard(ArrOfCode3, ArrOfCapsKeysRus3, ArrOfClass3);
  CreateKeyboard(ArrOfCode4, ArrOfCapsKeysRus4, ArrOfClass4);
  CreateKeyboard(ArrOfCode5, ArrOfKey5, ArrOfClass5);
  isEng = false;
  localStorage.setItem('eng', 'false');
  ShiftIsTrue = true;
}

function CreateEngKeyboardCaps() {
  DestroyKeyboard();
  CreateKeyboard(ArrOfCode, ArrOfKey1, ArrOfClass);
  CreateKeyboard(ArrOfCode2, ArrOfKey2, ArrOfClass2);
  CreateKeyboard(ArrOfCode3, ArrOfKey3, ArrOfClass3);
  CreateKeyboard(ArrOfCode4, ArrOfKey4, ArrOfClass4);
  CreateKeyboard(ArrOfCode5, ArrOfKey5, ArrOfClass5);
  isEng = true;
  localStorage.setItem('eng', 'true');
  ShiftIsTrue = true;
}

if (isEng) {
  CreateEngKeyboard();
} else {
  CreateRusKeyboard();
}

doc.addEventListener('keydown', (event) => {
  if (event.code === 'CapsLock' && !ShiftIsTrue) {
    if (isEng) {
      CreateEngKeyboardCaps();
      doc.getElementById(`${event.code}`).style.borderRadius = '50%';
    } else {
      CreateRusKeyboardCaps();
      doc.getElementById(`${event.code}`).style.borderRadius = '50%';
    }
  } else if (event.code === 'CapsLock' && ShiftIsTrue) {
    if (isEng) {
      CreateEngKeyboard();
      doc.getElementById(`${event.code}`).style.borderRadius = '50%';
    } else {
      CreateRusKeyboard();
      doc.getElementById(`${event.code}`).style.borderRadius = '50%';
    }
  }
  if (event.ctrlKey && event.altKey && isEng && !ShiftIsTrue) {
    CreateRusKeyboard();
    doc.getElementById(`${event.code}`).style.borderRadius = '50%';
  } else if (event.ctrlKey && event.altKey && !isEng && !ShiftIsTrue) {
    CreateEngKeyboard();
    doc.getElementById(`${event.code}`).style.borderRadius = '50%';
  } else if (event.ctrlKey && event.altKey && !isEng && ShiftIsTrue) {
    CreateEngKeyboardCaps();
    doc.getElementById(`${event.code}`).style.borderRadius = '50%';
  } else if (event.ctrlKey && event.altKey && isEng && ShiftIsTrue) {
    CreateRusKeyboardCaps();
    doc.getElementById(`${event.code}`).style.borderRadius = '50%';
  }
  if (event.key === 'Tab') {
    for (let i = 0; i < 5; i += 1) {
      arr.push(' ');
      textArea.value = arr.join('');
    }
  }
  if (event.key === 'Enter') {
    for (let i = 0; i < 59; i += 1) {
      arr.push(' ');
      textArea.value = arr.join('');
    }
    doc.getElementById(`${event.code}`).style.backgroundColor = pressedRed;
  }
  if (event.key === 'Shift' && isEng) {
    CreateEngKeyboardCaps();
    doc.getElementById(`${event.code}`).style.backgroundColor = pressedRed;
    doc.getElementById(`${event.code}`).style.borderRadius = '50%';
  } else if (event.key === 'Shift' && !isEng) {
    CreateRusKeyboardCaps();
    doc.getElementById(`${event.code}`).style.backgroundColor = pressedRed;
    doc.getElementById(`${event.code}`).style.borderRadius = '50%';
  }
  if (event.key === 'Delete') {
    arr = [];
    textArea.value = arr.join('');
  }
  if (event.code === 'Backspace') {
    arr.pop();
    textArea.value = arr.join('');
  } else if (event.code !== 'Tab' && event.code !== 'ControlLeft' && event.code !== 'CapsLock' && event.code !== 'AltLeft'
      && event.code !== 'ControlRight' && event.code !== 'AltRight' && event.code !== 'Backspace' && event.code !== 'Enter'
      && event.code !== 'ShiftLeft' && event.code !== 'Delete' && event.code !== 'ShiftRight' && doc.getElementById(`${event.code}`) !== null) {
    arr.push(doc.getElementById(`${event.code}`).innerHTML);
    textArea.value = arr.join('');
    doc.getElementById(`${event.code}`).style.backgroundColor = pressedRed;
    doc.getElementById(`${event.code}`).style.borderRadius = '50%';
  } else if (doc.getElementById(`${event.code}`) !== null) {
    doc.getElementById(`${event.code}`).style.backgroundColor = pressedRed;
    doc.getElementById(`${event.code}`).style.borderRadius = '50%';
    event.preventDefault();
  }
  if (doc.getElementById(`${event.code}`) !== null) {
    doc.getElementById(`${event.code}`).classList.add('rotate');
  }
});


doc.addEventListener('keyup', (event) => {
  if (doc.getElementById(`${event.code}`) !== null) {
    doc.getElementById(`${event.code}`).style.backgroundColor = basicRed;
    doc.getElementById(`${event.code}`).style.borderRadius = '15%';
    if (event.key === 'Shift' && isEng) {
      CreateEngKeyboard();
    } else if (event.key === 'Shift' && !isEng) {
      CreateRusKeyboard();
    }
    doc.getElementById(`${event.code}`).classList.remove('rotate');
  }
});

keyboard.addEventListener('mousedown', (e) => {
  const event = e;
  if (event.target.id === 'Tab') {
    for (let i = 0; i < 5; i += 1) {
      arr.push(' ');
      textArea.value = arr.join('');
      event.target.style.backgroundColor = 'rgb(230, 217, 41)';
    }
  } else if (event.target.id === 'Backspace') {
    arr.pop();
    textArea.value = arr.join('');
    event.target.style.backgroundColor = 'rgb(230, 217, 41)';
  } else if (event.target.id === 'CapsLock') {
    if (!ShiftIsTrue) {
      if (isEng) {
        CreateEngKeyboardCaps();
        doc.getElementById('CapsLock').style.backgroundColor = 'rgb(230, 217, 41)';
      } else {
        DestroyKeyboard();
        CreateRusKeyboardCaps();
        doc.getElementById('CapsLock').style.backgroundColor = 'rgb(230, 217, 41)';
      }
    } else if (ShiftIsTrue) {
      if (isEng) {
        CreateEngKeyboard();
        doc.getElementById('CapsLock').style.backgroundColor = 'rgb(230, 217, 41)';
      } else {
        CreateRusKeyboard();
        doc.getElementById('CapsLock').style.backgroundColor = 'rgb(230, 217, 41)';
      }
    }
  } else if (event.target.id === 'keyboard') {
    keyboard.style.backgroundColor = `rgb(${`${Math.random() * 100},${Math.random() * 100},${Math.random() * 100}`})`;
  } else if (event.target.id === 'ControlLeft' || event.target.id === 'ControlRight' || event.target.id === 'AltRight'
        || event.target.id === 'AltLeft') {
    event.target.style.backgroundColor = 'rgb(230, 217, 41)';
  } else if (event.target.id === 'Delete') {
    arr = [];
    textArea.value = arr.join('');
    event.target.style.backgroundColor = 'rgb(230, 217, 41)';
  } else if (event.target.id === 'Enter') {
    for (let i = 0; i < 59; i += 1) {
      arr.push(' ');
      textArea.value = arr.join('');
    }
    event.target.style.backgroundColor = 'rgb(230, 217, 41)';
  } else if (event.target.id === 'ShiftLeft') {
    if (!ShiftIsTrue) {
      if (isEng) {
        CreateEngKeyboardCaps();
        doc.getElementById('ShiftLeft').style.backgroundColor = 'rgb(230, 217, 41)';
      } else {
        CreateRusKeyboardCaps();
        doc.getElementById('ShiftLeft').style.backgroundColor = 'rgb(230, 217, 41)';
      }
    }
  } else if (event.target.id === 'ShiftRight') {
    if (!ShiftIsTrue) {
      if (isEng) {
        CreateEngKeyboardCaps();
        doc.getElementById('ShiftRight').style.backgroundColor = 'rgb(230, 217, 41)';
      } else {
        CreateRusKeyboardCaps();
        doc.getElementById('ShiftRight').style.backgroundColor = 'rgb(230, 217, 41)';
      }
    }
  } else if (event.target.id === 'MetaLeft') {
    event.target.style.backgroundColor = 'rgb(230, 217, 41)';
  } else {
    event.target.style.backgroundColor = 'rgb(230, 217, 41)';
    arr.push(doc.getElementById(`${event.target.id}`).innerHTML);
    textArea.value = arr.join('');
  }
});

keyboard.addEventListener('mouseup', (e) => {
  const event = e;
  if (event.target.id !== 'keyboard') {
    event.target.style.backgroundColor = basicRed;
  }
  if (event.target.id === 'ShiftLeft') {
    if (isEng) {
      CreateEngKeyboard();
    } else {
      CreateRusKeyboard();
    }
  }
  if (event.target.id === 'ShiftRight') {
    if (isEng) {
      CreateEngKeyboard();
    } else {
      CreateRusKeyboard();
    }
  }
});

const tip = doc.createElement('p');
const tipText = doc.createTextNode('Switch language = alt + ctrl / OC windows');
toHTML(tip);
tip.appendChild(tipText);

if (isEng) {
  localStorage.setItem('eng', 'true');
} else {
  localStorage.setItem('eng', 'false');
}

const audioBtn = doc.createElement('button');
const audioImg = doc.createElement('img');

audioImg.src = './assets/volume.svg';
audioImg.alt = 'sound-input';
audioBtn.className = 'audio-button';
audioBtn.appendChild(audioImg);
toHTML(audioBtn);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');


  if (e.results[0].isFinal) {
    const words = transcript.split('');
    if (ShiftIsTrue) {
      words.forEach((elem, index) => {
        words[index] = words[index].toUpperCase();
      });
    } else {
      words.forEach((elem, index) => {
        words[index] = words[index].toLocaleLowerCase();
      });
    }
    arr = arr.concat(words);
    textArea.value = arr.join('');
    audioBtn.style.backgroundColor = 'transparent';
    recognition.stop();
    audioBtn.blur();
  }
});

audioBtn.addEventListener('click', () => {
  if (isEng) {
    recognition.lang = 'en-US';
  } else {
    recognition.lang = 'ru';
  }
  recognition.start();
  audioBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
});
