import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  authenticationToken: DS.attr('string'),
  posts: DS.hasMany('post')
});
