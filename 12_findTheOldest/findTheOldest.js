const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function (people) {

    // using a variable that will store the current max age index
    let maxChecker = 0;

    for (let i = 1; i < people.length; i++) {
        if (people[i].yearOfDeath && people[i-1].yearOfDeath) {
            if (people[i].yearOfDeath - people[i].yearOfBirth > people[maxChecker].yearOfDeath - people[maxChecker].yearOfBirth) {
                maxChecker = i;
            }
        }
        if(!people[i].yearOfDeath || !people[maxChecker].yearOfDeath){
            if(people[i].yearOfBirth > people[maxChecker].yearOfBirth){
                maxChecker = maxChecker;
            }
            else{
                maxChecker = i;
            }
        }
    }
    return people[maxChecker]

};

console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
