function cImg() {
  document.getElementById('picsel').style.zIndex = "105";
  document.getElementById('picsel').style.visibility = "visible";
}
function crImg() {
  var value = document.getElementById('imgss').value;
  document.getElementById('textarea').innerHTML += '<img src="' + value + '" alt="Image failed to load" />';
  document.getElementById('picsel').style.visibility = "hidden";
}
document.addEventListener('contextmenu', function(e) {
  e.preventDefault(); 
 document.getElementById('rcmenu').style.zIndex = 100; document.getElementById('rcmenu').style.marginLeft = e.clientX + 'px'; document.getElementById('rcmenu').style.marginTop = e.clientY + 'px';  document.getElementById('rcmenu').style.visibility = "visible";
});
document.addEventListener('click', function(e) {
  var cm = document.getElementById('rcmenu');
  if (!cm.contains(e.target)) {
    cm.style.visibility = "hidden";
  }
})
var iHt = document.getElementById('textarea');
document.getElementById('sel').onchange=function() {
  console.log(this.value)
  var sel = window.getSelection().toString();
  
  iHt.innerHTML = iHt.innerHTML.replace(sel, '<span style="font-family: ' + this.value + ';">' + sel + '</span>');
}
document.getElementById('sel-TC').onchange=function() {
  if (this.value == "Custom...") {
    var color = prompt('Text Color:');
    var sel = window.getSelection().toString();
    iHt.innerHTML = iHt.innerHTML.replace(sel, '<span style="color: ' + color + ';">' + sel + '</span>');
  } else {
    var sel =   window.getSelection().toString();
    iHt.innerHTML = iHt.innerHTML.replace(sel, '<span style="color: ' + this.value + ' !important;">' + sel + '</span>');
  }
}
document.getElementById('sel-STY').onchange=function() {
  var sel = window.getSelection().toString();
  if (this.value == "Italic") {
    iHt.innerHTML = iHt.innerHTML.replace(sel, '<em>' + sel + '</em>');
  } else if (this.value == "Bold") {
    iHt.innerHTML = iHt.innerHTML.replace(sel, '<b>' + sel + '</b>');
  } else if (this.value == "Underline") {
    iHt.innerHTML = iHt.innerHTML.replace(sel, '<u>' + sel + '</u>');
  } else if (this.value == "Regular") {
    iHt.innerHTML = iHt.innerHTML.replace(sel, '<span style="text-decoration: none;font-style: normal;font-weight: normal;">' + sel + '</span>');
  }
}
