let person = {
  name: "John",
  surname: "Karter",
  year: 1990,
  address: "Nukus street",

  work: {
    salary: 2000,
    profession: "web programmer",
    skill: ["html", "css", "javascript"],

    porject: {
      count: 10,
      forMobile: 3,
      forBrowser: 7,
    },
  },

  car: {
    type: "Tesla",
    color: "white",
    model: "4",
  },

  get fullname() {
    return this.name + " " + this.surname;
  },

  get age() {
    return new Date().getFullYear() - this.year;
  },
};

showProperty(person);

function showProperty(object) {
  for (key in object) {
    console.log(key + " -> " + object[key]);
  }
}
