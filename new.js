function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  let letters = /^[a-zA-Z]+$/;
  if (name.match(letters)) {
    var checkboxs = document.getElementsByName("subject");
    var okay = false;
    for (var i = 0, l = checkboxs.length; i < l; i++) {
      if (checkboxs[i].checked) {
        okay = true;
        break;
      }
    }
    if (okay) {
      document.getElementById("display").innerHTML = console.log(
        name + document.forms["myForm"]["phone-number"].value + checkboxs
      );
      return true;
    } else {
      alert("Please check a checkbox");
      return false;
    }
  } else {
    alert("name is not validated");
    return false;
  }
}
