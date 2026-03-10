function checkTemperature() {

  let temperature = Number(document.getElementById("temperatureInput").value);
  let result = document.getElementById("result");
  let body = document.body;

  if (temperature > 35) {
    result.innerText = "🔥 Extreme heat!";
    body.style.background = "linear-gradient(135deg,#ff512f,#dd2476)";
  } 
  else if (temperature >= 25 && temperature <= 35) {
    result.innerText = "☀️ Warm weather";
    body.style.background = "linear-gradient(135deg,#f7971e,#ffd200)";
  } 
  else {
    result.innerText = "❄️ Cool weather";
    body.style.background = "linear-gradient(135deg,#4facfe,#00f2fe)";
  }

}