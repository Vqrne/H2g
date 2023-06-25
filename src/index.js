const clearButton = document.getElementById("empty-table");
clearButton.addEventListener("click", function () {
  var tableRef = document.getElementById("table");
  while (tableRef.rows.length > 1) {
    tableRef.deleteRow(1);
  }
});

const submitButton = document.getElementById("submit-data");
submitButton.addEventListener("click", function () {
  var username = document.getElementById("input-username").value;
  var email = document.getElementById("input-email").value;
  var address = document.getElementById("input-address").value;
  var admin = document.getElementById("input-admin").value;
  let tableRef = document.getElementById("table");
  var exists = false;

  var rows = tableRef.rows;
  for (var i = 1; i < rows.length; i++) {
    var cols = rows[i].cells;
    if (cols[0].innerHTML === username) {
      cols[1].innerHTML = email;
      cols[2].innerHTML = address;
      cols[3].innerHTML = admin;
      exists = true;
    }
  }
  if (exists === false) {
    let newRow = tableRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    let newCell1 = newRow.insertCell(1);
    let newCell2 = newRow.insertCell(2);
    let newCell3 = newRow.insertCell(3);
    newCell.innerHTML = username;
    newCell1.innerHTML = email;
    newCell2.innerHTML = address;
    newCell3.innerHTML = admin;
  }
});
