var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://denver.craigslist.org/search/bia')
  .wait(1000)
  .type('.min', '1000')
  .click('#bicycle_type_8')
  .click('.searchlink')
  .wait(2000)
  .evaluate(function () {
    var nameNodes = document.querySelectorAll('.result-title');
    var list = [].slice.call(nameNodes);
    return list.map(function(node){
      return node.innerText
    });
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });