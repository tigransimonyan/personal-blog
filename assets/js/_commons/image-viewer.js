$(function () {
  var elem = document.getElementById('post-wrapper');
  if (elem && Viewer) {
    new Viewer(elem, {
      movable: false,
      transition: false,
      toggleOnDblclick: false,
    });
  }
});
