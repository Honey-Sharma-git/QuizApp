let questionsHtml = "";
questionAnswer.forEach((question) => {
  questionsHtml += ` 
  <section class="form__section">
    <h3 class="form__h3">${question.question}</h3>
    <div class="option-row">
        <input
        type="radio"
        name="${question.name}"
        id="${question.name}-opt-1"
        class="form__input-radio"
        />
        <label for="${question.name}-opt-1" class="form__input-label">${question.option1}</label>
    </div>
    <div class="option-row">
        <input
        type="radio"
        name="${question.name}"
        id="${question.name}-opt-2"
        class="form__input-radio"
        />
        <label for="${question.name}-opt-2" class="form__input-label">${question.option2}</label>
    </div>
    <div class="option-row">
        <input
        type="radio"
        name="${question.name}"
        id="${question.name}-opt-3"
        class="form__input-radio"
        />
        <label for="${question.name}-opt-3" class="form__input-label">${question.option3}</label>
    </div>
    <div class="form__button-container">
        <input type="button" value="Save" class="form__button" />
    </div>
  </section>
  `;
});
document.querySelector(".js-section__form").innerHTML = questionsHtml;
console.log(questionsHtml);
