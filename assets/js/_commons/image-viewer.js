$(function () {
  var elem = document.getElementById('main');
  if (elem && Viewer) {
    new Viewer(elem, {
      movable: false,
      transition: false,
      toggleOnDblclick: false,
      rotatable: false,
      navbar: false,
      scalable: false,
      zoomable: false,
      tooltip: false,
    });
  }
});
