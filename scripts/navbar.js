$.get('templates/navbar.html', data => {
  $('header').html(data);
  yall();
});