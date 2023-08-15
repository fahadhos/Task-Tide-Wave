console.log("😎");


const subhanallahdisplay = document.getElementById("subhanallahdisplay");
const Subhanallahbtn = document.getElementById("Subhanallahbtn");

const Alhamdulillahdisplay = document.getElementById("Alhamdulillahdisplay");
const alhamdulillahbtn = document.getElementById("alhamdulillahbtn");
 
const allahuakbardisplay = document.getElementById("allahuakbardisplay");
 
const AllahuAkbarbtn = document.getElementById("AllahuAkbarbtn");
 

const resetbtn = document.getElementById("resetbtn");

console.log(subhanallahdisplay);
console.log(Subhanallahbtn);

console.log(Alhamdulillahdisplay);

console.log(alhamdulillahbtn);
let subhanallahdisplayvalue  = 0;
let alhamdulillahdisplayvalue= 0;
let allahuakbardisplayvalue  = 0;

Subhanallahbtn.addEventListener('click', function() {
    subhanallahdisplayvalue += 1;
    if(subhanallahdisplayvalue >=34){
    

      const successMessage = document.getElementById('message');
      successMessage.classList.remove('hidden');
      
        // Hide the message after 6 seconds (6000 milliseconds)
        setTimeout(function() {
            successMessage.classList.add('hidden');
        }, 6000);
    }
    else{
         subhanallahdisplay.innerText=subhanallahdisplayvalue;
   
    }

  
  
     console.log(subhanallahdisplayvalue)
});
// end of subhanallahdisplayvalue

// Alhamdulillah Update er code
alhamdulillahbtn.addEventListener('click', function() {
    alhamdulillahdisplayvalue += 1;
    if(alhamdulillahdisplayvalue >=34){
    

      const successMessage = document.getElementById('message2');
      successMessage.classList.remove('hidden');
      
        // Hide the message after 6 seconds (6000 milliseconds)
        setTimeout(function() {
            successMessage.classList.add('hidden');
        }, 6000);
    }
    else{
         Alhamdulillahdisplay.innerText=alhamdulillahdisplayvalue;
   
    }
  
    console.log(Alhamdulillahdisplay);
   
});

// Allahuakbar Update er code
AllahuAkbarbtn.addEventListener('click', function() {
    allahuakbardisplayvalue += 1;
   
    if(allahuakbardisplayvalue >=35){
       
    
      const successMessage = document.getElementById('message3');
      successMessage.classList.remove('hidden');
       // Hide the message after 6 seconds (6000 milliseconds)
        setTimeout(function() {
            successMessage.classList.add('hidden');
        }, 6000);
      const showModal = document.getElementById('modal');
      showModal.classList.remove('hidden');
      
       // Hide the Modal dua button after 6 seconds (6000 milliseconds)
       setTimeout(function() {
        showModal.classList.add('hidden');
    }, 6000);

    }
    else{
         allahuakbardisplay.innerText= allahuakbardisplayvalue;
   
    }

    console.log(allahuakbardisplayvalue);
   
});
 