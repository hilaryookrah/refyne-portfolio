(function(){
  var rm=matchMedia('(prefers-reduced-motion:reduce)').matches, fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
  var star='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C13 7 17 11 24 12C17 13 13 17 12 24C11 17 7 13 0 12C7 11 11 7 12 0Z"/></svg>';
  function spark(p,c){if(!p)return;var s=document.createElement('span');s.className='spark '+c;s.innerHTML=star;p.appendChild(s)}
  var hero=document.querySelector('.hero');
  ['a','b','c'].forEach(function(c){spark(hero,c)});
  ['d','e'].forEach(function(c){spark(document.querySelector('.portrait'),c)});
  spark(document.querySelector('.clips'),'f');
  function reset(s){s.innerHTML=s.dataset.html;s.classList.remove('live')}
  document.addEventListener('click',function(e){
    var g=e.target.closest('.go');if(!g)return;
    document.querySelectorAll('.screen.live').forEach(reset);
    var s=g.parentNode;s.dataset.html=s.innerHTML;
    function mount(el){s.innerHTML='';s.appendChild(el);s.classList.add('live')}
    function yt(){var f=document.createElement('iframe');f.src='https://www.youtube-nocookie.com/embed/'+s.dataset.id+'?autoplay=1&playsinline=1&rel=0&modestbranding=1';f.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';f.allowFullscreen=true;f.title=s.dataset.title;mount(f)}
    var src=s.dataset.file+'.mp4';
    fetch(src,{method:'HEAD'}).then(function(r){if(!r.ok)throw 0;var v=document.createElement('video');v.src=src;v.controls=true;v.autoplay=true;v.playsInline=true;v.style.cssText='position:absolute;inset:0;width:100%;height:100%;object-fit:cover';mount(v)}).catch(yt);
  });
  var box=document.createElement('div');box.className='lightbox';box.hidden=true;
  box.setAttribute('role','dialog');box.setAttribute('aria-modal','true');box.setAttribute('aria-label','Thumbnail viewer');
  box.innerHTML='<button class="lb-close" type="button" aria-label="Close">\u00d7</button><figure><img alt=""><figcaption></figcaption></figure>';
  document.body.appendChild(box);
  var lbImg=box.querySelector('img'),lbCap=box.querySelector('figcaption'),lastBtn;
  function openLb(t){var i=t.querySelector('img');lbImg.src=i.currentSrc||i.src;lbImg.alt=i.alt;lbCap.textContent=t.querySelector('span').textContent;lastBtn=t;box.hidden=false;document.documentElement.classList.add('lb-open');box.querySelector('.lb-close').focus()}
  function closeLb(){box.hidden=true;document.documentElement.classList.remove('lb-open');lbImg.removeAttribute('src');if(lastBtn)lastBtn.focus()}
  document.addEventListener('click',function(e){var t=e.target.closest('.thumb');if(t){if(e.metaKey||e.ctrlKey||e.shiftKey||e.button){return}e.preventDefault();openLb(t);return}if(!box.hidden&&!e.target.closest('img'))closeLb()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!box.hidden)closeLb()});
  if(rm)return;
  var h=document.querySelector('.hero h1');
  h.innerHTML=h.textContent.split(' ').map(function(w,i){return '<span class="w"><span style="--i:'+i+'">'+w+'</span></span>'}).join(' ');
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;t.classList.add('in');io.unobserve(t);setTimeout(function(){t.classList.remove('rv','in')},1100)}})},{threshold:.15});
  document.querySelectorAll('.tile,.steps li,.cat>p,.statement,.express,.portrait img,.clips img').forEach(function(el,i){el.classList.add('rv');el.style.setProperty('--d',(i%3)*90+'ms');io.observe(el)});
  if(!fine)return;
  addEventListener('pointermove',function(e){
    var x=e.clientX,y=e.clientY,t=e.target;
    var hr=hero.getBoundingClientRect();hero.style.setProperty('--hx',(x-hr.left)+'px');hero.style.setProperty('--hy',(y-hr.top)+'px');
    var b=t.closest('.btn');if(b){var br=b.getBoundingClientRect();b.style.transform='translate('+((x-br.left-br.width/2)*.2)+'px,'+((y-br.top-br.height/2)*.3)+'px)'}
  });
  addEventListener('pointerout',function(e){var b=e.target.closest&&e.target.closest('.btn');if(b)b.style.transform=''});
})();
