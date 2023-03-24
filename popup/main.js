window.onload = function () {
  const saveButton = document.getElementById("saveButton");
  const addProjectBtn = document.getElementById("addProject");

  saveButton.addEventListener("click", saveProject);
  addProjectBtn.addEventListener("click", hideFirstSection);

  checkStorage();
};

function checkStorage() {
  if (typeof chrome !== "undefined" && typeof chrome.storage !== "undefined") {
    chrome.storage.local.get(["title", "goal"], function (result) {
      if (result.title && result.goal) {
        // Load the "all projects" section
      } else {
        // Load the "add project" section
      }
    });
  }
}

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

function hideUpdateProject() {
  if ($("#section_update_project") != null) {
    $("#section_update_project").hide("slow", "swing");
    $("#section_allProjects").show("slow", "swing");
  }
}

function saveProject() {
  if (
    $("#title").val() != null ||
    ($("#title").val() != "" && $("#goal").val() != null) ||
    $("#goal").val() != ""
  ) {
    let title = $("#title").val();
    let goal = $("#goal").val();
    chrome.storage.local.set({
      title: title,
      goal: goal,
    });
  }
  hideSecondSection();
  updateListOfProjects();
}

function updateListOfProjects() {
  const sectionWithProjects = document.getElementById("section_allProjects");
  chrome.storage.local.get(["title"], function (result) {
    document.getElementById("output").textContent = result.title;
  });
  chrome.storage.local.get(["goal"], function (result) {
    document.getElementById("myBar").textContent = result.goal;
  });
}
