$(function () {
  var elem = document.getElementById('gallery');
  if (elem && Viewer) {
    new Viewer(elem, {
      movable: false,
      transition: false,
      toggleOnDblclick: false,
    });
  }
});
