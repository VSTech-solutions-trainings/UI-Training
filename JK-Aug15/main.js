let divEle = document.getElementById("background_color")

let buttonEle = document.getElementById("changeColor_button")

buttonEle.addEventListener("click", () => {
  divEle.classList.add("addcolor")
  let arr = [2,4,5]
  console.log(arr.includes(4))
})

