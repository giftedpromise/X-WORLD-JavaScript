import { asabenehChallenges2020 } from "./info-data.js";

console.log("Challenges Data:", asabenehChallenges2020);

let wrapper = document.querySelector(".wrapper");

let title = document.createElement("h1");
title.className = "title";
title.style.fontSize = "24px";
title.textContent = `${asabenehChallenges2020.description} in ${asabenehChallenges2020.challengeYear}`;
wrapper.appendChild(title);
