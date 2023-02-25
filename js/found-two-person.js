const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};




// Person One
const personOneName = document.querySelector("#person-one-name");
personOneName.innerText =
  person.result[0].name.fullName[0] + " " + person.result[0].name.fullName[1];

const personOneAge = document.querySelector("#person-one-age");
personOneAge.innerText = person.result[0].age;

const personOneAddress = document.querySelector("#person-one-address");
const personOneStreet = person.result[0].address.street;
const personOneHouse = person.result[0].address.house;
personOneAddress.innerText = `${personOneStreet}, House no: ${personOneHouse}`;


// Person Two
const personTwoName = document.querySelector("#person-two-name");
personTwoName.innerText =
  person.result[1].name.fullName[1] + " " + person.result[1].name.fullName[1];

const personTwoAge = document.querySelector("#person-two-age");
personTwoAge.innerText = person.result[1].age;

const personTwoAddress = document.querySelector("#person-two-address");
const personTwoStreet = person.result[1].address.street;
const personTwoHouse = person.result[1].address.house;
personTwoAddress.innerText = `${personTwoStreet}, House no: ${personTwoHouse}`;