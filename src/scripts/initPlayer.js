var initPlayer = (window.onSpotifyWebPlaybackSDKReady = function() {
  var token =
    'BQDF7gqu6eK8nsv7NLKT1B8Po224ScXWjd_evFuM5sRx2rkYM4ruXta9ZEd8C7H7e9kMd-ikV-9TwzKtBeHnAYI62l4poUhhA9oh4UogP7LEua1UDNyci8xuqjPjIqOfeWALsSJ7uoo3DONQ2nyeqAFtsumEh8jVxyLj';
  var player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: function getOAuthToken(cb) {
      cb(token);
    }
  });

  // Error handling
  player.addListener('initialization_error', function(_ref) {
    var message = _ref.message;
    console.error(message);
  });
  player.addListener('authentication_error', function(_ref2) {
    var message = _ref2.message;
    console.error(message);
  });
  player.addListener('account_error', function(_ref3) {
    var message = _ref3.message;
    console.error(message);
  });
  player.addListener('playback_error', function(_ref4) {
    var message = _ref4.message;
    console.error(message);
  });

  // Playback status updates
  player.addListener('player_state_changed', function(state) {
    console.log(state);
  });

  // Ready
  player.addListener('ready', function(_ref5) {
    var device_id = _ref5.device_id;

    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', function(_ref6) {
    var device_id = _ref6.device_id;

    console.log('Device ID has gone offline', device_id);
  });

  // Connect to the player!
  player.connect();
});
