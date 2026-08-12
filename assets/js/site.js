var nav=document.getElementById('nav');
addEventListener('scroll',function(){nav.classList.toggle('stuck',scrollY>10)});
// platform model highlight
document.querySelectorAll('.model').forEach(function(m){m.addEventListener('click',function(){document.querySelectorAll('.model').forEach(function(x){x.classList.remove('on')});m.classList.add('on');});});
// faq
document.querySelectorAll('.faq-list .q button').forEach(function(b){b.addEventListener('click',function(){var q=b.parentElement,a=q.querySelector('.a');var open=q.classList.toggle('open');a.style.maxHeight=open?a.scrollHeight+'px':0;});});
// reveal
(function(){
  document.querySelectorAll('.sec-head,.disclose,.olayer').forEach(function(e){e.classList.add('reveal')});
  document.querySelectorAll('.statrow,.fitgrid,.qtest,.cases,.rs,.roles,.prodlist,.scorebar,.models').forEach(function(e){e.classList.add('stagger')});
  if(!('IntersectionObserver' in window)){document.querySelectorAll('.reveal,.stagger').forEach(function(e){e.classList.add('in')});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal,.stagger').forEach(function(e){io.observe(e);});
})();
// ===== interactive delight layer =====
(function(){
  var RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
  function easeOut(t){return 1-Math.pow(1-t,3);}
  function countUp(el){
    var target=parseFloat(el.dataset.count),dec=+(el.dataset.dec||0),pre=el.dataset.prefix||'',suf=el.dataset.suffix||'';
    if(RM){el.textContent=pre+target.toFixed(dec)+suf;return;}
    var t0=null,dur=1300;
    (function step(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/dur,1);el.textContent=pre+(easeOut(p)*target).toFixed(dec)+suf;if(p<1)requestAnimationFrame(step);})(performance.now());
  }
  var io2=new IntersectionObserver(function(es){es.forEach(function(x){if(!x.isIntersecting)return;var t=x.target;
    if(t.classList.contains('statrow'))t.querySelectorAll('.fig[data-count]').forEach(countUp);
    if(t.classList.contains('case-feat')){var c=t.querySelector('.cstat[data-count]');if(c)countUp(c);t.classList.add('drawn');}
    io2.unobserve(t);});},{threshold:.4});
  document.querySelectorAll('.statrow,.case-feat').forEach(function(e){io2.observe(e);});
  // Market Intelligence live panel
  var rateEl=document.getElementById('miratenum'),rateWrap=document.getElementById('mirate'),mk=document.getElementById('mimk'),
      vol=document.getElementById('mivol'),delta=document.getElementById('midelta');
  if(rateEl){
    var base={r:88.77,lo:71,hi:104},cur=88.77,tick=null;
    function place(v){var pct=Math.max(5,Math.min(95,(v-base.lo)/(base.hi-base.lo)*100));mk.style.left=pct+'%';}
    function setRate(v,dir){cur=v;rateEl.textContent=v.toFixed(2);place(v);
      if(!RM&&dir){rateWrap.classList.remove('up','dn');void rateWrap.offsetWidth;rateWrap.classList.add(dir>0?'up':'dn');}
      delta.textContent=(dir<0?'▼':'▲')+' live';delta.classList.toggle('dn',dir<0);}
    place(88.77);
    document.querySelectorAll('.michips .chip').forEach(function(ch){ch.addEventListener('click',function(){
      document.querySelectorAll('.michips .chip').forEach(function(x){x.classList.remove('on')});ch.classList.add('on');
      var from=cur,to=+ch.dataset.r;base={r:to,lo:+ch.dataset.lo,hi:+ch.dataset.hi};vol.textContent=ch.dataset.v;
      if(RM){setRate(to,to>from?1:-1);return;}
      var t0=null;(function anim(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/700,1);setRate(from+(to-from)*easeOut(p),to>=from?1:-1);if(p<1)requestAnimationFrame(anim);})(performance.now());
    });});
    function walk(){var target=+(base.r+(Math.random()-0.5)*0.7).toFixed(2);setRate(target,target>=cur?1:-1);}
    if(!RM){var mio=new IntersectionObserver(function(es){es.forEach(function(x){
      if(x.isIntersecting){if(!tick)tick=setInterval(walk,3400);}else if(tick){clearInterval(tick);tick=null;}});},{threshold:.25});
      mio.observe(document.querySelector('.prodfeat'));}
  }
  // platform card cursor spotlight
  document.querySelectorAll('.model').forEach(function(m){m.addEventListener('mousemove',function(e){
    var r=m.getBoundingClientRect();m.style.setProperty('--mx',(e.clientX-r.left)+'px');m.style.setProperty('--my',(e.clientY-r.top)+'px');});});
})();
