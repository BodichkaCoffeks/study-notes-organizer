console.log("JS підключено!");
const notes = [
  {
    subject: "Алгебра",
    pages: 45,
    examSoon: true,
  },
  {
    subject: "Історія",
    pages: 20,
    examSoon: false,
  },
  {
    subject: "Географія",
    pages: 70,
    examSoon: true,
  },
  {
    subject: "Фізика",
    pages: 54,
    examSoon: false,
  },
  {
    subject: "Хімія",
    pages: 34,
    examSoon: true,
  },
  {
    subject: "Геометрія",
    pages: 99,
    examSoon: true,
  },
];

// Створюємо об'єкт для збереження кількості: { "Алгебра": 3, "Фізика": 2}
const counts = {};

//Масив предметів, з яких скоро буде проведено екзамен
const exam_soom = [];
//Функція для підрахунку кількості конспектів та кількості предметів, з яких скоро буде екзамен
function checkEachSubjext() {
  // Цикл for підраховує кількість конспектів по кожному предмету
  for (let i = 0; i < notes.length; i++) {
    const subjectName = notes[i].subject;

    // Якщо такий предмет уже є в об'єкті — додаємо +1, якщо немає — починаємо з 1
    if (counts[subjectName]) {
      counts[subjectName] += 1;
    } else {
      counts[subjectName] = 1;
    }
    let j = 0;
    //Якщо скоро екзамен, тоді додаємо
    if (notes[i].examSoon) {
      exam_soom[j] = notes[i].subject;
      j++;
    }
    //Якщо не скоро - пропускаємо цю ітерацію
    else {
      continue;
    }
  }

  console.log("Кількість конспектів по кожному предмету:", counts);
  console.log("Предмети, з яких скоро буде екзамен:", exam_soom);
}

//Стрілкова функція, яка повертає кількість сторінок, яку потрібно читати в день, щоб підготуватись до екзамену
const pagesPerDay = (pages, daysLeft) => Math.ceil(pages / daysLeft);
//Функція рахує кількість сторінок для предмету Алгебра при умові, що екзамен через  дні
console.log(
  `Щоб підготуватись до екзамену з алгебри, потрібно читати ${pagesPerDay(45, 3)} сторінок`,
);
checkEachSubjext();
