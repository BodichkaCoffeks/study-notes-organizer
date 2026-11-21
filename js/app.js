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
//контейнер створюється разом із головною сторінкою,
// тому спочатку null і заповнюється у homeView()
let listContainer = null;

//єдиний контейнер, у який роутер рендерить усі «сторінки»
const app = document.querySelector("#app");

//що перемальовувати після читання з IndexedDB — задає поточна view
let onDataChange = () => {};

// ВИПРАВЛЕНО: додано фільтр за предметом
let subjectFilter = "";

// Випадаючий список фільтра створюється з JS і вставляється перед списком карток
const filterSelect = document.createElement("select");
filterSelect.id = "subject-filter";
filterSelect.setAttribute("aria-label", "Фільтр за предметом");
//вставка фільтра перед списком перенесена в homeView(), бо #notes-list створюється при кожному рендері

// Заповнює фільтр унікальними предметами з масиву, який повернув getAllItems()
function updateFilterOptions() {
  const subjects = [...new Set(notesData.map((note) => note.subject))].sort();
  if (subjectFilter && !subjects.includes(subjectFilter)) {
    subjectFilter = "";
  }
  filterSelect.innerHTML = "";
  filterSelect.append(new Option("Усі предмети", ""));
  subjects.forEach((subject) =>
    filterSelect.append(new Option(subject, subject)),
  );
  filterSelect.value = subjectFilter;
}

// Фільтрація виконується на клієнті над масивом із getAllItems()
const getFilteredNotes = () =>
  subjectFilter
    ? notesData.filter((note) => note.subject === subjectFilter)
    : notesData;

filterSelect.addEventListener("change", () => {
  subjectFilter = filterSelect.value;
  renderCard(getFilteredNotes());
});

// Оновлює текст лічильника конспектів
const updateCount = () => {
  const notesCountElement = document.querySelector("#notes-count");
  if (notesCountElement) {
    // ВИПРАВЛЕНО: лічильник враховує фільтр за предметом
    //поза головною (listContainer = null) показуємо загальну кількість
    const shown = listContainer
      ? listContainer.querySelectorAll(".card.user-card").length
      : notesData.length;
    notesCountElement.textContent =
      subjectFilter && listContainer
        ? `Показано: ${shown} з ${notesData.length}`
        : `Усього конспектів: ${notesData.length}`;
  }
};

// прогрес-бар тепер у шаблоні головної сторінки, елементи знаходяться в homeView()
let progressBar = null;
let progressTrack = null;
let progressText = null;
let progressTitle = null;

function updateProgress(notes) {
  const total = notes.length;
  const learnedCount = notes.filter((note) => note.learned).length;
  // Захист від ділення на нуль, коли конспектів ще немає
  const percent = total === 0 ? 0 : Math.round((learnedCount / total) * 100);

  progressBar.style.width = `${percent}%`;
  // Коли вивчено все, смуга змінює колір
  progressBar.classList.toggle(
    "progress-bar--done",
    total > 0 && percent === 100,
  );

  // Текстовий підпис і атрибут для доступності
  progressText.textContent = `${learnedCount} з ${total} (${percent}%)`;
  progressTitle.textContent = subjectFilter
    ? `Вивчено тем: ${subjectFilter}`
    : "Вивчено тем: усі предмети";
  progressTrack.setAttribute("aria-valuenow", percent);
}

// створення однієї картки винесено з renderCard,
// щоб ту саму функцію рендеру використовували і список, і сторінка деталей
const createNoteCard = (note, withLink = true) => {
  const cardElement = document.createElement("article");
  const titleElement = document.createElement("h3");
  const subjectElement = document.createElement("p");
  const pagesElement = document.createElement("p");

  // заголовок — посилання на сторінку деталей, data-link вмикає клієнтську навігацію
  if (withLink) {
    const detailLink = document.createElement("a");
    detailLink.href = `#/notes/${note.id}`;
    detailLink.dataset.link = "";
    detailLink.textContent = note.topic;
    titleElement.append(detailLink);
  } else {
    titleElement.textContent = note.topic;
  }
  subjectElement.textContent = note.subject;
  pagesElement.textContent = note.pages;

  const checkboxElement = document.createElement("input");
  checkboxElement.type = "checkbox";
  checkboxElement.checked = note.examSoon;
  checkboxElement.classList.add("exam-checkbox");

  // Чекбокс «Вивчено». Ним користувач змінює дані,
  // від яких залежить прогрес бар, тобто анімація пов'язана з реальною дією.
  // Boolean() потрібен, бо старі записи в базі можуть не мати поля learned.
  const learnedLabel = document.createElement("label");
  const learnedCheckbox = document.createElement("input");
  learnedCheckbox.type = "checkbox";
  learnedCheckbox.checked = Boolean(note.learned);
  learnedCheckbox.classList.add("learned-checkbox");
  learnedLabel.append(learnedCheckbox, " Вивчено");

  // Кнопка видалення конспекту
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Видалити";
  deleteButton.classList.add("delete-btn");

  // Додаємо і "card", і "user-card"
  cardElement.classList.add("card", "user-card");
  // ВИПРАВЛЕНО: замість індексу використовується id, щоб фільтр не ламав чекбокс і видалення
  cardElement.dataset.id = note.id;

  if (note.examSoon) {
    cardElement.classList.add("exam-soon");
  }

  cardElement.append(
    titleElement,
    subjectElement,
    pagesElement,
    checkboxElement,
    learnedLabel, //додаємо чекбокс «Вивчено» в картку
    deleteButton,
  );

  return cardElement;
};

// Бере масив даних, видаляє старі динамічні картки та створює нові
const renderCard = (array) => {
  // Видаляємо тільки динамічні картки (з класом user-card)
  listContainer
    .querySelectorAll(".card.user-card")
    .forEach((card) => card.remove());

  for (let i = 0; i < array.length; i++) {
    listContainer.append(createNoteCard(array[i]));
  }
  updateCount();
  // Після кожного перемальовування списку оновлюємо прогрес-бар.
  // renderCard викликається і після завантаження з бази, і при зміні фільтра,
  // тому смуга завжди відповідає тим конспектам, які зараз видно на екрані
  updateProgress(array);
};

// Читає всі записи з IndexedDB через getAllItems(),
// оновлює масив notesData і перемальовує список. Викликається під час запуску
// та після кожної CRUD-операції
async function refreshList() {
  try {
    notesData = await getAllItems();
    // ВИПРАВЛЕНО: заповнюємо фільтр і рендеримо відфільтрований масив (було renderCard(notesData))
    // фільтр і рендер списку перенесено в onDataChange головної view (див. homeView)
    onDataChange();
  } catch (error) {
    console.error("Не вдалося завантажити конспекти з IndexedDB:", error);
  }
}

// Обробник відправки форми: збирає дані з полів, створює об'єкт з унікальним id,
// записує його в IndexedDB, оновлює інтерфейс і очищує форму
// форма є в шаблоні головної сторінки, тому знаходиться в homeView()
let form = null;

// крок 9: обробник став async, щоб можна було використовувати await
// обробник став іменованою функцією, homeView() підключає його при кожному рендері
const onFormSubmit = async function (event) {
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
    // Новий конспект спочатку не вивчений, тому
    // після додавання загальний відсоток прогресу плавно зменшується.
    learned: false,
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
};

//поле теми знаходиться в homeView(), обробник підключається там же
let topicInput = null;
const onTopicInput = () => {
  const value = topicInput.value;
  if (value.length > 0 && value.length < 3) {
    topicInput.setCustomValidity("Тема повинна містити щонайменше 3 символи!");
  } else if (value.length >= 3 && value[0] !== value[0].toUpperCase()) {
    topicInput.setCustomValidity("Перша літера теми має бути великою!");
  } else {
    topicInput.setCustomValidity("");
  }
};

// Обробник зміни чекбоксів. Тепер обробляє
// Два чекбокси: «Скоро іспит» і «Вивчено»
// Зміна записується в IndexedDB, потім refreshList() перемальовує картки і
// викликає updateProgress(), тому смуга прогресу плавно змінює ширину
//обробник іменований, щоб його можна було підключити і до списку, і до сторінки деталей
const onCardsChange = async (event) => {
  const isExam = event.target.classList.contains("exam-checkbox");
  const isLearned = event.target.classList.contains("learned-checkbox");
  if (!isExam && !isLearned) return;

  const card = event.target.closest(".card");
  if (!card || card.dataset.id === undefined) return;

  // ВИПРАВЛЕНО: пошук запису за id (а не за індексом), бо після фільтрації індекси не збігаються
  const note = notesData.find((n) => String(n.id) === card.dataset.id);
  if (!note) return;

  // Визначаємо, яке саме поле змінилося
  const changes = isExam
    ? { examSoon: event.target.checked }
    : { learned: event.target.checked };

  // створюємо оновлену копію запису й зберігаємо її через updateItem,
  // після чого список оновлюється з бази
  try {
    await updateItem({ ...note, ...changes });
    await refreshList();
  } catch (error) {
    console.error("Не вдалося оновити конспект:", error);
  }
};

// Обробник кліку на кнопку "Видалити": видаляє запис
// з IndexedDB й перемальовує список
const onCardsClick = async (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const card = event.target.closest(".card");
    if (!card || card.dataset.id === undefined) return;

    // ВИПРАВЛЕНО: пошук запису за id (а не за індексом) через фільтр
    const note = notesData.find((n) => String(n.id) === card.dataset.id);
    if (!note) return;

    // видаляємо запис з IndexedDB за його id і оновлюємо список з бази
    //після видалення refreshList перераховує і прогрес-бар)
    try {
      await deleteItem(note.id);
      //якщо конспект видалено зі сторінки деталей — повертаємось на головну
      if (getPath().startsWith("/notes/")) {
        navigate("/");
        return;
      }
      await refreshList();
    } catch (error) {
      console.error("Не вдалося видалити конспект:", error);
    }
  }
};

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
    const request = indexedDB.open(DB_NAME, DB_VERSION); //ВИПРАВЛЕННЯ: відкриваємо з версією, яка вказана у константі, а не з версією 0
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

// повідомлення зберігається, щоб renderRoute() показував його після кожного перемальовування #app
let dbErrorMessage = "";

function showDbError(message = dbErrorMessage) {
  dbErrorMessage = message;
  if (!message) return;
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

  // форма тепер у #app і може бути відсутня на іншій сторінці
  const submitButton = app.querySelector(
    '#add-note-form button[type="submit"]',
  );
  if (submitButton) {
    submitButton.disabled = true;
  }
}

// таблиця маршрутів (hash-роутинг). Кожен запис — шаблон шляху та view-функція.
// Сегмент виду ":name" — параметр, matchRoute() передає його значення у view.
// "/" — головна (форма, прогрес, список з IndexedDB), "/subjects[/:subject]" — розділи
// предметів, "/notes/:id" — сторінка деталей одного конспекту.
const routes = [
  { path: "/", view: homeView },
  { path: "/subjects", view: subjectsView },
  { path: "/subjects/:subject", view: subjectsView },
  { path: "/notes/:id", view: noteDetailView },
];

// Повертає поточний шлях із location.hash: "#/notes/5" -> "/notes/5", порожній хеш -> "/"
function getPath() {
  let path = location.hash.slice(1).split("?")[0];
  if (!path.startsWith("/")) path = "/" + path;
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return path;
}

// Безпечне декодування параметра (некоректний %-рядок не ламає роутер)
function decodeParam(value) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return value;
  }
}

//Порівнює шлях з патернами routes, витягує параметри
// Повертає { route, params } або null, якщо жоден маршрут не підійшов
function matchRoute(path) {
  const pathParts = path.split("/").filter(Boolean);
  for (const route of routes) {
    const patternParts = route.path.split("/").filter(Boolean);
    if (patternParts.length !== pathParts.length) continue;

    const params = {};
    const matches = patternParts.every((part, i) => {
      if (part.startsWith(":")) {
        params[part.slice(1)] = decodeParam(pathParts[i]);
        return true;
      }
      return part === pathParts[i];
    });
    if (matches) return { route, params };
  }
  return null;
}

// перехід на маршрут через зміну хеша (hashchange перемалює вміст)
function navigate(path) {
  if (getPath() === path) {
    renderRoute(); // той самий хеш події не викличе, тому малюємо вручну
  } else {
    location.hash = path;
  }
}

// Очищує #app і вставляє в нього копію шаблону з index.html
function renderTemplate(templateId) {
  app.innerHTML = "";
  app.append(document.querySelector(`#${templateId}`).content.cloneNode(true));
}

// React-острівець (index.html) монтується в контейнер, який з'являється лише на сторінці предметів
let reactRoot = null;
function mountReact(container) {
  const mount = () => {
    if (container.isConnected) reactRoot = window.mountAlgebraApp(container);
  };
  if (window.mountAlgebraApp) {
    mount();
  } else {
    window.addEventListener("react-ready", mount, { once: true });
  }
}

// view головної — очищає #app, клонує шаблон і викликає наявні функції рендеру
// (renderCard, updateProgress, фільтр) з даними з IndexedDB
function homeView() {
  renderTemplate("tpl-home");
  listContainer = app.querySelector("#notes-list");
  form = app.querySelector("#add-note-form");
  topicInput = app.querySelector("#topic");
  progressBar = app.querySelector("#progress-bar");
  progressTrack = app.querySelector("#progress-track");
  progressText = app.querySelector("#progress-text");
  progressTitle = app.querySelector("#progress-title");

  listContainer.before(filterSelect);
  form.addEventListener("submit", onFormSubmit);
  topicInput.addEventListener("input", onTopicInput);
  listContainer.addEventListener("change", onCardsChange);
  listContainer.addEventListener("click", onCardsClick);

  onDataChange = () => {
    updateFilterOptions();
    renderCard(getFilteredNotes());
  };
  refreshList();
}

// view предметів — статичні розділи з шаблону; з параметром :subject лишається один розділ
function subjectsView({ subject } = {}) {
  renderTemplate("tpl-subjects");
  if (subject) {
    app.querySelectorAll("section").forEach((section) => {
      if (section.id !== subject) section.remove();
    });
    if (!app.querySelector("section")) {
      notFoundView();
      return;
    }
  }
  onDataChange = updateCount;
  refreshList();

  const algebraContainer = app.querySelector("#algebra-app");
  if (algebraContainer) mountReact(algebraContainer);
}

// сторінка деталей — знаходить запис за id серед даних з IndexedDB і показує тільки його
function noteDetailView({ id }) {
  app.textContent = "Завантаження...";

  onDataChange = () => {
    updateCount();
    app.innerHTML = "";
    const note = notesData.find((n) => String(n.id) === id);
    if (!note) {
      notFoundView();
      return;
    }

    const section = document.createElement("section");
    const backLink = document.createElement("a");
    backLink.href = "#/";
    backLink.dataset.link = "";
    backLink.className = "back-link";
    backLink.textContent = "← До списку конспектів";

    const heading = document.createElement("h2");
    heading.textContent = "Деталі конспекту";

    // Повторно використовуємо createNoteCard() — без посилання на саму себе
    const cardHolder = document.createElement("div");
    cardHolder.append(createNoteCard(note, false));
    cardHolder.addEventListener("change", onCardsChange);
    cardHolder.addEventListener("click", onCardsClick);

    const info = document.createElement("p");
    info.textContent =
      `Предмет: ${note.subject}. Кількість сторінок: ${note.pages}. ` +
      `${note.examSoon ? "Скоро іспит." : "Іспит не скоро."} ` +
      `${note.learned ? "Конспект вивчено." : "Конспект ще не вивчено."}`;

    section.append(backLink, heading, cardHolder, info);
    app.append(section);
  };
  refreshList();
}

// сторінка «Не знайдено» з посиланням на головну (замість порожнього екрана)
function notFoundView() {
  app.innerHTML = "";
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  heading.textContent = "Сторінку не знайдено";
  const text = document.createElement("p");
  text.textContent = `Маршруту «${getPath()}» не існує або запис видалено.`;
  const homeLink = document.createElement("a");
  homeLink.href = "#/";
  homeLink.dataset.link = "";
  homeLink.className = "back-link";
  homeLink.textContent = "На головну";
  section.append(heading, text, homeLink);
  app.append(section);
}

// Малює сторінку, що відповідає поточному шляху
function renderRoute() {
  // прибираємо React-дерево попередньої сторінки та стан її view
  if (reactRoot) {
    reactRoot.unmount();
    reactRoot = null;
  }
  listContainer = null;
  onDataChange = () => {};

  const match = matchRoute(getPath());
  if (match) {
    match.route.view(match.params);
  } else {
    notFoundView();
  }
  showDbError(); // повертає повідомлення про помилку БД, якщо воно було
  window.scrollTo(0, 0);
}

// перехоплення кліків по a[data-link] і реакція на hashchange
// (кнопки «назад»/«вперед» браузера теж змінюють хеш)
function startRouter() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-link]");
    if (!link) return;
    // Ctrl/Cmd-клік та середня кнопка лишаємо браузеру (відкриття у новій вкладці)
    if (
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    event.preventDefault();
    navigate(link.getAttribute("href").replace(/^#/, ""));
  });
  window.addEventListener("hashchange", renderRoute);
  renderRoute();
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
    startRouter(); //навіть без БД показуємо сторінки
    return;
  }

  await migrateFromLocalStorage();
  // замість refreshList() запускаємо роутер, а дані підтягує view
  startRouter();
}

init();
