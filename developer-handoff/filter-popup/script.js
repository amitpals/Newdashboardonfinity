const chipButtons = Array.from(document.querySelectorAll(".filter-chip"));
const clearButton = document.querySelector("[data-clear-all]");
const customRangeSection = document.querySelector("[data-custom-range]");
const customRangeTrigger = document.querySelector("[data-toggle-custom-range]");
const inputs = Array.from(document.querySelectorAll(".filter-popup input"));
const selects = Array.from(document.querySelectorAll(".filter-popup select"));

const resetDateGroup = () => {
  chipButtons
    .filter((button) => button.dataset.chipGroup === "date")
    .forEach((button) => button.classList.remove("is-selected"));
};

const hideCustomRange = () => {
  if (!customRangeSection) return;
  customRangeSection.classList.add("is-hidden");
  customRangeSection.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
};

chipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isDateChip = button.dataset.chipGroup === "date";

    if (isDateChip) {
      const isSelected = button.classList.contains("is-selected");
      const isDefaultDate = button.textContent.trim() === "Current year";

      if (isSelected && !isDefaultDate) {
        resetDateGroup();
        const defaultChip = chipButtons.find((chip) => chip.dataset.chipGroup === "date" && chip.textContent.trim() === "Current year");
        if (defaultChip) defaultChip.classList.add("is-selected");
        hideCustomRange();
        return;
      }

      resetDateGroup();
      button.classList.add("is-selected");

      if (button === customRangeTrigger) {
        customRangeSection?.classList.remove("is-hidden");
      } else {
        hideCustomRange();
      }

      return;
    }

    button.classList.toggle("is-selected");
  });
});

clearButton?.addEventListener("click", () => {
  chipButtons.forEach((button) => button.classList.remove("is-selected"));

  const defaultDateChip = chipButtons.find((button) => button.dataset.chipGroup === "date" && button.textContent.trim() === "Current year");
  if (defaultDateChip) defaultDateChip.classList.add("is-selected");

  inputs.forEach((input) => {
    input.value = "";
  });

  selects.forEach((select) => {
    select.value = "";
  });

  hideCustomRange();
});

