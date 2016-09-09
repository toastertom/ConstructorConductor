//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.

  function reverseStr(string){
    var revStr = '';
    for (var i = string.length -1; i >= 0; i--) {
        revStr += string[i]
    }
    return revStr;
  }


console.log(reverseStr('Hello'));
