define([], function() {
  var config = {};
  config.apiKey = 'AIzaSyDcl5KGMeF-SazFk89oMg_3NynoZBaY1ac';
  config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
  config.clientId = '800345348024.apps.googleusercontent.com';
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };
  return config;
});