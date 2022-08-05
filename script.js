let recordBtn = document.querySelector(".record-btn");
let recordBtnCont = document.querySelector(".record-btn-cont");
let captureBtn = document.querySelector(".capture-btn");
let captureBtnCont = document.querySelector(".capture-btn-cont");
let timerCont = document.querySelector(".timer-cont");
let timer = document.querySelector(".timer");



//animation on capture button
captureBtnCont.addEventListener("click", function (){
    captureBtn.classList.add("scale-capture");
    setTimeout(() => {
        captureBtn.classList.remove("scale-capture")
    }, 1000)
})

//animation on record button
let isRecording = false;
recordBtnCont.addEventListener("click", function (){
   if(!isRecording){
    //we have to start recording
    recordBtn.classList.add("scale-record");
    timer.style.display= "block";
   }
   else{
    //we have to stop recording
    recordBtn.classList.remove("scale-record");
    timer.style.display= "none";

   }

   isRecording = !isRecording;

});



