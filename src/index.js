const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

//Array.prototype.filter()
//1. Filter the list of inventors for those who were born in the 1500's
const inventorsListBorn1500 = inventors.filter(
  inventor => inventor.year >= 1500 && inventor.year < 1600
);
console.table(inventorsListBorn1500);

//Array.prototype.map
//2. Give array of invetor's first and last name
const nameMap = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(nameMap);

//Array.prototype.sort
//3. Sort inventors based on birthday from oldest to youngest
const birthList = inventors.sort((in1, in2) => (in1.year > in2.year ? 1 : -1));
console.table(birthList);

//Array.prototype.reduce
//4. How many years did inventors live
const yearsLived = inventors.reduce((total, inventor) => {
  return (total += inventor.passed - inventor.year);
}, 0);
console.log("yearslived", yearsLived);

//sort the inventors by years lived
/*const byYearsLived = inventors.sort((in4, in3) =>
  in3.passed - in3.year < in4.passed - in4.year ? 1 : -1
);*/
//console.table(byYearsLived);

//sort the people alphabetically by lastname
const lastNameSort = people.sort((prev, next) => {
  const [alast, afirst] = prev.split(", ");
  const [blast, bfirst] = next.split(", ");
  return blast > alast ? -1 : 1;
});
console.log(lastNameSort);

const data = [
  "car",
  "truc",
  "bike",
  "walk",
  "cycle",
  "car",
  "truc",
  "bike",
  "walk",
  "cycle",
  "car",
  "truc",
  "bike",
  "walk",
  "cycle",
  "car",
  "truc",
  "bike",
  "walk",
  "cycle",
  "car",
  "truc",
  "bike",
  "walk",
  "cycle"
];
//find the instances if each entry

const instances = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(instances);

//Array Cardio 2
const people_v2 = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 }
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 }
];

//Array.prototype.some
//find is someone is older than 19 years
const isAdult = people_v2.some(p => new Date().getFullYear() - p.year > 19);
console.log({ isAdult });

//find if every one is adult i.e. >19
const allAdults = people_v2.every(p => new Date().getFullYear() - p.year > 19);
console.log({ allAdults });

//Array.prototype.find
//find a comment with id :823423
const found = comments.find(c => c.id === 823423);
console.log(found);
