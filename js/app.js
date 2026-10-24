const API_URL = "https://jsonplaceholder.typicode.com/posts?userId=2";

// console.log("JS підключено!");
// const notes = [
//   {
//     subject: "Алгебра",
//     pages: 45,
//     examSoon: true,
//   },
//   {
//     subject: "Історія",
//     pages: 20,
//     examSoon: false,
//   },
//   {
//     subject: "Географія",
//     pages: 70,
//     examSoon: true,
//   },
//   {
//     subject: "Фізика",
//     pages: 54,
//     examSoon: false,
//   },
//   {
//     subject: "Хімія",
//     pages: 34,
//     examSoon: true,
//   },
//   {
//     subject: "Геометрія",
//     pages: 99,
//     examSoon: true,
//   },
// ];

// // Створюємо об'єкт для збереження кількості: { "Алгебра": 3, "Фізика": 2}
// const counts = {};

// //Масив предметів, з яких скоро буде проведено екзамен
// const exam_soom = [];
// //Функція для підрахунку кількості конспектів та кількості предметів, з яких скоро буде екзамен
// function checkEachSubjext() {
//   let j = 0;
//   // Цикл for підраховує кількість конспектів по кожному предмету
//   for (let i = 0; i < notes.length; i++) {
//     const subjectName = notes[i].subject;

//     // Якщо такий предмет уже є в об'єкті — додаємо +1, якщо немає — починаємо з 1
//     if (counts[subjectName]) {
//       counts[subjectName] += 1;
//     } else {
//       counts[subjectName] = 1;
//     }
//     //Якщо скоро екзамен, тоді додаємо
//     if (notes[i].examSoon) {
//       exam_soom[j] = notes[i].subject;
//       j++;
//     }
//     //Якщо не скоро - пропускаємо цю ітерацію
//     else {
//       continue;
//     }
//   }
//   console.log("Кількість конспектів по кожному предмету:", counts);
//   console.log("Предмети, з яких скоро буде екзамен:", exam_soom);
// }

// //Стрілкова функція, яка повертає кількість сторінок, яку потрібно читати в день, щоб підготуватись до екзамену
// const pagesPerDay = (pages, daysLeft) => Math.ceil(pages / daysLeft);
// //Функція рахує кількість сторінок для предмету Алгебра при умові, що екзамен через  дні
// console.log(
//   `Щоб підготуватись до екзамену з алгебри, потрібно читати ${pagesPerDay(45, 3)} сторінок`,
// );
// checkEachSubjext();

// const subject = document.querySelector("#notes-list .card");
// if (subject) {
//   subject.remove();
// }

// const notesData = [];

const listContainer = document.querySelector("#notes-list");

// //Функція рендеру бере об'єкт з масиву даних, на його основі створює h3 та p та вже їх
// //додає у тег article, який після цього додається у контейнер та відображається на сторінці
const renderCard = (array) => {
  // Видаляємо тільки динамічні картки (з класом user-card)
  listContainer
    .querySelectorAll(".card.user-card")
    .forEach((card) => card.remove());

  for (let i = 0; i < array.length; i++) {
    const note = array[i];
    const cardElement = document.createElement("article");
    const titleElement = document.createElement("h3");
    const subjectElement = document.createElement("p");
    // const pagesElement = document.createElement("p"); немає у JSON

    titleElement.textContent = note.title;
    subjectElement.textContent = note.body;
    // pagesElement.textContent = note.pages; немає у JSON

    // const checkboxElement = document.createElement("input");
    // checkboxElement.type = "checkbox";
    // checkboxElement.checked = note.examSoon;
    // checkboxElement.classList.add("exam-checkbox"); чекбоксу немає у JSON

    // Додаємо і "card", і "user-card"
    cardElement.classList.add("card", "user-card");
    cardElement.dataset.index = i;

    if (note.examSoon) {
      cardElement.classList.add("exam-soon");
    }

    cardElement.append(
      titleElement,
      subjectElement,
      // pagesElement,
      // checkboxElement, немає у JSON
    );

    listContainer.append(cardElement);
  }
};

// renderCard(notesData);
// const notesCountElement = document.querySelector("#notes-count");
// if (notesCountElement) {
//   notesCountElement.textContent = `Усього конспектів: ${notesData.length}`;
// }

// // Обробник відправки форми: збирає дані з полів, створює новий об'єкт конспекту, додає його до масиву, оновлює інтерфейс і очищує форму
// const form = document.querySelector("#add-note-form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const subject = document.querySelector("#subject").value;
//   const topic = document.querySelector("#topic").value;
//   const pages = Number(document.querySelector("#pages").value);
//   const examSoon = document.querySelector("#examSoon").checked;
//   const newNote = {
//     subject: subject,
//     topic: topic,
//     pages: pages,
//     examSoon: examSoon,
//   };
//   notesData.push(newNote);
//   renderCard(notesData);
//   form.reset();
// });

// // Обробник введення тексту в поле теми: перевіряє довжину та наявність великої першої літери у реальному часі й виводить кастомні помилки валідації
// const topicInput = document.querySelector("#topic");
// topicInput.addEventListener("input", () => {
//   const value = topicInput.value;
//   console.log(value);
//   if (value.length > 0 && value.length < 3) {
//     topicInput.setCustomValidity("Тема повинна містити щонайменше 3 символи!");
//   } else if (value.length >= 3 && value[0] !== value[0].toUpperCase()) {
//     topicInput.setCustomValidity("Перша літера теми має бути великою!");
//   } else {
//     topicInput.setCustomValidity("");
//   }
// });

// // Обробник зміни стану чекбокса (делегування подій): оновлює стан examSoon у масиві та перемикає візуальний клас картки
// listContainer.addEventListener("change", (event) => {
//   if (event.target.classList.contains("exam-checkbox")) {
//     const card = event.target.closest(".card");
//     if (!card || card.dataset.index === undefined) return;

//     const index = Number(card.dataset.index);

//     notesData[index].examSoon = event.target.checked;
//     if (event.target.checked) {
//       card.classList.add("exam-soon");
//     } else {
//       card.classList.remove("exam-soon");
//     }
//     console.log("Оновлений масив notesData:", notesData);
//   }
// });

//  Завантаження конспектів для навчання (Варіант 16)
//  API: https://jsonplaceholder.typicode.com/posts?userId=2

const loadButton = document.querySelector("#refresh-btn");
loadButton.addEventListener("click", loadData);
async function loadData() {
  const errorElement = document.querySelector("#error-message");
  const loadingElement = document.querySelector("#loading");
  errorElement.textContent = "";
  loadingElement.style.display = "inline-block";
  loadButton.disabled = true;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Помилка HTTP: ${response.status}`);
    }
    const data = await response.json();
    console.log("Отримані дані з API:", data);
    renderCard(data);
  } catch (error) {
    errorElement.textContent = "Конспекти тимчасово недоступні";
    console.error("Технічні деталі помилки для розробника:", error);
  } finally {
    loadingElement.style.display = "none";
    loadButton.disabled = false;
  }
}
