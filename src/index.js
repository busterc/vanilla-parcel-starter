var app = {
  initialize: function() {
    document.addEventListener(
      'deviceready',
      this.onDeviceReady.bind(this),
      false
    );
  },

  onDeviceReady: function() {
    navigator.notification.alert('device is ready', () => {}, 'sup');
  }
};

app.initialize();
