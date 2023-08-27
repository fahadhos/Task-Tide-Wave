console.log("😎");


const subhanallahdisplay = document.getElementById("subhanallahdisplay");
const Subhanallahbtn = document.getElementById("Subhanallahbtn");

const Alhamdulillahdisplay = document.getElementById("Alhamdulillahdisplay");
const alhamdulillahbtn = document.getElementById("alhamdulillahbtn");

const allahuakbardisplay = document.getElementById("allahuakbardisplay");

const AllahuAkbarbtn = document.getElementById("AllahuAkbarbtn");


const resetbtn = document.getElementById("resetbtn");

// const resetbtn2 = document.getElementById("resetbtn2");

// const resetbtn3 = document.getElementById("resetbtn3");

console.log(subhanallahdisplay.innerText);
// console.log(Subhanallahbtn);

// console.log(Alhamdulillahdisplay);

// console.log(alhamdulillahbtn);
console.log(resetbtn);
let subhanallahdisplayvalue = 0;
let alhamdulillahdisplayvalue = 0;
let allahuakbardisplayvalue = 0;


Subhanallahbtn.addEventListener('click', function () {
    //    counter
    subhanallahdisplayvalue += 1;
    //   this.classList.add("not-allowed");
    //   this.disabled = true; // Optionally disable the button after click
    if (subhanallahdisplayvalue > 33) {
        //    card hide after 33 times
        // const subhanallahCard = document.getElementById('card1');
        // subhanallahCard.classList.add('hidden');

        document.getElementById("Subhanallahbtn").style.cursor = "not-allowed";

        // const subhanallahCard =document.getElementById('card1');
        // subhanallahCard.classList.add('opacity-30');

        // const successMessage = document.getElementById('message1');
        // successMessage.classList.remove('invisible');

        // // Hide the message after 6 seconds (6000 milliseconds)
        // setTimeout(function () {
        //     successMessage.classList.add('invisible');
        // }, 3000);


    }
    else {
        subhanallahdisplay.innerText = subhanallahdisplayvalue;

    }

    if (subhanallahdisplay.innerText >= 33) {
        const subhanallahCard = document.getElementById('card1');
        subhanallahCard.classList.add('opacity-30');

        const successMessage = document.getElementById('message1');
        successMessage.classList.remove('invisible');

        // Hide the message after 6 seconds (6000 milliseconds)
        setTimeout(function () {
            successMessage.classList.add('invisible');
        }, 3000);
    }
    if ("vibrate" in navigator) {
        // Vibrate for 10 milliseconds
        navigator.vibrate(10);
    } else {
        console.log("Vibration not supported on this device.");
    }


    console.log(subhanallahdisplayvalue)
});
// end of subhanallahdisplayvalue

// Alhamdulillah Update er code
alhamdulillahbtn.addEventListener('click', function () {
    //    counter

    alhamdulillahdisplayvalue += 1;
    if (alhamdulillahdisplayvalue > 33) {
        //    card hide after 33 times

        // document.getElementById("alhamdulillahbtn").disabled = true;
        document.getElementById("alhamdulillahbtn").style.cursor = "not-allowed";
        // Wait || Help || Move || Pointer || Crosshair || Cell || None ;

        // const alhamdulillahCard = document.getElementById('card2');
        // alhamdulillahCard.classList.add('opacity-30');


        // const successMessage = document.getElementById('message2');
        // successMessage.classList.remove('invisible');

        // // Hide the message after 6 seconds (6000 milliseconds)
        // setTimeout(function () {
        //     successMessage.classList.add('invisible');
        // }, 3000);


    }

    else {

        Alhamdulillahdisplay.innerText = alhamdulillahdisplayvalue;

    } if (Alhamdulillahdisplay.innerText >= 33) {

        const alhamdulillahCard = document.getElementById('card2');
        alhamdulillahCard.classList.add('opacity-30');


        const successMessage = document.getElementById('message2');
        successMessage.classList.remove('invisible');

        // Hide the message after 6 seconds (6000 milliseconds)
        setTimeout(function () {
            successMessage.classList.add('invisible');
        }, 3000);

    }
    console.log(Alhamdulillahdisplay);
    if ("vibrate" in navigator) {
        // Vibrate for 10 milliseconds
        navigator.vibrate(10);
    } else {
        console.log("Vibration not supported on this device.");
    }
});

// Allahuakbar Update er code
AllahuAkbarbtn.addEventListener('click', function () {
    //    counter
    allahuakbardisplayvalue += 1;

    if (allahuakbardisplayvalue > 34) {

        //    card hide after 33 times

        document.getElementById("AllahuAkbarbtn").style.cursor = "not-allowed";
        // document.getElementById("AllahuAkbarbtn").disabled = true;
        // const allahuakbarCard = document.getElementById('card3');
        // allahuakbarCard.classList.add('opacity-30');

        // const successMessage = document.getElementById('message3');
        // successMessage.classList.remove('invisible');
        // // Hide the message after 6 seconds (6000 milliseconds)
        // setTimeout(function () {
        //     successMessage.classList.add('invisible');
        // }, 3000);

        // // modal dua hide the message
        // const showModal = document.getElementById('modal');
        // showModal.classList.remove('hidden');

        // // Hide the Modal dua button after 6 seconds (6000 milliseconds)
        // setTimeout(function () {
        //     showModal.classList.add('hidden');
        // }, 9000);




    }
    else {
        allahuakbardisplay.innerText = allahuakbardisplayvalue;

    }

    if (allahuakbardisplay.innerText >= 34) {
        const allahuakbarCard = document.getElementById('card3');
        allahuakbarCard.classList.add('opacity-30');

        const successMessage = document.getElementById('message3');
        successMessage.classList.remove('invisible');
        // Hide the message after 6 seconds (6000 milliseconds)
        setTimeout(function () {
            successMessage.classList.add('invisible');
        }, 3000);

        // modal dua hide the message
        const showModal = document.getElementById('modal');
        showModal.classList.remove('hidden');

        // Hide the Modal dua button after 6 seconds (6000 milliseconds)
        setTimeout(function () {
            showModal.classList.add('hidden');
        }, 9000);
    }

    console.log(allahuakbardisplayvalue);
    if ("vibrate" in navigator) {
        // Vibrate for 10 milliseconds
        navigator.vibrate(10);
    } else {
        console.log("Vibration not supported on this device.");
    }
});





// reset button stablished

resetbtn.addEventListener('click', function () {
    subhanallahdisplayvalue = 0;
    subhanallahdisplay.innerText = subhanallahdisplayvalue;


    console.log(subhanallahdisplayvalue);

    alhamdulillahdisplayvalue = 0;
    Alhamdulillahdisplay.innerText = alhamdulillahdisplayvalue;

    allahuakbardisplayvalue = 0;

    allahuakbardisplay.innerText = allahuakbardisplayvalue;

    console.log(alhamdulillahdisplayvalue);

    console.log(allahuakbardisplayvalue);

    //    card will be appear after reset
    const subhanallahCard = document.getElementById('card1');
    subhanallahCard.classList.remove('opacity-30');
    //    card will be appear after reset
    const alhamdulillahCard = document.getElementById('card2');
    alhamdulillahCard.classList.remove('opacity-30');
    //    card will be appear after reset
    const allahuakbarCard = document.getElementById('card3');
    allahuakbarCard.classList.remove('opacity-30');



});



