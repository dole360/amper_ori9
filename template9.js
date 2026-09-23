/* Template9 decorative helper only. No API/login/admin/business logic changes. */
(function(){
  'use strict';
  function boot(){
    var hero=document.getElementById('home');
    var content=hero&&hero.querySelector('.hero-content');
    if(!hero||!content)return;

    if(!content.querySelector('.template9-hero-cta')){
      var cta=document.createElement('a');
      cta.className='template9-hero-cta';
      cta.href='#learningSourceBox';
      cta.textContent='LEARN MORE';
      content.appendChild(cta);
    }

    if(!hero.querySelector('.template9-ocean-mark')){
      var mark=document.createElement('div');
      mark.className='template9-ocean-mark';
      mark.setAttribute('aria-hidden','true');
      mark.textContent='≈';
      hero.appendChild(mark);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
