let windowWidth = window.innerWidth

let summariesWidth = document.getElementById('summaries').offsetWidth
let summariesHeight = document.getElementById('summaries').offsetHeight

let listContentHeight = document.getElementById('list-content').offsetHeight

let listWidth = document.getElementById('list').offsetWidth

console.log('Window', windowWidth)
console.log('Summaries', summariesWidth)
console.log('List content height', listContentHeight)

// document.getElementById('list').style.width = windowWidth - summariesWidth + 'px'
// document.getElementById('form').style.width = windowWidth - summariesWidth + 'px'

console.log('List', listWidth)
console.log('Summaries height', summariesHeight)

function showForm() {
    console.log('Showing form')
    document.getElementById('list').style.display = 'none'
    document.getElementById('form').style.display = 'flex'
}

function showList() {
    console.log('Showing list')
    document.getElementById('list').style.display = 'flex'
    document.getElementById('form').style.display = 'none'
}

document.getElementById('summaries').style.height = listContentHeight + 'px'