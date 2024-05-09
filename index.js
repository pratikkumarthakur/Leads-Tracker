let myLeads = [];

// myLeads=JSON.stringify(myLeads)
// console.log(typeof myLeads)

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")

// localStorage.clear()
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
  myLeads=leadsFromLocalStorage
  render(myLeads)
}

// const tabs =[
//   {url:"https://www.linkedin.com/in/pratik-kumar-9b073a215/"}
// ]

tabBtn.addEventListener("click",function(){
chrome.tabs.query({active:true,currentWindow:true},function(tabs){
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render(myLeads)
})

  // console.log(tabs[0].url)
  // myLeads.push(tabs[0].url)
  // localStorage.setItem("myLeads",JSON.stringify(myLeads))
})

function render(leads) {
  let listItems = " ";
  for (let i = 0; i < leads.length; i++) {
    
    // listItems += "<li><a target='_blank' href='" + myLeads[i] +"'>" +myLeads[i] +"</a></li>";
    listItems += `
    <li>
    <a target='_blank' href='${leads[i]}'>
    ${leads[i]}
    </a>
    </li>
    `
  }
  console.log(listItems)
  ulEl.innerHTML = listItems;
}


deleteBtn.addEventListener("dblclick",function(){
  // console.log("double clicked")
  localStorage.clear()
  myLeads=[]
  render(myLeads)
})


inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
inputEl.value=""
 localStorage.setItem("myLeads",JSON.stringify(myLeads))

  render(myLeads);

// console.log(localStorage.getItem("myLeads"))
});
