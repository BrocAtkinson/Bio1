
//function setImageVisible(id, visible) {
 //   var img = document.getElementById(id);
 //   img.style.visibility = (visible ? 'visible' : 'hidden');




function about(){
var about = document.getElementById("about");
if (about.style.display === "none"){
    about.style.display = "block";
} else{
    about.style = "none";
}
}




//  $(function () {
//     $("#about").on("cick",function () {
//         $("#about").removeClass("bg1");
//         console.log("about");
//         $(".container_about p").text("I am currently a full time certified paralegal, hoping this course will help me break into the web development field");
//     });
// });

// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
  
$(function () {
    $("#profile").on("click",function () {
        $("#profile").addClass("bg2");
        console.log(click);
        $("container_profile").html("The link below is from my bootcamps 1st group project, where I handeled the API call for the New York Times and the quick seach buttons that populate the top 5 coins.");
        
    });
});
$(function () {
    $("#contact").on("click",function () {
        $("#contact").addClass("bg3");
        $(".container_contact  p").text("My linkedin and resume is listed below");
        $(".containter_contact").onclick.empty()
    });
});

	





