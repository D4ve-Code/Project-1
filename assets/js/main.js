let card = document.getElementById("card");
let theCard = document.querySelector(".thecard");
let theCardChosen = document.querySelector(".thecard-chosen");
let styleMain = document.querySelector(".back-chosen");
let styleBack = document.querySelector(".back");
let titleStyleMain = document.querySelector(".front-chosen");
let titleStyleBack = document.querySelector(".front");
let buttonContainerMain = document.querySelector(".chosen-buttoncontainer")
let buttonContainerBack = document.querySelector(".buttoncontainer")
let buttonMain = document.querySelector(".chosen-button")
let buttonBack = document.querySelector(".button")

let theCard3 = document.querySelector(".card3");
let styleBack3 = document.querySelector(".switch3");
let titleStyleBack3 = document.querySelector(".title3");
let buttonContainerBack3 = document.querySelector(".box3");
let buttonBack3 = document.querySelector(".but3")


let theCard4 = document.querySelector(".card4");
let styleBack4 = document.querySelector(".switch4");
let titleStyleBack4 = document.querySelector(".title4");
let buttonContainerBack4 = document.querySelector(".box4");
let buttonBack4 = document.querySelector(".but4")

let theCard5 = document.querySelector(".card5");
let styleBack5 = document.querySelector(".switch5");
let titleStyleBack5 = document.querySelector(".title5");
let buttonContainerBack5 = document.querySelector(".box5");
let buttonBack5 = document.querySelector(".but5")

let theCard6 = document.querySelector(".card6");
let styleBack6 = document.querySelector(".switch6");
let titleStyleBack6 = document.querySelector(".title6");
let buttonContainerBack6 = document.querySelector(".box6");
let buttonBack6 = document.querySelector(".but6")

let theCard7 = document.querySelector(".card7");
let styleBack7 = document.querySelector(".switch7");
let titleStyleBack7 = document.querySelector(".title7");
let buttonContainerBack7 = document.querySelector(".box7");
let buttonBack7 = document.querySelector(".but7")

function reset() {
  if (card !== document.querySelector(".carte1")) {
    theCardChosen.classList.replace("thecard-chosen","thecard");
    styleMain.classList.replace("back-chosen","back");
    buttonContainerMain.classList.replace("chosen-buttoncontainer", "buttoncontainer")
    buttonMain.classList.replace("chosen-button","button")
    titleStyleMain.classList.replace("front-chosen","front");
    titleStyleMain.innerHTML = "<h1>Other choice</h1>";
  }
}


function change() {
  if (card === document.querySelector(".carte1")) {
    theCardChosen = true;
    styleMain = true;


  } else if (card === document.querySelector(".carte2")) {
    reset()
    theCard.classList.replace("thecard","thecard-chosen");
    styleBack.classList.replace("back","back-chosen");
    buttonContainerBack.classList.replace("buttoncontainer","chosen-buttoncontainer")
    buttonBack.classList.replace("button","chosen-button")
    titleStyleBack.classList.replace("front","front-chosen");
    titleStyleBack.innerHTML = "<h1>Here is your best match</h1>";



  } else if (card === document.querySelector(".carte3")) {
    reset()
    theCard3.classList.replace("thecard","thecard-chosen");
    styleBack3.classList.replace("back","back-chosen");
    buttonContainerBack3.classList.replace("buttoncontainer","chosen-buttoncontainer")
    buttonBack3.classList.replace("button","chosen-button")
    titleStyleBack3.classList.replace("front","front-chosen");
    titleStyleBack3.innerHTML = "<h1>Here is your best match</h1>";
   
    
   
  } else if (card === document.querySelector(".carte4")) {
    reset()
    theCard4.classList.replace("thecard","thecard-chosen");
    styleBack4.classList.replace("back","back-chosen");
    buttonContainerBack4.classList.replace("buttoncontainer","chosen-buttoncontainer")
    buttonBack4.classList.replace("button","chosen-button")
    titleStyleBack4.classList.replace("front","front-chosen");
    titleStyleBack4.innerHTML = "<h1>Here is your best match</h1>";


  } else if (card === document.querySelector(".carte5")) {
    reset()
    theCard5.classList.replace("thecard","thecard-chosen");
    styleBack5.classList.replace("back","back-chosen");
    buttonContainerBack5.classList.replace("buttoncontainer","chosen-buttoncontainer")
    buttonBack5.classList.replace("button","chosen-button")
    titleStyleBack5.classList.replace("front","front-chosen");
    titleStyleBack5.innerHTML = "<h1>Here is your best match</h1>";



  } else if (card === document.querySelector(".carte6")) {
    reset()
    theCard6.classList.replace("thecard","thecard-chosen");
    styleBack6.classList.replace("back","back-chosen");
    buttonContainerBack6.classList.replace("buttoncontainer","chosen-buttoncontainer")
    buttonBack6.classList.replace("button","chosen-button")
    titleStyleBack6.classList.replace("front","front-chosen");
    titleStyleBack6.innerHTML = "<h1>Here is your best match</h1>";



  } else if (card === document.querySelector(".carte7")) {
    reset()
    theCard7.classList.replace("thecard","thecard-chosen");
    styleBack7.classList.replace("back","back-chosen");
    buttonContainerBack7.classList.replace("buttoncontainer","chosen-buttoncontainer")
    buttonBack7.classList.replace("button","chosen-button")
    titleStyleBack7.classList.replace("front","front-chosen");
    titleStyleBack7.innerHTML = "<h1>Here is your best match</h1>";
  }
}

function choosecards() {
  let choosecard = Math.floor(Math.random() * 7 + 1);

  if (choosecard === 1) {
    card = document.querySelector(".carte1");
    change();
    console.log(card);
  } else if (choosecard === 2) {
    card = document.querySelector(".carte2");
    change();
    console.log(card);
  } else if (choosecard === 3) {
    card = document.querySelector(".carte3");
    change();
    console.log(card);
  } else if (choosecard === 4) {
    card = document.querySelector(".carte4");
    change();
    console.log(card);
  } else if (choosecard === 5) {
    card = document.querySelector(".carte5");
    change();
    console.log(card);
  } else if (choosecard === 6) {
    card = document.querySelector(".carte6");
    change();
    console.log(card);
  } else if (choosecard === 7) {
    card = document.querySelector(".carte7");
    change();
    console.log(card);
  } else {
    console.log("rien");
  }
  return choosecard;
}
console.log(choosecards());
