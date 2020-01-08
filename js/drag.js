let salary = salarybar.querySelector('.salary');

salary.onmousedown = function(event) {
  event.preventDefault(); // prevent selection start (browser action)

  let shiftX = event.clientX - salary.getBoundingClientRect().left;
  // shiftY not needed, the salary moves only horizontally

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - salarybar.getBoundingClientRect().left;

    // the pointer is out of salarybar => lock the salary within the bounaries
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = salarybar.offsetWidth - salary.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    salary.style.left = newLeft + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }

};

salary.ondragstart = function() {
  return false;
};
