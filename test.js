var Xray = require('x-ray');
var x = Xray();

x('http://atlanta.craigslist.org/search/sss?query=toyota+tundra&max_price=20000&min_auto_year=2008', {
  title: '#titletextonly',
  price: 'span.price',
  permalink : 'span > span.pl > a@href',
  image : 'img@src'
})(function(err, obj) {
console.log(err, obj)
});



// #sortable-results > div.rows > p:nth-child(1) > a > div.swipe > div > div:nth-child(1) > img
// #sortable-results > div.rows > p:nth-child(1) > a > div.swipe > div > div:first-child
