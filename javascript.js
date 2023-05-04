
function toggleAnswer(question) {
  var answer = question.nextElementSibling;
  var answers = document.querySelectorAll(".answer");

  // Close all other answer blocks
  for (var i = 0; i < answers.length; i++) {
    if (answers[i] !== answer && answers[i].style.display === "block") {
      answers[i].style.display = "none";
    }
  }

  // Toggle the current answer block
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}