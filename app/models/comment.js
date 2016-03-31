import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  detail: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
