
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
  if($("#section_no_projects") != null) {
    $("#section_no_projects").hide("slow","swing");
    $("#section_newProject").show("slow","swing");
  }
}