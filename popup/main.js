let output = document.getElementById("output");

window.onload = function () {
  const saveButton = document.getElementById("saveButton");
  const addProjectBtn = document.getElementById("addProject");

  saveButton.addEventListener("click", saveProject);
  addProjectBtn.addEventListener("click", hideFirstSection);
};

function hideFirstSection() {
  if ($("#section_no_projects") != null) {
    $("#section_no_projects").hide("slow", "swing");
    $("#section_newProject").show("slow", "swing");
  }
}

function hideSecondSection() {
  if ($("#section_newProject") != null) {
    $("#section_newProject").hide("slow", "swing");
    $("#section_allProjects").show("slow", "swing");
  }
}

function saveProject() {
  if ($("#title").val() != null || $("#title").val() != "") {
    let title = $("#title").val();
    chrome.storage.local.set({
      title: title,
    });
  }
  // check();
  updateListOfProjects();
  hideSecondSection();
}

function check() {
  var res = "";
  chrome.storage.local.get("title", function (result) {
    console.log(result);
    res = result.title;
    alert(result.title);
    $("#title").val(res);
  });
}

function updateListOfProjects() {
  const sectionWithProjects = document.getElementById("section_allProjects");
  chrome.storage.local.get("title", function (result) {
    res = result.title;
    if (res!= null) {
      output.textContent = $("#title").val(res);
      output.textContent = res;
    }
  });
}

function updateProject() {
  let data = {
    text: input1.value,
    number: input2.value,
  };
  browser.storage.local.set(data);
}
