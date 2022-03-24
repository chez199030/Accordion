"use strict";
this.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");
  questions.forEach((question) =>
    question.addEventListener("click", () => {
      if (
        question
          .closest(".accordion_question_answwer")
          .classList.contains("active")
      ) {
        question
          .closest(".accordion_question_answwer")
          .classList.toggle("active");
      } else {
        questions.forEach((question) => {
          question
            .closest(".accordion_question_answwer")
            .classList.remove("active");
        });
        question.closest(".accordion_question_answwer").classList.add("active");
      }
    })
  );
});

// this.addEventListener("DOMContentLoaded", () => {
//   const questions = document.querySelectorAll(".question");
//   questions.forEach((question) =>
//     question.addEventListener("click", () => {
//       if (
//         question
//           .closest(".question-answer__accordion")
//           .classList.contains("active")
//       ) {
//         question
//           .closest(".question-answer__accordion")
//           .classList.toggle("active");
//       } else {
//         questions.forEach((question) =>
//           question
//             .closest(".question-answer__accordion")
//             .classList.remove("active")
//         );
//         question.closest(".question-answer__accordion").classList.add("active");
//       }
//     })
//   );
// });
