import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
  delete(post) {
      this.sendAction('destroyPost', post);
  }
}
});
