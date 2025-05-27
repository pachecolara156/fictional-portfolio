// Task 7 & 9 - Add new recommendation and show confirmation popup
document.getElementById("recommendation-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const input = document.getElementById("new-recommendation");
    const text = input.value.trim();

    if (text !== "") {
        const newDiv = document.createElement("div");
        newDiv.className = "recommendation";
        newDiv.textContent = text;

        document.getElementById("recommendation-list").appendChild(newDiv);
        input.value = "";

        // Task 9 - Confirmation popup
        alert("Thank you for your recommendation!");
    }
});
