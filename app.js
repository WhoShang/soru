(() => {
  const data = window.TEST_DATA;
  const welcome = document.querySelector("#welcome");
  const quiz = document.querySelector("#quiz");
  const result = document.querySelector("#result");
  const startButton = document.querySelector("#start-button");
  const questionCount = document.querySelector("#question-count");
  const questionNumber = document.querySelector("#question-number");
  const questionTitle = document.querySelector("#question-title");
  const answerList = document.querySelector("#answer-list");
  const progressTrack = document.querySelector(".progress-track");
  const progressFill = document.querySelector("#progress-fill");
  const backButton = document.querySelector("#back-button");
  const nextButton = document.querySelector("#next-button");
  const resultTitle = document.querySelector("#result-title");
  const resultDescription = document.querySelector("#result-description");
  let currentQuestion = 0;
  let answers = [];

  function isReady() {
    if (!data || !Array.isArray(data.houses) || !Array.isArray(data.questions)) return false;
    if (data.houses.length !== 4 || data.questions.length !== 20) return false;

    const houseIds = new Set(data.houses.map((house) => house.id));
    return data.houses.every((house) => house.id && house.name && house.description)
      && data.questions.every((question) => question.prompt
        && Array.isArray(question.options)
        && question.options.length >= 2
        && question.options.every((option) => option.text && houseIds.has(option.houseId)));
  }

  function show(view) {
    welcome.hidden = view !== "welcome";
    quiz.hidden = view !== "quiz";
    result.hidden = view !== "result";
  }

  function renderQuestion() {
    const question = data.questions[currentQuestion];
    const selected = answers[currentQuestion];
    questionCount.textContent = `${currentQuestion + 1} / ${data.questions.length}`;
    questionNumber.textContent = `SORU ${String(currentQuestion + 1).padStart(2, "0")}`;
    questionTitle.textContent = question.prompt;
    answerList.replaceChildren();

    question.options.forEach((option, index) => {
      const label = document.createElement("label");
      label.className = "answer-option";
      if (selected === index) label.classList.add("is-selected");

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = String(index);
      input.checked = selected === index;
      input.addEventListener("change", () => {
        answers[currentQuestion] = index;
        renderQuestion();
      });

      const marker = document.createElement("span");
      marker.className = "answer-marker";
      marker.setAttribute("aria-hidden", "true");
      const text = document.createElement("span");
      text.className = "answer-text";
      text.textContent = option.text;
      const arrow = document.createElement("span");
      arrow.className = "answer-arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "↗";

      label.append(input, marker, text, arrow);
      answerList.append(label);
    });

    const completed = currentQuestion + 1;
    progressFill.style.width = `${(completed / data.questions.length) * 100}%`;
    progressTrack.setAttribute("aria-valuemax", String(data.questions.length));
    progressTrack.setAttribute("aria-valuenow", String(completed));
    backButton.disabled = currentQuestion === 0;
    nextButton.disabled = selected === undefined;
    nextButton.querySelector("span").textContent = currentQuestion === data.questions.length - 1
      ? "Sonucu gör"
      : "Devam et";
  }

  function showResult() {
    const scores = new Map(data.houses.map((house) => [house.id, 0]));
    answers.forEach((optionIndex, questionIndex) => {
      const houseId = data.questions[questionIndex].options[optionIndex].houseId;
      scores.set(houseId, scores.get(houseId) + 1);
    });

    let winner = data.houses[0];
    for (const house of data.houses.slice(1)) {
      if (scores.get(house.id) > scores.get(winner.id)) winner = house;
    }

    resultTitle.textContent = winner.name;
    resultDescription.textContent = winner.description;
    show("result");
  }

  startButton.addEventListener("click", () => {
    if (!isReady()) return;
    currentQuestion = 0;
    answers = Array(data.questions.length);
    show("quiz");
    renderQuestion();
  });

  document.querySelector("#quit-button").addEventListener("click", () => show("welcome"));
  backButton.addEventListener("click", () => {
    if (currentQuestion > 0) {
      currentQuestion -= 1;
      renderQuestion();
    }
  });
  nextButton.addEventListener("click", () => {
    if (answers[currentQuestion] === undefined) return;
    if (currentQuestion === data.questions.length - 1) {
      showResult();
    } else {
      currentQuestion += 1;
      renderQuestion();
    }
  });
  document.querySelector("#restart-button").addEventListener("click", () => show("welcome"));

  if (isReady()) {
    startButton.disabled = false;
    startButton.querySelector("span").textContent = "Teste başla";
    document.querySelector("#content-notice").hidden = true;
  }
})();
