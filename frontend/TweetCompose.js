function TweetCompose ($form) {
  this.$form = $form;

  this.$form.on("submit", this.submit.bind(this));
}

TweetCompose.prototype.submit = function (e) {
  e.preventDefault();
  var content = this.$form.find('textarea[name="tweet[content]"]');
  var mentionedUsers = this.$form.find('select[name="tweet[mentioned_user_ids][]"]');
  var tweet = {
    content: content.val(),
    mentioned_user_ids: JSON.stringify([mentionedUsers.val()])
  };
  this.$form.find(":input").prop("disabled", true);

  $.ajax ({
    url: "/tweets",
    method: "POST",
    dataType: "JSON",
    data: {tweet: tweet},
    success: function (data) {
      this.handleSuccess(data);
    }.bind(this)
  });

};

TweetCompose.prototype.handleSuccess = function (data) {
  this.clearInput();
  this.$form.find(":input").prop("disabled", false);
  var selectUl = this.$form.attr("data-tweets-ul");
  var link = $("<a>").attr("href", "/users/" + data.user_id).text(data.user.username);
  var tweet = $("<li>").text(data.content + " -- ").append(link).text(" -- " + data.updated_at);
  //$(selectUl).
};

TweetCompose.prototype.clearInput = function () {
  this.$form.find(":input").val(" ");
  this.$form.find("input").val("Post Tweet!");
};

module.exports = TweetCompose;
