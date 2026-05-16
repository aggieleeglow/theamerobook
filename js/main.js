document.addEventListener('DOMContentLoaded',function(){
  var ham=document.querySelector('.ham');
  var mob=document.getElementById('mob-menu');
  if(ham&&mob){
    ham.addEventListener('click',function(){
      var open=mob.style.display==='block';
      mob.style.display=open?'none':'block';
      ham.setAttribute('aria-expanded',!open);
    });
  }
  document.querySelectorAll('.faq-item').forEach(function(item){
    item.querySelector('.faq-q').addEventListener('click',function(){
      item.classList.toggle('open');
    });
  });
  document.querySelectorAll('.research-tab').forEach(function(tab){
    tab.addEventListener('click',function(){
      var group=this.closest('.section')||document;
      group.querySelectorAll('.research-tab').forEach(function(t){t.classList.remove('active')});
      this.classList.add('active');
      var cat=this.getAttribute('data-cat');
      group.querySelectorAll('.research-card').forEach(function(card){
        card.style.display=(cat==='all'||card.getAttribute('data-cat')===cat)?'block':'none';
      });
    });
  });
});
