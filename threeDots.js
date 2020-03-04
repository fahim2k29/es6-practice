const ages = [21, 22, 25, 26];
const ages2 = [32, 35, 33, 29];
const ages3 = [11, 12, 16, 19];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, ...ages3];
const maximum = Math.max(...allAges2);
console.log(maximum);
