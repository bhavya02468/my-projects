

















// $(document).ready(function () {
//     $("#fetchbtn").click(function(){
//         console.log("clicked")



//         const xhr = new XMLHttpRequest();
        
//         UuRL=""
        
//         xhr.open('GET',	"http://localhost:3000/Simple_Json/EMP_01 ", true);
        
//         xhr.onprogress = function () {
        
//             console.log("progress")
//         }
        

//         xhr.onload = function () { 
//             console.log(this.responseText)
//     //         for (var i=0; i<this.responseText.length; i++) { 
//     //             console.log(xhr.responseText[i])
//     // }
        
        
//         xhr.send();
        

            
//         }



//     });
// })




// function buttonclickhandler() {
// return false if not found    in cache 











// function convertToRoman(num) {
//     let v = ""
//     let a = Math.floor(num / 1000)
//     let b = Math.floor((num - a * 1000) / 100)
//     let c = Math.floor(((num - a * 1000) - (b * 100)) / 10)
//     let d = Math.floor(num - (a * 1000) - (b * 100) - (c * 10))
//     if (a != 0) {
//         v = v + "M".repeat(a)
//     } else {
//         v = ""
//     }
//     if (b < 4) {
//         v = v + "C".repeat(b)
//     } else if (b === 4) {
//         v = v + "CD"
//     } else if (b == 5) {
//         v = v + "D"

//     } else if (b < 9) {
//         v = v + "D" + "C".repeat(b)
//     }
//     else if (b == 9) {
//         v = v + "CM"
//     }
//     if (c < 4) {
//         v = v + "X".repeat(c)
//     } else if (c === 4) {
//         v = v + "XL"
//     } else if (c == 5) {
//         v = v + "L"

//     } else if (c > 5, c < 9) {
//         v = v + "L" + "X".repeat(c)
//     }
//     else if (c == 9) {
//         v = v + "XC"
//     }

//     if (d < 4) {
//         v = v + "I".repeat(d)
//     } else if (d === 4) {
//         v = v + "IV"
//     } else if (d == 5) {
//         v = v + "V"

//     } else if (d < 9) {
//         v = v + "V" + "I".repeat(d - 5)
//     }
//     else if (d == 9) {
//         v = v + "IX"

//     }



    // return v;
// }



// for(var z=1;z<=5;z++){
//     setTimeout(function(){
//         console.log(z)
//     },1000)
// }



// for(let u=1;u<=5;u++){
//     setTimeout(function(){
//         console.log(u)
//     },1000)
// }






//console.log(convertToRoman(500))



// function palindrome(str) {
//     var a = ""


//     const replaced = str.replace(/[^a-z0-9]/gi, '');

//     let replace = replaced.toLowerCase()
//     console.log(replace);
//     for (var i = replace.length; i > 0; i--) {
//         let x = replace.split("")
//         a = a + x[i - 1]
//     }
//     if (replace === a) {
//         return true;
//     } else {
//         return false;
//     }

// }

// palindrome("_eye");


