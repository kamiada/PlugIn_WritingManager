
window.onload=function(){
  const saveButton = document.getElementById("saveButton");
  const addProjectBtn = document.getElementById("addProject");

  saveButton.addEventListener("click", saveProject);
  addProjectBtn.addEventListener("click", hideSection);
}

function hideSection() {
  if($("#section_no_projects") != null) {
    $("#section_no_projects").hide("slow","swing");
    $("#section_newProject").show("slow","swing");
  }
}

function saveProject() {
  let getTitle = document.getElementById("title").value;
  let getGoal = document.getElementById("goal").value;

  chrome.storage.local.set({
    'title': title
  });
}
