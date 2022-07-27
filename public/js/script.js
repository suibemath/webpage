window.onload = function(){
  ['work', 'labs'].forEach(function(nav_link){
    document.getElementById('nav-'+nav_link).addEventListener('input', function(ev){
      
  const grid_elm = document.getElementById(nav_link + '-grid');
    Array.prototype.forEach.call(grid_elm.children, function(child_elm){
      child_elm.classList.remove('fade-up');
      setTimeout(function() { child_elm.classList.add('fade-up') }, 300);
    });
  });
  });
}