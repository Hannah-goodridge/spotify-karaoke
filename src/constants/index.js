const scopes =
  'user-read-private+user-read-email+playlist-read-private+user-top-read+user-read-recently-played';
const redirectURI = 'http://localhost:3001/';

export const token =
  'BQAjAiRqA0LPb6r-72lD0YpphOUeRNztreiz4GJ5difeJOZD4Xo2Lk4RTW16yz7j5Nm9ODwCl_B31BAxvH2sEA21McWrKDJlWEj6cdT0109r1lrS6yD1O9pIMpxuBrRJ3VGAgbeXrZNROvKtNtkceN4bIOpPhvIM165G';

export const clientID = 'fbdefc95c88c4b44ae91fd4769785962';
export const clientSecret = '1cfbbf92434b4026b5faabf1cdfeeaf8';
export const spotifyWebApiURL = `https://accounts.spotify.com/authorize/?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes}`;
export const spotifyProfileURL = 'https://api.spotify.com/v1/me?access_token=';
export const spotifyPlaylistURL =
  'https://api.spotify.com/v1/me/playlists?access_token=';
export const spotifySearchURL = 'https://api.spotify.com/v1/search?q=';
export const spotifyArtistURL = 'https://api.spotify.com/v1/artists/';
export const spotifyAlbumURL = 'https://api.spotify.com/v1/albums/';
