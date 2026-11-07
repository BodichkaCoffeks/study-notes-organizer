// const API_URL = "https://jsonplaceholder.typicode.com/posts?userId=2";

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

// const listContainer = document.querySelector("#notes-list");

// //Функція рендеру бере об'єкт з масиву даних, на його основі створює h3 та p та вже їх
// //додає у тег article, який після цього додається у контейнер та відображається на сторінці

//Функції ручного рендеру повністю видалено,
// оскільки їхню роботу тепер повністю виконує декларативний рендер через метод .map()
//   // Видаляємо тільки динамічні картки (з класом user-card)
//   listContainer
//     .querySelectorAll(".card.user-card")
//     .forEach((card) => card.remove());

//   for (let i = 0; i < array.length; i++) {
//     const note = array[i];
//     const cardElement = document.createElement("article");
//     const titleElement = document.createElement("h3");
//     const subjectElement = document.createElement("p");
//     // const pagesElement = document.createElement("p"); немає у JSON

//     titleElement.textContent = note.title;
//     subjectElement.textContent = note.body;
//     // pagesElement.textContent = note.pages; немає у JSON

//     // const checkboxElement = document.createElement("input");
//     // checkboxElement.type = "checkbox";
//     // checkboxElement.checked = note.examSoon;
//     // checkboxElement.classList.add("exam-checkbox"); чекбоксу немає у JSON

//     // Додаємо і "card", і "user-card"
//     cardElement.classList.add("card", "user-card");
//     cardElement.dataset.index = i;

//     if (note.examSoon) {
//       cardElement.classList.add("exam-soon");
//     }

//     cardElement.append(
//       titleElement,
//       subjectElement,
//       // pagesElement,
//       // checkboxElement, немає у JSON
//     );

//     listContainer.append(cardElement);
//   }
// };

// renderCard(notesData);
// const notesCountElement = document.querySelector("#notes-count");
// if (notesCountElement) {
//   notesCountElement.textContent = `Усього конспектів: ${notesData.length}`;
// }

// // Обробник відправки форми: збирає дані з полів, створює новий об'єкт конспекту, додає його до масиву, оновлює інтерфейс і очищує форму
// const form = document.querySelector("#add-note-form");

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

// const loadButton = document.querySelector("#refresh-btn");
// loadButton.addEventListener("click", loadData);
// async function loadData() {
//   const errorElement = document.querySelector("#error-message");
//   const loadingElement = document.querySelector("#loading");
//   errorElement.textContent = "";
//   loadingElement.style.display = "inline-block";
//   loadButton.disabled = true;

//   try {
//     const response = await fetch(API_URL);
//     if (!response.ok) {
//       throw new Error(`Помилка HTTP: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Отримані дані з API:", data);
//     renderCard(data);
//   } catch (error) {
//     errorElement.textContent = "Конспекти тимчасово недоступні";
//     console.error("Технічні деталі помилки для розробника:", error);
//   } finally {
//     loadingElement.style.display = "none";
//     loadButton.disabled = false;
//   }
// }

const STORAGE_KEY = "notes";

// Зберігає масив конспектів у localStorage у вигляді JSON-рядка
function saveToLocalStorage(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error("Не вдалося зберегти дані:", error);
  }
}

// Завантажує масив конспектів із localStorage.
function loadFromLocalStorage() {
  try {
    const json = localStorage.getItem(STORAGE_KEY);
    if (json === null) {
      return [];
    }
    const items = JSON.parse(json);
    return Array.isArray(items) ? items : [];
  } catch (error) {
    console.error("Помилка розбору даних із localStorage:", error);
    return [];
  }
}

// Тепер масив спочатку порожній і заповнюється даними з IndexedDB у refreshList().
// const замінено на let, бо масив повністю перезаписується після кожного читання з бази
let notesData = [];

// Контейнер, у який додаються картки конспектів
const listContainer = document.querySelector("#notes-list");

// Оновлює текст лічильника конспектів
const updateCount = () => {
  const notesCountElement = document.querySelector("#notes-count");
  if (notesCountElement) {
    notesCountElement.textContent = `Усього конспектів: ${notesData.length}`;
  }
};

// Бере масив даних, видаляє старі динамічні картки та створює нові
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
    const pagesElement = document.createElement("p");

    titleElement.textContent = note.topic;
    subjectElement.textContent = note.subject;
    pagesElement.textContent = note.pages;

    const checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.checked = note.examSoon;
    checkboxElement.classList.add("exam-checkbox");

    // Кнопка видалення конспекту
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Видалити";
    deleteButton.classList.add("delete-btn");

    // Додаємо і "card", і "user-card"
    cardElement.classList.add("card", "user-card");
    // Зберігаємо індекс запису в масиві, щоб знати, який саме конспект змінюється
    cardElement.dataset.index = i;

    if (note.examSoon) {
      cardElement.classList.add("exam-soon");
    }

    cardElement.append(
      titleElement,
      subjectElement,
      pagesElement,
      checkboxElement,
      deleteButton,
    );

    listContainer.append(cardElement);
  }
  updateCount();
};

// Читає всі записи з IndexedDB через getAllItems(),
// оновлює масив notesData і перемальовує список. Викликається під час запуску
// та після кожної CRUD-операції
async function refreshList() {
  try {
    notesData = await getAllItems();
    renderCard(notesData);
  } catch (error) {
    console.error("Не вдалося завантажити конспекти з IndexedDB:", error);
  }
}

// Обробник відправки форми: збирає дані з полів, створює об'єкт з унікальним id,
// записує його в IndexedDB, оновлює інтерфейс і очищує форму
const form = document.querySelector("#add-note-form");

// крок 9: обробник став async, щоб можна було використовувати await
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const subject = document.querySelector("#subject").value;
  const topic = document.querySelector("#topic").value;
  const pages = Number(document.querySelector("#pages").value);
  const examSoon = document.querySelector("#examSoon").checked;
  const newNote = {
    id: Date.now() + Math.floor(Math.random() * 1000), // унікальний id
    subject: subject,
    topic: topic,
    pages: pages,
    examSoon: examSoon,
  };

  // замість notesData.push(...) і saveToLocalStorage(...)
  // запис додається в IndexedDB, після чого список оновлюється з бази
  try {
    await addItem(newNote);
    await refreshList();
    form.reset();
  } catch (error) {
    console.error("Не вдалося додати конспект:", error);
  }
});

const topicInput = document.querySelector("#topic");
topicInput.addEventListener("input", () => {
  const value = topicInput.value;
  if (value.length > 0 && value.length < 3) {
    topicInput.setCustomValidity("Тема повинна містити щонайменше 3 символи!");
  } else if (value.length >= 3 && value[0] !== value[0].toUpperCase()) {
    topicInput.setCustomValidity("Перша літера теми має бути великою!");
  } else {
    topicInput.setCustomValidity("");
  }
});

listContainer.addEventListener("change", async (event) => {
  if (event.target.classList.contains("exam-checkbox")) {
    const card = event.target.closest(".card");
    if (!card || card.dataset.index === undefined) return;

    const index = Number(card.dataset.index);

    // замість зміни notesData[index] і saveToLocalStorage(...)
    // створюємо оновлену копію запису й зберігаємо її через updateItem,
    // після чого список оновлюється з бази
    try {
      await updateItem({ ...notesData[index], examSoon: event.target.checked });
      await refreshList();
    } catch (error) {
      console.error("Не вдалося оновити конспект:", error);
    }
  }
});

// Обробник кліку на кнопку "Видалити": видаляє запис
// з IndexedDB й перемальовує список
listContainer.addEventListener("click", async (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const card = event.target.closest(".card");
    if (!card || card.dataset.index === undefined) return;

    const index = Number(card.dataset.index);

    // замість notesData.splice(...) і saveToLocalStorage(...)
    // видаляємо запис з IndexedDB за його id і оновлюємо список з бази
    try {
      await deleteItem(notesData[index].id);
      await refreshList();
    } catch (error) {
      console.error("Не вдалося видалити конспект:", error);
    }
  }
});

// Назва бази даних
const DB_NAME = "notesOrganizerDB";

// Версія схеми
const DB_VERSION = 1;

// Назва сховища об'єктів, де лежать конспекти
const STORE_NAME = "notes";

// Поле запису, яке є унікальним ключем
const KEY_PATH = "id";

// Відкриває базу даних IndexedDB і повертає Promise з об'єктом бази
function openDB() {
  if (!window.indexedDB) {
    reject(new Error("IndexedDB не підтримується"));
    return;
  }
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 0);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: KEY_PATH });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Додавання конспекту у базу
async function addItem(item) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    store.put(item);
    transaction.oncomplete = () => resolve(item);
    transaction.onerror = () => reject(transaction.error);
  });
}

// Оновлюємо наявний конспект
async function updateItem(item) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    store.put(item);
    transaction.oncomplete = () => resolve(item);
    transaction.onerror = () => reject(transaction.error);
  });
}

// Повертає масив усіх конспектів зі сховища
async function getAllItems() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Видаляє конспект за його id
async function deleteItem(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    store.delete(id);

    transaction.oncomplete = () => resolve(id);
    transaction.onerror = () => reject(transaction.error);
  });
}

const MIGRATION_FLAG = "notesMigrated";

// Переносить конспекти з localStorage в IndexedDB
async function migrateFromLocalStorage() {
  if (localStorage.getItem(MIGRATION_FLAG) === "true") {
    return;
  }

  try {
    const existingItems = await getAllItems();

    if (existingItems.length === 0) {
      const oldItems = loadFromLocalStorage();

      for (const item of oldItems) {
        if (item.id === undefined) {
          item.id = Date.now() + Math.floor(Math.random() * 1000);
        }
        await addItem(item);
      }
      console.log(`Міграція завершена: перенесено записів: ${oldItems.length}`);
    }

    localStorage.setItem(MIGRATION_FLAG, "true");
  } catch (error) {
    console.error("Помилка міграції:", error);
  }
}

function showDbError(message) {
  let box = document.querySelector("#db-error");
  if (!box) {
    box = document.createElement("div");
    box.id = "db-error";
    box.style.cssText =
      "margin: 1rem 0; padding: 0.75rem 1rem; border: 1px solid #dc3545; " +
      "background: #fff5f5; color: #b02a37; border-radius: 6px;";
    document.querySelector("main").prepend(box);
  }
  box.textContent = message;

  const submitButton = form.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.disabled = true;
  }
}

// async function init() {
//   await migrateFromLocalStorage();
//   await refreshList();
// }

async function init() {
  try {
    await openDB();
  } catch (error) {
    console.error("Не вдалося відкрити IndexedDB:", error);
    showDbError(
      "Не вдалося відкрити локальну базу даних. Можливо, у вашому браузері " +
        "вимкнено IndexedDB або увімкнено режим приватного перегляду. " +
        "Спробуйте відкрити сторінку в звичайному режимі.",
    );
    return;
  }

  await migrateFromLocalStorage();
  await refreshList();
}

init();
