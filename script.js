function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
  }
  
  console.log(reverseWords("Hello World"));
////////////////////////////////////////////////////
  function cleanSentence(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (isNaN(parseInt(str[i]))) {
        result += str[i];
      }
    }
    return result;
  }
  
  console.log(cleanSentence("why8 a4re y8ou runn1ing?!"));
////////////////////////////////////////////////////

  function elongatedWord(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i];
        result += str[i];
    }
    return result;
  }
  
  console.log(elongatedWord("hello"));

////////////////////////////////////////////////////

  function makeAbbreviation(str) {
    let wordsArr = str.split(' ');
    let result = '';
    for(let i=0; i<wordsArr.length; i++){
        if(i === wordsArr.length-1){
            result+=wordsArr[i][0].toUpperCase()
        } else{
            result+=wordsArr[i][0].toUpperCase() + '.'
        }
    }
    
    return result;
  }
  
  console.log(makeAbbreviation("Hello World"));

  /////////////////////////////////////////////////


  function randomWord(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    
    return result;
  }
  
  console.log(randomWord(4));