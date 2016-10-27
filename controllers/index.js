'use strict';

/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var contextData = {
    'title': 'XCG Events',
    'tagline': 'Not campus group'
  };
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
