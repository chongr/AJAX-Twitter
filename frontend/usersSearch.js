var FollowToggle = require('./follow_toggle');

function UsersSearch($usersSearch) {
  this.$el = $usersSearch;
  this.$input = $usersSearch.find('input');
  this.$ul = $usersSearch.find('.users');

  this.$input.on("input", this.handleInput.bind(this));
}

UsersSearch.prototype.handleInput = function(e) {
  var that = this;
  $.ajax({
    method:"GET",
    url:"/users/search",
    dataType: "JSON",
    data: {
      query: that.$input.val()
    },
    success: function (data) {
      console.log(data);
      that.renderResults(data);
    }
  });
};

UsersSearch.prototype.renderResults = function (data) {
  var innerThat = this;
  innerThat.$ul.empty();
  data.forEach (function(obj) {
    var $obj = $('<li>');
    $obj.text(obj['username']);

    // var $toggle = $('<input>');
    // $toggle.attr("type","button");
    // var toggle = new FollowToggle($toggle);
    // $obj.append($toggle);

    innerThat.$ul.append($obj);
  });
};

module.exports = UsersSearch;
