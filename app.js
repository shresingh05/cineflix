const arrows = document.querySelectorAll(".arrow")
const movieLists = document.querySelectorAll(".movie-list")

// console.log(arrows)  /// it will print the arrows in NodeList because of querySelector.


arrows.forEach((arrow, i) => {
    // console.log(arrow)           ///// we are creating a fxn for each arrow and separating it using index(i)

    const itemNumber = movieLists[i].querySelectorAll("img").length;   //// This will count the no of images we have in our one wrapper.
    let clickCounter = 0;             ///Initializing the variable 

    
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        // console.log("you clicked to: " + i)  //// this will show which arrow you clicked.
        // movieLists[i].style.backgroundColor= "red"     ///// This will make the bg color red on clicking the arrow icon.

        clickCounter++;
        if (itemNumber - (5 + clickCounter) + (5 - ratio) >=-1) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`

        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }

    });
});


// Toggle

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .movie-list-container, .navbar-container, .sidebar, .left-menu-icon, .toggle"
);

ball.addEventListener("click", () => {
    items.forEach(items => {
        items.classList.toggle("active");
    });
    ball.classList.toggle("active");
});