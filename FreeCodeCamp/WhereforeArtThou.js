function whatIsInAName(collection, source) {
    var arr = [];
    var keysToCheck = Object.keys(source);
    arr = collection.filter(function(item) {
       return keysToCheck.every(function(key) {
         return item.hasOwnProperty(key) && item[key] === source[key];
       });
    });
    return arr;
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));