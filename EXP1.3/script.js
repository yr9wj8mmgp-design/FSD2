// Base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hello, my name is ${this.name}.`;
  }
}

// Student subclass
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
  }
}

// Teacher subclass
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }
}

// Instances
const people = [
  new Person("Maria Lopez", 32),
  new Student("Rahul Mehta", 21, "Information Technology"),
  new Teacher("Prof. Anita Rao", 48, "Physics")
];

// Render UI
const output = document.getElementById("output");

people.forEach(person => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${person.name} (${person.constructor.name})</h2>
    <p>Age: ${person.age}</p>
    <p class="intro">${person.introduce()}</p>
    ${person.major ? `<p>Major: ${person.major}</p>` : ""}
    ${person.subject ? `<p>Teaching: ${person.subject}</p>` : ""}
  `;

  output.appendChild(card);
});
