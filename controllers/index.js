'use strict';

/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var now = new Date(); 
  var contextData = {
<<<<<<< 59180c504c08a24649a540b1084b2dcccb558225
    'title': 'XCG Events',
    'tagline': 'Not campus groups'
=======
    'title': 'MGT 656',
    'tagline': 'You are doomed (just kidding).',
    'events': []
>>>>>>> becca's changes
  };
 for(var i=0; i < events.all.length; i++){
   var event = events.all[i];
   if(event.date > now){
     contextData.events.push(event);
   }
 }
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
