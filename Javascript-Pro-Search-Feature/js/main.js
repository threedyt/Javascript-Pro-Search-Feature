let search = document.getElementById("search");
search.onblur = function() {
    let searchText = search.value.toLowerCase();

    if (searchText.length > 0) {
        let message = document.querySelectorAll(".msg");
        let currentDisplay = 0;
        let searchedMessages = [];
        let prev = document.getElementById("prev");
        let next = document.getElementById("next");
        let remainings = document.querySelector(".remainings");

        message.forEach(function(msg) {
            let msgText = msg.innerText.toLowerCase();
            if (msgText.includes(searchText)) {
                msg.style.backgroundColor = "lime";

                searchedMessages.push(msg);

                next.onclick = function() {
                    searchedMessages[currentDisplay].scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                    currentDisplay = currentDisplay == searchedMessages.length - 1 ? 0 : currentDisplay + 1;
                    console.log(currentDisplay);
                    if (remainings.classList.contains("hide")) {
                        remainings.classList.remove("hide");
                    }

                    remainings.innerText = `${currentDisplay}/${searchedMessages.length}`;
                }

                prev.onclick = function() {
                    currentDisplay = currentDisplay == 0 ? searchedMessages.length : --currentDisplay;
                    console.log(currentDisplay);
                    searchedMessages[currentDisplay].scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                    if (remainings.classList.contains("hide")) {
                        remainings.classList.remove("hide");
                    }
                    remainings.innerText = `${currentDisplay + 1}/${searchedMessages.length}`;
                }
            }
        });
    }
}