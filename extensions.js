let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");
const formEl = document.getElementById("form-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

inputBtn.addEventListener("click", function () {
  console.log("button was clicked");

  myLeads.push(inputEl.value);
  console.log(myLeads);

  inputEl.value = "";
  console.log(inputEl.value);

  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads);
});

deleteBtn.addEventListener("dblclick", function () {
  console.log("Delete Button Clicked");
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

tabBtn.addEventListener("click", function () {
  //grab the url of the current tab
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      formEl.textContent = tabs[0].url;
      myLeads.push(tabs[0].url);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads);
    }
  );
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>
            <a target = '_blank' href =' ${leads[i]} '>
                ${leads[i]}
            </a>
        </li>
    `;
    console.log(listItems);
  }
  ulEl.innerHTML = listItems;
}
