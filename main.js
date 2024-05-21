// 1)Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapın.
const checkDivisibleByTwentyOne = n => !(n % 21);

// 2)Verilmis n ve m (n<m) ededleri arasindaki tek ededlerin sayini tapin.
const getOddNumbers = (n, m) =>
  Array.from({ length: m + 1 - n }, (_, k) => n + k).filter(x => x % 2);

// 3)Verilmis n ve m (n<m) ededleri arasindaki tek ededlerin cemini tapin.
const getOddNumbersSum = (n, m) =>
  Array.from({ length: m + 1 - n }, (_, k) => n + k)
    .filter(x => x % 2)
    .reduce((curr, sum) => (sum += curr));

// 4)Verilmis n tam ededinin sade ve ya murekkeb oldugunu tapin.
const isPrime = n => {
  if (n === 1 || n === 2) return true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// 5)Verilmish arrayin icindeki cut ededlerin cemini tapin.
const getEvenNumbers = arr =>
  arr.filter(x => x % 2 === 0).reduce((curr, sum) => (sum += curr));

// 6) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.
const getEvenNumbersSquared = arr =>
  arr
    .filter(x => x % 2 === 0)
    .map(x => x ** 2)
    .reduce((curr, sum) => (sum += curr));

// 7) Elə bir funksiya yazın ki 2 parametr qəbul eləsin - hər 2 parametrin rəqəm olub-olmamağını yoxlamalısınız -
// əgər hər 2si də rəqəmdirsə yazdığınız funksiya həmin 2 rəqəm arasındakı ədədlərin cəmini return etməlidir (misal üçün parametrlər 10 və 15dirsə 10,11,12,13,14,15 cəmini qaytarmalıdır)

const getSum = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    console.log("Not a number");
    return;
  }
  return Array.from({ length: y - x + 1 }, (_, k) => x + k).reduce(
    (curr, sum) => (sum += curr)
  );
};

//8) HTML-də uzunluğu və hündürlüyü 200px olan element hazırlayın və bir ədəd button hazırlayın -
// istifadəçi hər dəfə buttona click edəndə uzunluq 50px, hündürlük isə 20px artmalıdır
const box = document.getElementById("box");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const currentHeight = Number(
    box.style.getPropertyValue("height").replace("px", "")
  );
  const currentWidth = Number(
    box.style.getPropertyValue("width").replace("px", "")
  );
  box.style.width = currentWidth + 50 + "px";
  box.style.height = currentHeight + 20 + "px";
});
