var Xray = require('x-ray');
var x = Xray();



// x-ray write to file
x('http://www.autotrader.com/cars-for-sale/cars+under+20000/Toyota/Tundra/Lawrenceville+GA-30043?endYear=2017&firstRecord=0&makeCode1=TOYOTA&maxPrice=20000&mmt=%5BTOYOTA%5BTUNDRA%5B%5D%5D%5B%5D%5D&modelCode1=TUNDRA&numRecords=100&searchRadius=200&showcaseListingId=429827767&showcaseOwnerId=588069&startYear=2006&Log=0', '.listing', [{
  title: '#j_id_1_3ye_6 > h2 > a > span.atcui-truncate.ymm > span',
  price: '.listing-price > .price > h4 > span',
  permalink : '#j_id_1_3ye_6 > h2 > a@href',
  images: '.media-img > a > img@src'


}])

  .write('results-autotrader.json');
