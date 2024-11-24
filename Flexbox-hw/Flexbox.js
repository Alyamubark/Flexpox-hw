document.getElementById("search").addEventListener("input", function(event) {
    const searchValue = event.target.value;
    console.log("Searching for:", searchValue);
});

document.querySelector(".sign-up").addEventListener("click", function() {
    alert("Sign Up Clicked!");
});

document.querySelector(".sign-in").addEventListener("click", function() {
    alert("Sign In Clicked!");
});