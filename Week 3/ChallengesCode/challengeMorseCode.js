decodeMorse = function (morseCode) {
  const morse = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '   ': ' ',
    '...---...': 'SOS',
    '.----': 1,
    '..---': 2,
    '...--': 3,
    '....-': 4,
    '.....': 5,
    '-....': 6,
    '--...': 7,
    '---..': 8,
    '----.': 9,
    '-----': 0,
    '.-.-.-': '.',
    '--..--': ',',
    '-.-.--':'!'
  }

  let word = morseCode.trim().split('   ');
  let letters = word.map(l => l.split(' '));
  let matrizDeCodigo = [];

  for (let i = 0; i < word.length; i++) {
    matrizDeCodigo[i] = [];
    for (let j = 0; j < letters[i].length; j++)
      if (morse[letters[i][j]]) {
        matrizDeCodigo[i].push(morse[letters[i][j]]);
      }
  }

  return matrizDeCodigo.map(l => l.join('')).join(' ');
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));