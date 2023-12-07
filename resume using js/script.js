const print =  document.querySelector('#print_box');


function printResume() {
    print.style.display="none";
    window.print();
  }

  window.onafterprint = function() {
    print.style.display = ""; // Set it back to its original display style
  };