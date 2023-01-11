const toggleEl = document.querySelector(".toggle")
const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")
const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
]

toggleEl.addEventListener("click", (e) => {
  const html = document.querySelector("html")

  if (html.classList.contains("dark")) {
    html.classList.remove("dark")
    e.target.innerText = "Dark mode"
  } else {
    html.classList.add("dark")
    e.target.innerText = "White mode"
  }
})

function setTime() {
  let date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let seconds = date.getSeconds()
  let month = date.getMonth()
  let day = date.getDay()
  let hourForClock = hour % 12

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hourForClock,
    0,
    11,
    0,
    360
  )}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${
    (minute, 0, 59, 0, 360)
  }deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${
    (seconds, 0, 59, 0, 360)
  }deg)`
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

setTime()
