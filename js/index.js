var nameInput = document.getElementById("nameInput");
var urlInput = document.getElementById("urlInput");
// var info =` <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sequi?</p>`;

var informations = [];
if (localStorage.getItem("informations") != null) {
  informations = JSON.parse(localStorage.getItem("informations"));
  displayinfo();
}
function addInformation() {
  if (validateNameInput(nameInput.value) && validateurlInput(urlInput.value)) {
    information = {
      name: nameInput.value,
      url: urlInput.value,
    };
    if (information.name != null && information.url != null) {
      informations.push(information);
    }
    console.log(informations);

    localStorage.setItem("informations", JSON.stringify(informations));
    displayinfo();
    clearForm();
  }
}

function displayinfo() {
  // window.alert("Hello")
  var info = "";
  for (let i = 0; i < informations.length; i++) {
    info += `<tr>
    <td class="py-4">${informations[i].name}</td>
    <td><button onclick="visitUrl(${i})" class=" btn btn-primary px-4"><a href="" class="test text-white" target="_blank">Visit</a></button></td>
    <td><button onclick="deleteInformation(${i})" class="btn btn-danger">Delete</button></td>
</tr> `;
  }
  document.getElementById("tableBady").innerHTML = info;
}

function clearForm() {
  document.getElementById("nameInput").value = "";
  document.getElementById("urlInput").value = "";
}

function deleteInformation(index) {
  console.log("Hi");
  informations.splice(index, 1);
  localStorage.setItem("informations", JSON.stringify(informations));

  displayinfo();
}

function validateNameInput(nameInput) {
  if (/^[A-Z][a-z]{2,}$/.test(nameInput) == true) {
    return true;
  } else {
    return false;
  }
}
function validateurlInput(urlInput) {
  if (/^(https:)[a-z]{2,}[0-9]*$/.test(urlInput) == true) {
    return true;
  } else {
    return false;
  }
}

function visitUrl(http) {
  var demo = document.querySelector(".test");

  demo.addEventListener("click", function () {
    console.log("Hi");
    demo.setAttribute("href", "`${informations[i].url}`");
  });
}
