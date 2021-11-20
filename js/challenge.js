document.addEventListener("DOMContentLoaded", () => {
////////
// auto-increase, manual increase and decrease number

let initialTimer = setInterval(increaseNumber, 1000)

document.getElementById("minus").addEventListener("click", decreaseNumber)
document.getElementById("plus").addEventListener("click", increaseNumber)
function increaseNumber(){
  let counter = document.querySelector("#counter")
  let counterNumber = Number(counter.textContent)
  let newDisplayNumber = (counter.innerHTML = `${counterNumber += 1}`)
  // console.log(newDisplayNumber)
  return newDisplayNumber
}
function decreaseNumber(){
  let counter = document.querySelector("#counter")
  let counterNumber = Number(counter.textContent)
  counter.innerHTML = `${counterNumber -= 1}`
  let newDisplayNumber = counter.innerHTML
  console.log(newDisplayNumber)
  return newDisplayNumber
}

document.getElementById("heart").addEventListener("click", addLike)

let numberTracker = {}
function addLike(){
  let number = counter.innerText
  numberTracker[number] = numberTracker[number] || 0
  numberTracker[number] += 1
  renderLikes()
}

function renderLikes(){
  let likesContainer = document.querySelector(".likes")
  likesContainer.innerHTML = ""
  for (let key in numberTracker){
    const li = document.createElement("li")
    li.innerText = `${key} has been liked ${numberTracker[key]} times.`
    likesContainer.append(li)
  }
}

let stopStartButton = document.getElementById("pause")
stopStartButton.addEventListener("click", handleClick)
function handleClick(){
if (stopStartButton.className === ""){
    clearInterval(initialTimer);
    stopStartButton.className = "resume"
    stopStartButton.textContent ="resume"
    disableButtons()
    console.log("first time pause - class name NULL")
}
  else if (stopStartButton.className === "resume"){
    handleTimer("resume");
    enableButtons();
    stopStartButton.className = "pause"
    stopStartButton.textContent ="pause"
    
  }
  else if (stopStartButton.className === "pause"){
    handleTimer("pause");
    disableButtons()
    stopStartButton.className = "resume"
    stopStartButton.textContent ="resume"
  }

  function handleTimer(type){
    // let updatedTimerVariable = setInterval(increaseNumber, 1000)
    console.log(type)
    if (type === "resume") {
      initialTimer = setInterval(increaseNumber, 1000);
    }
    else if (type === "pause"){
    clearInterval(initialTimer)
    disableButtons()
    console.log(type, "it's reading the else if correctly")
    // return clearTimer
    }
  }

  function disableButtons(){
    const minusButton = document.querySelector('#minus')
    minusButton.disabled = true
    const plusButton = document.querySelector('#plus')
    plusButton.disabled = true
    const heartButton = document.querySelector('#heart')
    heartButton.disabled = true
    const submitButton = document.querySelector('#submit')
    submitButton.disabled = true
  }

  function enableButtons(){
    const minusButton = document.querySelector('#minus')
    minusButton.disabled = false
    const plusButton = document.querySelector('#plus')
    plusButton.disabled = false
    const heartButton = document.querySelector('#heart')
    heartButton.disabled = false
    const submitButton = document.querySelector('#submit')
    submitButton.disabled = false
  }

}
////////
// comment section
  let form = document.querySelector("form")
  form.addEventListener("submit", function (e){
    e.preventDefault();
    let textField = document.getElementById("comment-input").value
    console.log(textField);
    let li = document.createElement("li")
    li.textContent = textField
    document.getElementById("list").appendChild(li)
  })
})

// 


