(function(){
  var b=document.querySelector('.blob'); if(!b) return;
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var w=innerWidth,h=innerHeight;
  var tx=w*.6,ty=h*.4,x=tx,y=ty,moved=false;
  function place(){var s=b.offsetWidth;b.style.transform='translate('+(x-s/2)+'px,'+(y-s/2)+'px)'}
  addEventListener('resize',function(){w=innerWidth;h=innerHeight;if(!moved){tx=w*.6;ty=h*.4}});
  if(reduce){place();return}
  addEventListener('pointermove',function(e){moved=true;tx=e.clientX;ty=e.clientY},{passive:true});
  function tick(t){
    if(!moved){tx=w*.6+Math.sin(t/4000)*w*.15;ty=h*.4+Math.cos(t/5300)*h*.15}
    x+=(tx-x)*.02;y+=(ty-y)*.02;place();requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick);
})();
