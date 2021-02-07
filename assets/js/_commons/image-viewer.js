$(function () {
  var elem = document.getElementById('gallery');
  new Viewer(elem, {
    movable: false,
    transition: false,
  });
});
