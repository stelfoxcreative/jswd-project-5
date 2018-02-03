$(document).ready(function () {

  const userApi = "https://randomuser.me/api/?nat=gb&exc=login&noinfo";
  const userOptions = {
    dataType: 'json',
    results: 12,
  };

  function displayPhotos(data) {
    let photoHTML = '';
    $.each(data.results, function (i, user) {
      photoHTML += `<div class="col-sm-6 col-lg-4 clearfix">
        <div class="card border-grey clearfix">
        <div class="card-link">
        <div class="profile-pic">
        <img src="${user.picture.large}" class="img-circle img-responsive">
        </div>
        <div class="profile-info clearfix">
        <h2 class="name">${user.name.first} ${user.name.last}</h2>
        <p class="email text-muted">${user.email}</p>
        <p class="location-city text-muted">${user.location.city}, UK</p>
        <div class="is-modal">
        <hr>
        <p class="mobile-number text-muted">${user.cell}</p>
        <p class="location-street text-muted">${user.location.street}, ${user.location.state}, ${user.location.postcode}</p>
        <p class="dob text-muted">Birthday: ${user.dob.substring(0, 10)}</p>
        </div>
        </div>
        </div>
        </div>
      </div>`
    });
    $('#photos').html(photoHTML);
  }

  $.getJSON(userApi, userOptions, displayPhotos);

  $('body').on('click', '.card-link', function () {
    $(".modal-body").html("");
    $(this).clone().appendTo('#myModal .modal-body')
    $('#myModal').modal();
  });

  $(".modal").on("hidden.bs.modal", function () {
    $(".modal-body").html("");
  });

});