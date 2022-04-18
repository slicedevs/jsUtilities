
const container = document.getElementById("container")

function childrenModify(parent, func) {
    const childrenList = Object.values(parent.children)
    childrenList.forEach(children  => {
         func(children, childrenList)
    })
}

function shadesListener(shades, arr) {
    shades.addEventListener("click", () => { 
        arr.forEach(shade => {
            shade.classList.remove("selected", "result")
        })

        shades.classList.add("selected")
        let resultShade = arr.indexOf(shades) - 3
        console.log(resultShade)

        if (resultShade < 0) {
            resultShade = 0
        }

        arr[resultShade].classList.add("YOU!")
    })
}