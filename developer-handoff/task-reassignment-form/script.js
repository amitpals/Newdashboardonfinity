(function () {
  var popup = document.getElementById("reassign-popup");
  if (!popup) {
    return;
  }

  var openTriggers = document.querySelectorAll("[data-open-popup]");
  var closeTriggers = popup.querySelectorAll("[data-close-popup]");

  function openPopup() {
    popup.classList.add("is-open");
    popup.setAttribute("aria-hidden", "false");
    document.body.classList.add("has-popup-open");
  }

  function closePopup() {
    popup.classList.remove("is-open");
    popup.setAttribute("aria-hidden", "true");
    document.body.classList.remove("has-popup-open");
  }

  openTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", openPopup);
  });

  closeTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", closePopup);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && popup.classList.contains("is-open")) {
      closePopup();
    }
  });
})();
