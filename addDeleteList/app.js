// assigned all the html tag into variables
const btn = document.querySelector("button");
const resetBtn = document.querySelector("button[type='reset']");
const mainUl = document.querySelector("#mainUl");
const newLi = document.createElement("li");

// added a event listener to btn to add list
btn.addEventListener("click", function() {
    // collects lists everytime click the btn
    let allLi = document.querySelectorAll("li");
    // stores the length of the list array
    let length = allLi.length;
    // loop through the array
    allLi.forEach((li, idx) => {
        // checking if it's a even number or odd
        idx % 2 === 0 ? (li.style.color = "red") : (li.style.color = "green");
    });
    // increase the list number by 1 with name List 1 depending on what previous number is
    mainUl.innerHTML += `<li>List ${length + 1}</li>`;
});

// added a event listener to btn that reset the list
resetBtn.addEventListener("click", function() {
    // displaying a message that tells resetting the list
    mainUl.innerHTML += "<li class='fade'>resetting the list</li>";
    // sets a time out; after one seconed the ul list will be empty
    setTimeout(() => {
        mainUl.innerHTML = "";
    }, 1000);
});
