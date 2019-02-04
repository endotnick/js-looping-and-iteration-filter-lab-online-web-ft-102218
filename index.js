// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (name) { return name.toLowerCase() === string.toLowerCase(); });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (name) { return name.startsWith(string); });
}

function matchName(drivers, string) {
  return drivers.filter(function (element) { return element.name.toLowerCase() === string.toLowerCase(); });
}