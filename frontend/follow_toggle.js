function FollowToggle($el, options) {
  this.$el = $el;
  this.userId = $el.attr("data-user-id") || options.userId;
  this.followState = $el.attr("data-initial-follow-state") || options.followState;
  this.render();
  this.$el.on("click", this.handleClick.bind(this));
}

FollowToggle.prototype.render = function() {
  if(this.followState === 'unfollowed'){
    this.$el.attr("value","Follow!");
  } else if (this.followState === 'followed') {
    this.$el.attr("value","Unfollow!");
  }
};

FollowToggle.prototype.handleClick = function(e) {
  e.preventDefault();
  var that = this;
  // this.followState =
  that.$el.prop("disabled",true);
  if (this.followState === "unfollowed") {
    $.ajax({
      url: "/users/" + that.userId + "/follow",
      method: "POST",
      dataType: "JSON",
      success: function (data) {
        that.followState ="followed";
        that.$el.attr("data-initial-follow-state", "followed");
        that.render();
        that.$el.prop("disabled",false);
      }
    });
  } else {
    $.ajax({
      url: "/users/" + that.userId + "/follow",
      method: "DELETE",
      dataType: "JSON",
      success: function (data) {
        that.followState ="unfollowed";
        that.$el.attr("data-initial-follow-state", "unfollowed");
        that.render();
        that.$el.prop("disabled",false);
      }
    });
  }
};

module.exports = FollowToggle;
