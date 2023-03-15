const fs = require('fs');

console.log('this is the first line:');

fs.readFile('D:/webdev/javascript-learning/New folder/asynchronous/f1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('the content of file1 is-->'+data);
});

console.log('this is the last line:');