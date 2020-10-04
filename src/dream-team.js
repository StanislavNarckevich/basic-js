const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  } else {
    let team = []
    for (const person of members) {
      if (typeof person === 'string') {
        team.push(person.trim()[0].toUpperCase())
      }
    }
    return team.sort().join('')
  }
};
