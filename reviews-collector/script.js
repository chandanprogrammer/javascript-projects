const reviewTitleInput = document.getElementById("review-title-input");
const reviewMessageInput = document.getElementById("review-message-input");
const submitRatingBtn = document.getElementById("submit-rating");
const ratingList = document.getElementById("rating-list");
const startRating = document.getElementById("star-rating");
let startRatingCount = 0;

// Data validation
function validateInputData() {
  if (reviewTitleInput.value.length < 10) {
    alert("Title must be greater than 10 letter.");
    return false;
  }
  if (reviewMessageInput.value.length < 20) {
    alert("Review Message must be greater than 20 letter.");
    return false;
  }
  if (startRatingCount == 0) {
    alert("Please select rating start");
    return false;
  }
  return true;
}

// Input or left side star
function printStar(ratingCount) {
  startRating.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= ratingCount) {
      startRating.innerHTML += `<i class="fa-solid fa-star star${i}"></i>`;
    } else {
      startRating.innerHTML += `<i class="fa-regular fa-star star${i}"></i>`;
    }
  }
}

// flush the value of input field or star rating
function flushInput() {
  reviewTitleInput.value = "";
  reviewMessageInput.value = "";
  startRatingCount = 0;
  printStar(startRatingCount);
}

// click on submit button then call
submitRatingBtn.addEventListener("click", () => {
  if (!validateInputData()) {
    return;
  }
  const p1 = document.createElement("p");
  p1.classList.add("review-title");
  p1.innerText = reviewTitleInput.value;

  const p2 = document.createElement("p");
  p2.classList.add("review-message");
  p2.innerText = reviewMessageInput.value;

  const div1 = document.createElement("div");
  div1.classList.add("star-rating-display");

  for (let i = 1; i <= 5; i++) {
    if (i <= startRatingCount) {
      div1.innerHTML += `<i class="fa-solid fa-star star${i}"></i>`;
    } else {
      div1.innerHTML += `<i class="fa-regular fa-star star${i}"></i>`;
    }
  }

  const p3 = document.createElement("p");
  p3.classList.add("submit-date");

  let now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const currentDate = now.toLocaleDateString(undefined, options);
  p3.innerText = `${currentDate} at ${now.toLocaleTimeString()}`;

  const span1 = document.createElement("span");
  span1.innerHTML = ` | <span><i class="fa-solid fa-user"></i> Chandan Kumar</span>`;
  p3.appendChild(span1);

  const hr = document.createElement("hr");
  ratingList.append(p1, p2, div1, p3, hr);

  flushInput();
});

// select the rating start
startRating.addEventListener("click", (e) => {
  startRatingCount = Number(e.target.classList[2][4]);
  printStar(startRatingCount);
});
