// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const containerEl = document.getElementById("container")
// console.log(containerEl)

// containerEl.innerHTML = `"images/hip1.jpg"`

// containerEl.innerHTML = `<img class="team-img" src="images/hip1.jpg">`

function render(arr) {
    let imgsDOM = ""
    for (let i = 0; i < arr.length; i++) {
        imgsDOM += `<img alt="Employees in the company" class="team-img" src=${arr[i]}>`
    }
    containerEl.innerHTML = imgsDOM
}

render(imgs)