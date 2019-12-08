var table = document.getElementById("tableId")
var rows = table.getElementsByTagName("tr")

for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i]
    var createClickHandler = function(row) {
        return function() {
            var cell = row.getElementsByTagName("td")[0]
            var id = cell.innerHTML
            console.log("id:" + id)
            console.log(row)
        }
    }
    currentRow.onclick = createClickHandler(currentRow)
}