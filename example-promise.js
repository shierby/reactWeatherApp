/*
 function getTempCallback (location, callback) {
 callback(false, 78);
 callback('City not found');
 }

 getTempCallback('Philadelphia', function (err, temp) {
 if (err) {
 console.log('error', err)
 } else {
 console.log('success', temp);
 }
 })

 function getTempPromise(location) {
 return new Promise(function (resolev, reject) {

 setTimeout(function () {
 resolev(79);
 reject('City not found')
 }, 1000);


 })
 }

 getTempPromise('Philadelphia').then(function (temp) {
 console.log('promise success', temp)
 }, function (err) {
 console.log('promise error', err)
 });*/

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b)
    } else {
      reject ('a and b must be a number');
    }
  })
}

addPromise('a', 7).then(function (result) {
  console.log(result);
}, function (err) {
  console.log(err)
});