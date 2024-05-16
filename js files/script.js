//first task (1)

const firstNumInput = document.querySelector("#first-num");
const secondNumInput = document.querySelector("#second-num");
const thirdNumInput = document.querySelector("#third-num");
let arr = [];

function insert() {
  var firstNum = firstNumInput.value;
  var secondNum = secondNumInput.value;
  var thirdNum = thirdNumInput.value;
  arr.push(firstNum, secondNum, thirdNum);
}

function findingMax() {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      arr[i] = 0;
    }

    if (arr[i] >= max) {
      max = arr[i];
    }
  }
  console.log("max = " + max);
}
function findingMin() {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      arr[i] = 0;
    }
    if (arr[i] <= min) {
      min = arr[i];
    }
  }

  console.log("min = " + min);
}

function output() {
  insert();
  findingMax();
  findingMin();
}

// first task (2)
const charInput = document.querySelector("#character");
function check() {
  var char = charInput.value;
  if (
    char.toLowerCase() === "a" ||
    char.toLowerCase() === "e" ||
    char.toLowerCase() === "i" ||
    char.toLowerCase() === "o" ||
    char.toLowerCase() === "u"
  ) {
    console.log(`${char} is vowel`);
  } else {
    console.log(`${char} is consonant`);
  }
}

// first task (3)
const numInput = document.querySelector("#num");
function multiply() {
  var num = numInput.value;
  for (let i = 1; i <= 12; i++) {
    console.log(num * i);
  }
}

// first task (4)
const numEvenInput = document.querySelector("#num2");

function even() {
  var num = numEvenInput.value;
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

// first task (5)

const firstMarkInput = document.querySelector("#mark1");
const secondMarkInput = document.querySelector("#mark2");
const thirdMarkInput = document.querySelector("#mark3");
const fourthMarkInput = document.querySelector("#mark4");
const fifthMarkInput = document.querySelector("#mark5");

let arr2 = [];

function insertMarks() {
  var firstValue = firstMarkInput.value;
  var secondValue = secondMarkInput.value;
  var thirdValue = thirdMarkInput.value;
  var fourthValue = fourthMarkInput.value;
  var fifthValue = fifthMarkInput.value;

  arr2.push(firstValue, secondValue, thirdValue, fourthValue, fifthValue);
}
function addValues() {
  insertMarks();
}
function getTotal() {
  let x = 0;
  for (let i = 0; i < arr2.length; i++) {
    x += Number(arr2[i]);
  }
  return x;
}

function getAverage() {
  var sum = 0;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === "") {
      continue;
    } else {
      sum += 1;
    }
  }
  var t = getTotal();
  let avg = t / sum;
  console.log(avg);
}

function getPercentage() {
  var sum = 0;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === "") {
      continue;
    } else {
      sum += 1;
    }
  }

  var t = getTotal();
  let x = (t / (100 * sum)) * 100;
  console.log(x + "%");
}

// first task (6)

const data = [];
const tableBody = document.querySelector(".grand-parent tbody");
const addRowToTable = (
  name,
  physics,
  chemistry,
  biology,
  mathematics,
  computer,
  elementIndex
) => {
  tableBody.insertAdjacentHTML(
    "beforeend",
    `<tr>
    <th scope="row">${elementIndex}</th>
    <td >${name}</td>
    <td >${physics}</td>
    <td>${chemistry}</td>
    <td>${biology}</td>
    <td>${mathematics}</td>
    <td>${computer}</td>
    <td>      
    <button onclick="percentage(event)" class="btn-percentage" data-index=${elementIndex}>Percentage</button>
    </td>
  </tr>`
  );

  data.push({
    name: name,
    mark1: physics,
    mark2: chemistry,
    mark3: biology,
    mark4: mathematics,
    mark5: computer,
  });
};
const addBtn = document.querySelector(".add");
let elementIndex = tableBody.children.length;
const student = document.getElementById("student");
const firstMark = document.querySelector("#physics-mark");
const secondMark = document.querySelector("#chemistry-mark");
const thirdMark = document.querySelector("#biology-mark");
const fourthMark = document.querySelector("#mathematics-mark");
const fifthMark = document.querySelector("#computer-mark");

addBtn.addEventListener("click", () => {
  if (
    student.value == "" ||
    firstMark.value == "" ||
    secondMark.value == "" ||
    thirdMark.value == "" ||
    fourthMark.value == "" ||
    fifthMark.value == ""
  ) {
    alert("fill all your marks");
  } else {
    addRowToTable(
      student.value,
      firstMark.value,
      secondMark.value,
      thirdMark.value,
      fourthMark.value,
      fifthMark.value,
      elementIndex
    );
  }
  elementIndex += 1;
});

const percentage = (event) => {
  const index = event.target.dataset.index;
  const item = data[index];
  var total =
    Number(item.mark1) +
    Number(item.mark2) +
    Number(item.mark3) +
    Number(item.mark4) +
    Number(item.mark5);
  let p = total / 5;

  switch (true) {
    case p >= 90:
      console.log(
        item.name + " who has the id = " + index + " got an A Grade!"
      );
      break;

    case p >= 80:
      console.log(item.name + " who has the id = " + index + " got a B Grade!");
      break;

    case p >= 70:
      console.log(item.name + " who has the id = " + index + " got a C Grade");
      break;

    case p >= 60:
      console.log(item.name + " who has the id = " + index + " got a D Grade");
      break;

    case p >= 40:
      console.log(item.name + " who has the id = " + index + " got a E Grade");
      break;

    case p < 40:
      console.log(item.name + " who has the id = " + index + " got an F Grade");
      break;

    default:
      console.log("no grade");
      break;
  }
};
function search(value) {

    let table = ''
  for (let i = 0; i < data.length; i++) {
    if (data[i].name.includes(value)) {
      table +=
        `<tr>
    <th scope="row">${i}</th>
    <td >${data[i].name}</td>
    <td >${data[i].mark1}</td>
    <td>${data[i].mark2}</td>
    <td>${data[i].mark3}</td>
    <td>${data[i].mark4}</td>
    <td>${data[i].mark5}</td>
    <td>      
    <button onclick="percentage(event)" class="btn-percentage" data-index=${elementIndex}>Percentage</button>
    </td>
  </tr>` 

    }

}
document.querySelector('tbody').innerHTML = table ; 
}
