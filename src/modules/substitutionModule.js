const substitutionModule = (function () {
  

    function substitution(input, alphabet, encode = true) {
      
      if (!input || !alphabet || alphabet.length !==26){return false};
      if (Array.from(new Set(alphabet)).length !==26){return false};
      
      
      let abc = 'abcdefghijklmnopqrstuvwxyz'
      alphabet = alphabet.split( '' )
      input = input.toLowerCase()
      let subResult = {};
      let decode = {};
      let result = '';
      
      abc.split('').forEach((letter, index) => {
        subResult[letter] = alphabet[index];
        decode[alphabet[index]] = letter;
      })
      
      if (!encode) subResult = decode;
      input.split('').forEach(input => {
        result += input === ' ' ? ' ' : subResult[input]
      })
      return result;
  }
    
    return {
      substitution,
    };
  })();
  
  module.exports = { substitution: substitutionModule.substitution };