function displayError(){
  validate.innerHTML = "This field can't be empty";
    
    // setTimeout(function () {
    //     validate.innerHTML ="";
    // }, 1000);
}

function checkPalindrome() {
  let str = document.getElementById("inputBox").value;

  if(str == "") 
  {
     displayError();
  } 
  else 
  {                                                                            //let str;   //here i am showing hoisting
    let len = str.length;
    let flag = true;                                                              //these variables have global scope i.e. global variables

    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        flag = false;                                                               //here flag, str, len are accessible bcoz it preserves the data from outside i.e. called "closure"
        break;
      }
    }
    var variable = document.getElementById("output");
    if (flag) {
      variable.innerHTML = "Output => Input String is Palindrome.";
    }                                                                           //document.write("Text is Palindrome");
    else
      variable.innerHTML = "Output => Input String is not Palindrome.";

      variable.style.color = "white";
      variable.style.fontSize = "30px";
      variable.style.padding = "10px 0px 0px 35px";
  }
 
}

function onInputChange(){
  validate.innerHTML ="";
}
