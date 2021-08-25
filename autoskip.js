
function skipIntro() {
    /*
    Findet den Skip Intro Button auf Netflix, wenn er existiert, und löst das Event aus.
    Wenn er nicht existiert, dann handled JS den Error.
     */
    let skipClassElements = document.getElementsByClassName("nf-icon-button nf-flat-button nf-flat-button-uppercase no-icon");
    let skipButton = skipClassElements.item(0);
    skipButton.click();
}


function addAutoSkipIntro() {
    /*
    Erstellt einen Observer, welcher bei Änderung vom HTML vom Control-Panel skipIntro ausführt.
    Dadurch wird das Intro übersprungen, wenn es erstellt und angezeigt wird.
     */
    let controlClasses = document.getElementsByClassName("PlayerControlsNeo__layout PlayerControlsNeo__layout--inactive");
    let controlItem = controlClasses.item(0);
    let config = {attributes: true, childList: true, CharacterData: true};
    document.observer = new MutationObserver(function(mutations) {skipIntro();});
    document.observer.observe(controlItem, config);
}


addAutoSkipIntro();



