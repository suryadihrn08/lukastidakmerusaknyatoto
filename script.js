const box=document.querySelector('#lightbox'), big=document.querySelector('#lightboxImg');
document.querySelectorAll('.photo').forEach(p=>p.addEventListener('click',()=>{big.src=p.dataset.src;box.classList.add('open');box.setAttribute('aria-hidden','false')}));
function closeBox(){box.classList.remove('open');box.setAttribute('aria-hidden','true');big.src=''}
document.querySelector('.close').addEventListener('click',closeBox);box.addEventListener('click',e=>{if(e.target===box)closeBox()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox()});document.querySelector('#year').textContent=new Date().getFullYear();


// Musik latar. Browser modern sering memblokir autoplay bersuara sampai ada interaksi pertama.
const music = document.querySelector('#bgMusic');
const musicToggle = document.querySelector('#musicToggle');
let musicOn = false;
function syncMusicButton(){
  musicToggle.textContent = musicOn ? '❚❚ Musik' : '♫ Musik';
  musicToggle.setAttribute('aria-label', musicOn ? 'Jeda musik' : 'Putar musik');
}
async function startMusic(){
  try { await music.play(); musicOn = true; syncMusicButton(); } catch (_) {}
}
function stopMusic(){ music.pause(); musicOn = false; syncMusicButton(); }
musicToggle.addEventListener('click', () => musicOn ? stopMusic() : startMusic());
window.addEventListener('load', startMusic, {once:true});
['pointerdown','keydown','touchstart'].forEach(evt => document.addEventListener(evt, () => { if (!musicOn) startMusic(); }, {once:true}));
