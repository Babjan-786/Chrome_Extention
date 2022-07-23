let button = document.getElementById("btn")
let ipel = document.getElementById("text")
let item = document.getElementById("item")
let clrbtn = document.getElementById("clear")
let tabtn = document.getElementById("tab")

let myList = []


let storedNames = JSON.parse(localStorage.getItem("myList"));
    if (storedNames){
        myList = storedNames
        getList()
    }

button.addEventListener('click',function(){
    val = ipel.value
    myList.push(val)
    ipel.value = ""
    localStorage.setItem("myList", JSON.stringify(myList));
    
    getList()

})


clrbtn.addEventListener('click',function(){
    localStorage.clear()
    myList = []
    getList()
})

function getList(){
    listItem = ""
    for (let i=0;i<myList.length;i++){
        listItem +=  `<li>
        <a target='_blank' href="${myList[i]}">${myList[i]}</a>
    </li>`
    }
    item.innerHTML = listItem

}


tabtn.addEventListener("click", function(){
  abc();
});

function abc()
{
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
        myList.push(tabs[0].url)
        localStorage.setItem("myList",JSON.stringify(myList))
        getList()
    });
}


