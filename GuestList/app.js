new Vue({
  el: '#app',
  data: {
    event: {
      date: 'August 14th - 16th',
      title: 'Summer Festival!',
      description:
        "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
      signUpText: 'Add your name to the guest list for <em>exclusive</em> offers:',
    },
    name: '',
    guestNames: [],
  },
  methods: {
    submit: function () {
      const name = this.name.trim();
      if (name.length > 0) {
        this.guestNames = [...this.guestNames, name];
      }
      this.name = '';
    },
  },
});
