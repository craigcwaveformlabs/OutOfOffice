//******** Employee In/Out

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};

xhr.open('GET', '../data/employees.json');

xhr.send();

//*********** Room Booking

var roomXhr = new XMLHttpRequest();

roomXhr.onreadystatechange = function () {
  if(roomXhr.readyState === 4 && roomXhr.status === 200) {
    var rooms = JSON.parse(roomXhr.responseText);
    var statusHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};

roomXhr.open('GET', '../data/rooms.json');

roomXhr.send();