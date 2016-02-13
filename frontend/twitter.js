var followToggle = require("./follow_toggle");
var usersSearch = require("./usersSearch");
var tweetCompose = require("./TweetCompose");

$(function () {
  var $allFollowToggleButtons = $(".follow-toggle").each(createFollowToggle);
  var $userSearchBar = $(".users-search").each(createUsersSearch);
  var $createTweetForm = $(".tweet-compose").each(createTweetCompose);

  function createFollowToggle(idx, el) {
    new followToggle($(el));
  }

  function createUsersSearch (idx, el) {
    new usersSearch($(el));
  }

  function createTweetCompose (idx, el) {
    new tweetCompose($(el));
  }
});
