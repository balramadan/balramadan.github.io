$("#closemenu").hide();

$("#menubutton").click(function () {
  $("#mobilemenu").animate({ left: "330px" });
  $("#menubutton").hide();
  $("#closemenu").fadeIn(200);
});

$("#closemenu").click(function () {
  $("#mobilemenu").animate({ left: "-330px" });
  $("#closemenu").hide();
  $("#menubutton").fadeIn(200);
});
