var Xray = require('x-ray');
var x = Xray();

x('https://www.cars.com/for-sale/searchresults.action?zc=30004&rd=200&prMx=20000&mdId=22213&mkId=20088&stkTypId=28881&sf1Nm=price&sf1Dir=DESC&sf2Nm=miles&sf2Dir=ASC&page=1&perPage=250', {
  title: 'body > div.page.search-results-page > cars-shop-srp > div > div.gray-background > div > div > div > cars-shop-listings > div > div:nth-child(3) > div > div > div.listing__details.col-dt-6.col-8.col-mb-12 > div.result-meta.at-least-tablet > div.result-colors > span'

})(function(err, obj) {
console.log(err, obj)
});
