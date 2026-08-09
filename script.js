(function(){
  var lb=document.getElementById('lb');
  if(!lb) return;
  var lbImg=lb.querySelector('img'), lbCap=lb.querySelector('.cap'), lbClose=document.getElementById('lbClose');
  function open(src,cap){lbImg.src=src;lbCap.textContent=cap||'';lb.classList.add('open');}
  function close(){lb.classList.remove('open');lbImg.src='';}
  document.querySelectorAll('[data-zoom] img, figure img, .projrow img').forEach(function(im){
    im.addEventListener('click',function(){
      var fc=im.closest('figure'); var b=fc?fc.querySelector('figcaption b'):null;
      open(im.src, b?b.textContent:(im.getAttribute('alt')||''));
    });
  });
  if(lbClose) lbClose.addEventListener('click',close);
  lbImg.addEventListener('click',close);
  lb.addEventListener('click',function(e){if(e.target===lb)close();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
})();
