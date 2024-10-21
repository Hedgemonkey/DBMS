$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.modal').modal();
  // Initialize Modals (using event delegation for dynamic content)
  $(document).on('click', 'a[href^="#modal-"]', function (e) {
    e.preventDefault(); // Prevent default link behavior
    var modalId = $(this).attr('href'); // Get the modal ID from the link's href
    console.log(modalId);
    $(modalId).modal('open'); // Open the modal
  });
});
