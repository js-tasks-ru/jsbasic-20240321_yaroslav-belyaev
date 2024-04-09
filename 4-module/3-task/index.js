function highlight(table) {
  for (let i = 0; i < table.tBodies[0].rows.length; i++) {
    let row = table.tBodies[0].rows[i];

    if (row.cells[3].hasAttribute("data-available")) {
      if (row.cells[3].dataset.available === "true") {
        row.classList.add("available");
      } else {
        row.classList.add("unavailable");
      }
    } else {
      row.hidden = true;
    }

    if (row.cells[1].textContent < 18) {
      row.style.textDecoration = "line-through";
    }

    if (row.cells[2].textContent === 'm') {
      row.classList.add('male');
    } else {
      row.classList.add('female');
    }
  }
}
