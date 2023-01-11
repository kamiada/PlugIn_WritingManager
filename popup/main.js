
window.onload=function(){
  const saveButton = document.getElementById("saveButton");
  const addProjectBtn = document.getElementById("addProject");

  saveButton.addEventListener("click", saveProject);
  addProjectBtn.addEventListener("click", hideFirstSection);
}

function hideFirstSection() {
  if($("#section_no_projects") != null) {
    $("#section_no_projects").hide("slow","swing");
    $("#section_newProject").show("slow","swing");
  }
}

function hideSecondSection() {
  if($("#section_newProject") != null) {
    $("#section_newProject").hide("slow","swing");
    $("#section_allProjects").show("slow","swing");
  }
}

function saveProject() {
  let getTitle = document.getElementById("title").value;
  let getGoal = document.getElementById("goal").value;
  hideSecondSection();
  chrome.storage.local.set({
    'title': getTitle
  });
}
