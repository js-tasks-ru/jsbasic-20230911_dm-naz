function isEmpty(obj) {
  // Делаем цикл по свойствам объекта, если есть хотя бы одно... в теле цикла произойдет возврат "false"
  for (prop in obj) {
    return false;
  }

  return true;
}
