let questions = document.querySelectorAll(".content .box .question");

questions.forEach((question) => {
    question.onclick = () => {
        if (question.classList.contains("questionActive")) {
            question.classList.remove("questionActive");
            question.classList.add("question-inactive");
            question.parentElement.children[1].classList.add("answer");
            question.parentElement.children[1].classList.remove("answerActive");
        }
        else {
            question.classList.remove("question-inactive");
            question.classList.add("questionActive");
            question.parentElement.children[1].classList.remove("answer");
            question.parentElement.children[1].classList.add("answerActive");

        }
    }
})