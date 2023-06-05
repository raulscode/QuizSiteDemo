document.getElementById("suggestForm").addEventListener("submit",getSuggestion);

function getSuggestion(event) {
    event.preventDefault();
    console.log("Suggestion Recieved");

    document.getElementById("confirmSuggest").textContent = "Suggestion Recieved!";
}