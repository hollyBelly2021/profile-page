let prevScrollPos = window.pageYOffset;
window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    $(".main-navbar").addClass("show");
  } else {
    $(".main-navbar").removeClass("show");
  }
});
