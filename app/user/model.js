import DS from 'ember-data';

var User = DS.Model.extend({
  username: DS.attr('string'),
  numberOfChirps: DS.attr('number'),
  numberOfFollowing: DS.attr('number'),
  numberOfFollowers: DS.attr('number'),
  aboutMe: DS.attr('string'),
  joinedAt: DS.attr('date'),
  chirps: DS.hasMany('chirps', { async: true })
});

User.reopenClass({
  FIXTURES: [
    { 
      id: 1, 
      username: 't4t5', // Put your username here
      numberOfChirps: 2,
      numberOfFollowing: 5,
      numberOfFollowers: 5,
      aboutMe: 'I like making stuff.',
      joinedAt: new Date('2015-06-08T09:30:26'),
      chirps: [1, 2]
    }
  ]
});

export default User;