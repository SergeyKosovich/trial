const planceradiohederlabel = document.querySelector(".planceradiohederlabel");
const planradiowrapper = document.querySelector(".planradiowrapper");
const plansradioheader = document.getElementById("plansradioheader");
planceradiohederlabel.addEventListener("click", function () {
  planradiowrapper.classList.toggle("active");
});
const plansradioshdow = document.querySelectorAll(".plansradioshdow");
plansradioshdow.forEach(function (item) {
  item.addEventListener("click", function () {
    planradiowrapper.classList.toggle("active");
    planceradiohederlabel.innerHTML = item.innerHTML;
  });
});
const inputsearch = document.querySelector(".inputsearch");
const searchform = document.querySelector(".searchform");
const searchtext = document.querySelector(".searchtext");
inputsearch.addEventListener("focus", function () {
  searchform.classList.add("active");
  searchtext.classList.add("active");
});
inputsearch.addEventListener("blur", function () {
  searchform.classList.remove("active");
  searchtext.classList.remove("active");
  searchtext.classList.remove("hiden");
  inputsearch.value = "";
  inputsearch.blur();
});
inputsearch.addEventListener("input", function () {
  searchtext.classList.add("hiden");
});
searchform.addEventListener("submit", function () {
  searchform.classList.remove("active");
  searchtext.classList.remove("active");
  searchtext.classList.remove("hiden");
  inputsearch.value = "";
  inputsearch.blur();
});
