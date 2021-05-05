
 function check(input) {
   if (!input.valu1.length>2) {
     input.setCustomValidity("pleas fill it correctily");
   } else {
     // input is fine -- reset the error message
     input.setCustomValidity('');
   }
 }
