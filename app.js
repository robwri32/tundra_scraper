var Xray = require('x-ray');
var x = Xray();



// x-ray write to file
x('http://atlanta.craigslist.org/search/sss?query=toyota+tundra&max_price=20000&min_auto_year=2008', '#sortable-results > div.rows > p', [{
  title: '#titletextonly',
  price: 'span.price',
  permalink : 'span > span.pl > a@href',
  image : ' > a > div.swipe > div > div:nth-child(1) > img[src]'

}])

  .write('results.json');
