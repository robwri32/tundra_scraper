var Xray = require('x-ray');
var x = Xray();



// x-ray write to file
x('https://www.cars.com/for-sale/searchresults.action?zc=30004&rd=200&prMx=20000&mdId=22213&mkId=20088&stkTypId=28881&sf1Nm=price&sf1Dir=DESC&sf2Nm=miles&sf2Dir=ASC&page=1&perPage=250', 'div.result-row.ng-scope', [{
  title: 'span.result-price'



}])

  .write('results-cars.json');

  //body > div.page.search-results-page > cars-shop-srp > div > div.gray-background > div > div > div > cars-shop-listings > div > div:nth-child(3)

  //body > div.page.search-results-page > cars-shop-srp > div > div.gray-background > div > div > div > cars-shop-listings > div > div:nth-child(1)
