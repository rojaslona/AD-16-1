function showLinks(){
  var a=document.getElementsByTagName('a');
  var n=a.length;
  var first=n? a[0].href:'';
  var last=n? a[n-1].href:'';
  alert('Links: '+n+'\nFirst: '+first+'\nLast: '+last);
}

