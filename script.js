function handleTraduzir() {
  const inputtedText = getInputedText();
  const transletedText = traduter(inputtedText);
  setTranslatedTextOnHtml(transletedText);
}

function getInputedText() {
  const inputId = "text-input";
  return document.getElementById(inputId).value;
}

function setTranslatedTextOnHtml(text) {
  const inputId = "translated-text";
  document.getElementById(inputId).innerHTML = text;
}

function getSelectedOption() {
  const selectId = "replace-options";
  return document.getElementById(selectId).value;
}

function traduter(text) {
  const regex = /a|o/g;
  const letterToSubstituteOnText = getSelectedOption();
  return text.replace(regex, letterToSubstituteOnText);
}
