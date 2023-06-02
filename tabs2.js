const tabsBt = document.querySelectorAll(".nav_effecti");
const tabsItem = document.querySelectorAll(".content");

tabsBt.forEach(onTabClic);

function onTabClic(ite) {
  ite.addEventListener("click", function () {
    let currentBt = ite;
    let tabI = currentBt.getAttribute("data-tab");
    let currentTa = document.querySelector(tabI);

    if (!currentBt.classList.contains("activ")) {
      tabsBt.forEach(function (item) {
        item.classList.remove("activ");
      });

      tabsItem.forEach(function (item) {
        item.classList.remove("activ");
      });

      currentBt.classList.add("activ");
      currentTa.classList.add("activ");
    }
  });
}

document.querySelector(".tabs__nav-btn").click();
