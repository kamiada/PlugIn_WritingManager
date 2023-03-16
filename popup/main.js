
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

function getValues() {
  let title2 = $("title").val();
  console.log(title2);
  if($("#title").val() != null || $("#title").val() != '') {
    let title = $("#title").val();
    chrome.storage.local.set({
      'title' : title
    });
    check();
  }
}

function saveProject() {
  getValues();

  hideSecondSection();
  // chrome.storage.local.set({
  //   'title': getTitle
  // });
  // chrome.storage.local.set({ key: getTitle }).then(() => {
  //   console.log("Value is set to " + getTitle);
  // });
}

function check() {
    var res = "";
    chrome.storage.local.get('title', function (result) {
      console.log(result);
        res = result.title;
        alert(result.title);
        $("#title").val(res);
    });
}
