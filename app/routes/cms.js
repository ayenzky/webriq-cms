import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    Ember.$('body').addClass('nav-md');
  },
  deactivate: function() {
    Ember.$('body').removeClass('nav-md');
  },
  actions: {
    menuclick: function() {
      if ($('body').hasClass('nav-md')) {
          $('body').removeClass('nav-md').addClass('nav-sm');
      }
      else if ($('body').hasClass('nav-sm')){
          $('body').removeClass('nav-sm').addClass('nav-md');
      }
      else {
          $('body').removeClass('nav-sm nav-md').addClass('nav-md');

      }
    }
  }

});

// Ember.Route.reopen({
//   activate: function() {
//     var cssClass = this.toCssClass();
//     // you probably don't need the application class
//     // to be added to the body
//     if (cssClass != 'application') {
//       Ember.$('body').addClass(cssClass);
//     }
//   },
//   deactivate: function() {
//     Ember.$('body').removeClass(this.toCssClass());
//   },
//   toCssClass: function() {
//     return this.routeName.replace(/\./g, '-').dasherize();
//   }
// });