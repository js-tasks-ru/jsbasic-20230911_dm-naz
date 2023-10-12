function highlight(table) {
  // Цикл для применения действий к каждой строке таблицы кроме первой
  for (let i = 1; i < table.rows.length; i++) {
    let tr = table.rows[i];

    // Проверка наличия атрибута и добавление класса в зависимеости от значения атрибута
    if (tr.cells[3].hasAttribute("data-available")) {
      if (tr.cells[3].dataset.available === "true") {
        tr.classList.add("available");
      } else {
        tr.classList.add("unavailable");
      }
    } else {
      tr.setAttribute("hidden", "");
    }

    // Проверка значения в ячейке для установки соответствующего класса male | female
    if (tr.cells[2].textContent == "m") {
      tr.classList.add("male");
    } else {
      tr.classList.add("female");
    }

    // Добавление inline-стиля для строк с значением ячейки Age менее 18
    if (parseInt(tr.cells[1].textContent) < 18) {
      tr.style.textDecoration = "line-through";
    }
  }
}
