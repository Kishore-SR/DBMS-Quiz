document.addEventListener("DOMContentLoaded", () => {
    const startForm = document.getElementById("start-form");
    const moduleContainer = document.getElementById("module-container");
    const quizContainer = document.getElementById("quiz-container");
    const startContainer = document.getElementById("start-container");
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const submitBtn = document.getElementById("submit-btn");
    let score = 0;
  
    let questions = [];
    let currentQuestionIndex = 0;
    let studentId = sessionStorage.getItem("studentId");
    let selectedModule = null;
  
    // Start form submission
    startForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const usn = document.getElementById("usn").value;
  
      const response = await fetch("/api/saveStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, usn }),
      });
  
      const result = await response.json();
      studentId = result.studentId;
      sessionStorage.setItem("studentId", studentId);
  
      startContainer.style.display = "none";
      moduleContainer.style.display = "block";
    });
  
    // Module button click event listener
    document.querySelectorAll(".module-btn").forEach((button) => {
      button.addEventListener("click", async () => {
        const module = button.getAttribute("data-module");
        selectedModule = module;
  
        try {
          const response = await fetch(`/api/questions/${module}`);
          if (!response.ok) {
            throw new Error("Failed to fetch questions");
          }
          questions = await response.json();
          currentQuestionIndex = 0;
          displayQuestion();
  
          moduleContainer.style.display = "none";
          quizContainer.style.display = "block";
        } catch (error) {
          console.error("Error fetching questions:", error);
        }
      });
    });
  
    // Previous button click event listener
    prevBtn.addEventListener("click", () => {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
      }
    });
  
    // Next button click event listener
    nextBtn.addEventListener("click", () => {
      const score = calculateScore();
  
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
      } else {
        quizContainer.style.display = "none";
        feedbackContainer.style.display = "block";
  
        const finalScore = calculateScore();
        const marksDisplay = document.getElementById("marks-display");
        marksDisplay.textContent = `Module ${selectedModule} Score: ${finalScore} out of ${questions.length}`;
      }
    });
  
    // Submit button click event listener
    submitBtn.addEventListener("click", async () => {
      const score = calculateScore();
      try {
        const response = await fetch("/api/saveScore", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ studentId, module: selectedModule, score }),
        });
        if (!response.ok) {
          throw new Error("Failed to save score");
        }
  
        sessionStorage.setItem("score", score);
        sessionStorage.setItem("module", selectedModule);
  
        window.location.href = "../feedback.html";
      } catch (error) {
        console.error("Error saving score:", error);
      }
    });
  
    // Function to display current question
    function displayQuestion() {
      const question = questions[currentQuestionIndex];
      questionContainer.innerHTML = `<h2>${currentQuestionIndex + 1}. ${question.question}</h2>`;
  
      optionsContainer.innerHTML = "";
  
      for (let i = 0; i < 4; i++) {
        const optionLabel = document.createElement("label");
        const optionInput = document.createElement("input");
        optionInput.type = "radio";
        optionInput.name = "option";
        optionInput.value = i;
        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(question[`option${i + 1}`]));
        optionsContainer.appendChild(optionLabel);
      }
  
      submitBtn.style.display = currentQuestionIndex === questions.length - 1 ? "block" : "none";
      nextBtn.style.display = currentQuestionIndex === questions.length - 1 ? "none" : "block";
    }
  
    // Function to calculate score
    function calculateScore() {
      const selectedOptions = document.querySelectorAll('input[name="option"]:checked');
      selectedOptions.forEach((option, index) => {
        if (parseInt(option.value) === questions[index].answer) {
          score++;
        }
      });
      return score;
    }
  });
  