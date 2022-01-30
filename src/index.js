const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for (let i = 0; i < expr.length / 10; i++){  
        arr.push(expr.substr(i * 10, 10));
    }
    result = arr.map(el => {
      if (el == '**********') return ' ';
      else {
        let letter = [];
        for (let i = 0; i < 5; i++) {
            letter.push(el.substr(i * 2, 2));
        }
        return letter;
      }
    })
  for (let i = 0; i < result.length; i++){
    if (result[i] == ' ') continue;
    else {
      result[i] = result[i].map(el => {
      switch(el){
        case '10':
          return '.';
        case '11':
          return '-';  
        default:
          return ' '
    }
  }).join('').trim()
    }
  }
  result = result.map(el => {
    if (el == ' ') return ' ';
    else return MORSE_TABLE[el] 
  }).join('')
    return result
  }

module.exports = {
    decode
}