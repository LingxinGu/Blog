import DS from 'ember-data';

export default DS.Model.extend({
  info: DS.attr('string'),
  post: DS.belongsTo('post')
});
