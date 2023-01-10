
window.onload=function(){
  const saveButton = document.getElementById("saveButton");
  const addProjectBtn = document.getElementById("addProject");

  addProjectBtn.addEventListener("click", hideSection);
  saveButton.addEventListener("click", save);
}
function save() {
  console.log("works");
}
function hideSection() {
  if($("#first_section_no_projects") != null) {
    $("#first_section_no_projects").hide();
  }
}