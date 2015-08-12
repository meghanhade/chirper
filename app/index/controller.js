import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login: function() {
      var username = this.get('username');
      var password = this.get('password');

      if (username === 'letme' && password === 'in') {
        this.transitionToRoute('home');
      } else {
        sweetAlert('Oops!', 'Wrong username or password!', 'error');
      }
    }
  }
});