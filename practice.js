/*
Exercise: Level 1
Create an index.html file and put four p elements as above: Get the first paragraph 
by using document.querySelector(tagname) and tag name
Get each of the the paragraph using document.querySelector('#id') and by their id
Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
Loop through the nodeList and get the text content of each paragraph
Set a text content to paragraph the fourth paragraph,Fourth Paragraph
Set id and class attribute for all the paragraphs using different attribute setting methods

*/
const firstParagraph = document.querySelector("p");
console.log(firstParagraph);

const firstParagraph1 = document.querySelector("#first-paragraph");
const secondParagraph = document.querySelector("#second-paragraph");
const thirdParagraph = document.querySelector("#third-paragraph");
const fourthParagraph = document.querySelector("#fourth-paragraph");

console.log("First paragraph:", firstParagraph1);
console.log("Second paragraph:", secondParagraph);
console.log("Third paragraph:", thirdParagraph);
console.log("Fourth paragraph:", fourthParagraph);

const allParagraphs = document.querySelectorAll("p");

console.log(allParagraphs);
console.log(allParagraphs.length);
for (i = 0; i < allParagraphs.length; i++) {
  console.log(allParagraphs[i]);
}

allParagraphs.forEach((paragraph, index) => {
  console.log(`Paragraph ${index + 1}:`, paragraph);
});

allParagraphs[3].textContent =
  "My name is Promise Nwankwo and I am Frontend developer.";
