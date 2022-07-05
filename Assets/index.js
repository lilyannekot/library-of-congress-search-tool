var searchEl = $("#search-engine")
var searchFilterEl = $("#search-filter")
var searchBtn = $("#search-btn")


function getData(event){
    event.preventDefault();
    
    var searchVal = searchFilterEl.value().trim()
    var searchBar = searchEl.value().trim()
    
    var pageChange = "search.html" 

    if (!searchFilterEl){
        console.log("no selection")
        return;
    }
}

searchEl.addEventListener("submit", getData)

/*
input field = enter query term
dropdown menu to select options
submit the results via btn
    grab a hold of the input field value
    grand a gold of the value of the selected item
    redirect document.location to 2nd page


2nd page:
    grab query paramaters
"https://www.loc.gov/" + searchVal + "/?q=" + searchBar +"&fo=json"
*/