const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Resolved data')
    reject('Data was rejected');
  }, 2000);
});

console.log('Before');

promise.then(d => console.log(d)).catch(e => console.log(e));

console.log('After');
