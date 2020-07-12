new Vue({
  el: '#app',
  data: {
    event: {
      date: 'August 14th - 16th',
      title: 'Summer Festival!',
      description:
        "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
      signUpText: 'Add your name to the guest list for <em>exclusive</em> offers:',
      guestNames: [],
      capacity: 5,
      capacityPercentage: 0,
      isSuccess: false,
      isWarning: false,
      isDanger: false,
    },
    name: '',
  },
  methods: {
    submit: function () {
      const name = this.name.trim();
      if (name.length > 0 && this.event.capacityPercentage < 100) {
        this.event.guestNames = [...this.event.guestNames, name];
        this.event.capacityPercentage = +Number.parseFloat(
          (this.event.guestNames.length / this.event.capacity) * 100
        ).toFixed();
        this.event.isSuccess = this.event.capacityPercentage < 50;
        this.event.isWarning =
          this.event.capacityPercentage >= 50 && this.event.capacityPercentage < 75;
        this.event.isDanger = this.event.capacityPercentage > 75;
      }
      this.name = '';
    },
  },
  computed: {
    sortedGuestNames: function () {
      return [...this.event.guestNames].sort();
    },
  },
});
