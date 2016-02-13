var followToggle = require("./follow_toggle");
var usersSearch = require("./usersSearch");

$(function () {
  var $allFollowToggleButtons = $(".follow-toggle").each(createFollowToggle);
  var $userSearchBar = $(".users-search").each(createUsersSearch);

  function createFollowToggle(idx, el) {
    new followToggle($(el));
  }

  function createUsersSearch (idx, el) {
    new usersSearch($(el));
  }
});
