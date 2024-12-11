console.log("filed is connected!");

function onePressButton() {
  const counter = document.getElementById("counter");
  const textContentValue = parseInt(counter.innerText);
  const udpateCounter = textContentValue + 1;
  counter.innerText = udpateCounter;
  console.log(udpateCounter);
}
