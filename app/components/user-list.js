import Component from '@ember/component';

export default Component.extend({
    actions: {
        showUser(user) {
          alert(user);
        }
      }
});
