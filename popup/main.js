// const primarySection = document.querySelector(".empty_section");
// function addFirstProject() {
//     primarySection.setAttribute("display", "none");
//     console.log('works');
// }

// $(".link_addProject").click(function() {
//   $("#empty_section").hide();
// });
window.onload=function(){
  const saveButton = document.getElementById("saveButton");
  const emptyStateSection = document.getElementById("empty_section");
  const primaryButton = document.getElementById("primary");

  primaryButton.addEventListener("click", hideSection);
  saveButton.addEventListener("click", save);
}
// document.getElementById("saveButton").addEventListener("click", save);
function save() {
  console.log("works");
}
function hideSection() {
  if($("#empty_section") != null) {
    $("#empty_section").hide();
    console.log('here');
  }
  console.log("empty");
}