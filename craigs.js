var osmosis = require('osmosis');
var Xray = require('x-ray');
var x = Xray();



// osmosiss call out
osmosis.get('http://atlanta.craigslist.org/search/sss?query=toyota+tundra&max_price=20000&min_auto_year=2008') // url of the site you want to scrape
  .find('#titletextonly') // selector
  .set('article:title') // name of the key in the results



  .data(function(titleResults) { //output
    console.log(titleResults);
  });


// x-ray write to file
x('https://dribbble.com', 'li.group', [{
  title: '.dribbble-img strong',
  image: '.dribbble-img [data-src]@data-src',
}])
  .paginate('.next_page@href')
  .limit(3)
  .write('results.json');
