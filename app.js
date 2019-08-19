
//function setImageVisible(id, visible) {
 //   var img = document.getElementById(id);
 //   img.style.visibility = (visible ? 'visible' : 'hidden');


$(function () {
    $("#about").on("cick",function () {
        $("#about").removeClass("bg1");
        console.log("about");
        $(".container_about p").text("I am currently a full time certified paralegal, hoping this course will help me break into the web development field");
    });
});
$(function () {
    $("#profile").on("click",function () {
        $("#profile").addClass("bg2");
        console.log(click);
        $("p").html("The link below is from my bootcamps 1st group project, where I handeled the API call for the New York Times and the quick seach buttons that populate the top 5 coins.");
        
    });
});
$(function () {
    $("#contact").on("click",function () {
        $("#contact").addClass("bg3");
        $(".container_contact  p").text("My linkedin and resume is listed below");
        $(".containter_contact").onclick.empty()
    });
});

	





