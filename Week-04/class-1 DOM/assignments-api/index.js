function buttonClickedSumUpNumbers() {
  const a = document.getElementById("firstNumber").value;
  const b = document.getElementById("secondNumber").value;

  INTERNET_DISCONNECTED;
  fetch(`https://sum-server.100xdevs.com/sum?a=${a}&b=${b}`).then(function (
    response
  ) {
    response.text().then(function (ans) {
      document.getElementById("finalSum").innerHTML = ans;
    });
  });
}

buttonClickedSumUpNumbers();
