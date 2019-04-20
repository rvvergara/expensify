// const person = {
//   // name: 'Ryan',
//   age: 39,
//   location: {
//     city: 'Bacoor',
//     temperature: 34,
//   },
// };

// const person2 = { ...person, name: 'Gordon' };

// const {
//   name: firstName = 'John',
//   age,
//   location,
// } = person;

// const {
//   city,
//   temperature: temp,
// } = location;

// // console.log(`${firstName} is ${age}. He lives in ${city} where the temperature is ${temp} degrees celsius.`);

// const book = {
//   title: 'A Game of Thrones',
//   author: 'George R.R. Martin',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const {
//   name: publisherName = 'Self-Published',
// } = book.publisher;

// console.log(publisherName);


const address = ['1299 South Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;

const item = ['Coffee (hot)', '$2', '$2.50', '$2.75'];

const [hotCoffee,, mediumHotPrice] = item;

console.log(`A medium ${hotCoffee} costs ${mediumHotPrice}`)
;