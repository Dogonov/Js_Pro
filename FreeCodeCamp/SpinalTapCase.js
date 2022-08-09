function spinalCase(str) {
  let spacesRegex = /\s+|_+/g;
  let camelRegex = /([a-z])([A-Z])/g;
  str = str.replace(camelRegex, "$1 $2")
  let spinalStr = str.replace(spacesRegex, "-");
  return spinalStr.toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));