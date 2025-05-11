document.addEventListener("DOMContentLoaded", function () {
  // Объект с допустимыми кодами и соответствующими ID div-ов
  const codes = {
    "1234": "dj",
    "4321": "eg",
    "2121": "da"
  };

  function askForCode() {
    const userCode = prompt("Введите код:");

    if (userCode in codes) {
      const divId = codes[userCode];
      const secretDiv = document.getElementById(divId);
      if (secretDiv) {
        secretDiv.style.display = "block";
      }
    } else {
      alert("Неверный код. Попробуйте снова.");
      askForCode(); // Повторный запрос
    }
  }

  askForCode(); // Запускаем при загрузке
});
