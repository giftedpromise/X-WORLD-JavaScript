import { asabenehChallenges2020 } from "./info-data.js";

console.log("Challenges Data:", asabenehChallenges2020);

let wrapper = document.querySelector(".wrapper");
wrapper.style.textAlign = "center";

let yearSpan = document.createElement("span");
yearSpan.style.fontSize = "70px"; // Change the font size for the year
yearSpan.style.fontFamily = "'Courier New', Courier, monospace ";
yearSpan.textContent = asabenehChallenges2020.challengeYear;

let title = document.createElement("h1");
title.className = "title";
title.style.fontSize = "24px";
title.style.marginTop = "4rem";
title.style.marginBottom = "1rem";
title.style.textAlign = "center";
title.textContent = `${asabenehChallenges2020.description} in `;

title.appendChild(yearSpan);
wrapper.appendChild(title);

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Change the color of the year every second
setInterval(() => {
  let randomColor = getRandomColor();
  yearSpan.style.color = randomColor;
  date.style.backgroundColor = randomColor;
}, 1000);

let challengeSubtitle = document.createElement("p");
challengeSubtitle.style.fontSize = "18px";
challengeSubtitle.style.textAlign = "center";
challengeSubtitle.style.marginBottom = "1rem";
challengeSubtitle.style.textDecoration = "underline";
challengeSubtitle.textContent = `${asabenehChallenges2020.challengeSubtitle}`;

wrapper.appendChild(challengeSubtitle);

const currentDate = new Date();

// Get the individual components of the date and time
const year = currentDate.getFullYear();
const monthIndex = currentDate.getMonth();
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthName = monthNames[monthIndex];

const dateTimeString = `${monthName} ${day}, ${year} ${hours}:${minutes}:${seconds}`;

let date = document.createElement("h4");
date.style.fontSize = "16px";
date.style.textAlign = "center";
date.style.padding = "5px";
date.style.display = "inline-block";
date.style.letterSpacing = "2px";
date.style.marginBottom = "1rem";
date.textContent = `${dateTimeString}`;

wrapper.appendChild(date);

setInterval(() => {
  let randomColor = getRandomColor();

  date.style.backgroundColor = randomColor;
}, 1000);

let skills = document.querySelector(".skills");

const topics = asabenehChallenges2020.challenges;
// Define the names for each row

// Get the rows
const rows = document.querySelectorAll(".row");

// Function to create details element with topics
const createTopicDetails = (topics) => {
  const topicDetails = document.createElement("details");

  const topicUl = document.createElement("ul");
  topics.forEach((topic) => {
    const listItem = document.createElement("li");
    listItem.textContent = topic;
    topicUl.appendChild(listItem);
  });
  topicDetails.appendChild(topicUl);

  return topicDetails;
};

// Add details element to the middle column of each row
rows.forEach((row, index) => {
  const middleColumn = document.createElement("div");
  middleColumn.classList.add("column", "middle");

  if (index < topics.length) {
    const topicDetails = createTopicDetails(topics[index].topics);

    const summary = document.createElement("summary");
    summary.textContent = rowNames[index];
    topicDetails.appendChild(summary);

    middleColumn.appendChild(topicDetails);
  }

  // Append middle column to row
  row.appendChild(middleColumn);
  wrapper.appendChild(row);
});
