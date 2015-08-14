// automatically focus on the textarea when the modal appears, 
// so that the user can start typing directly. This can be done 
// by listening to the  didInsertElement event, which will 
// trigger whenever the component is rendered on the page

import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    postChirp: function() {
      if (this.get('noCharsLeft')) {
        swal("Woops!", "You have too many characters in your chirp!", "error");
        return false;
      }

      // Retrieve the value of {{textarea}}
      var text = this.get('chirpText');
      
      // We've remove the user object
      var chirpData = {
        text: text,
        createdAt: new Date()
      };

      var newChirp = this.get('store').createRecord('chirp', chirpData);

      newChirp.save().then(() => {
        this.attrs.dismiss(); // Hide the modal
      });
    }
  },
  
  focusOnTextarea: Ember.on('didInsertElement', function() {
    // scheduleOne('afterRender'): This is a method that makes 
    // sure that all the elements we have in our markup have been 
    // loaded into the view before we start manipulating them
    Ember.run.scheduleOnce('afterRender', () => {
      this.$().find('textarea').focus();
    });
    // The "fat-arrow", () =>, is just a short way of writing 
    // function(). There's one important difference though: 
    // the this inside of it keeps the scope of its parent. 
  }),

  chirpText: '',

  remainingChars: Ember.computed('chirpText', function() {
    return 140 - this.get('chirpText').length;
  }),

  noCharsLeft: Ember.computed('remainingChars', function() {
    return (this.get('remainingChars') < 0);
  }),

  store: Ember.inject.service()


  
});