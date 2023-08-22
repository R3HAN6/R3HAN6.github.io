const url = "https://api.github.com/users/R3HAN6";

$.get(url, function (data, status) {
   $("#profile").attr("src", data.avatar_url);
   $("#name").text(data.name);
   $("#followers").text(data.followers);
   $("#following").text(data.following);
});

$(document).ready(function(){
   $(".preloader").fadeOut();
});
