// Missão encerrada: as páginas antigas mostram "arquivo destruído".
// A senha do painel de admin libera o aparelho (conferida no Apps Script, nunca fica no site).
(function(){
  try{if(localStorage.getItem('liberado')==='1')return}catch{}
  const R=document.documentElement;R.classList.add('travado');
  const css=document.createElement('style');
  css.textContent=`html.travado body>*:not(#boom){display:none!important}html.travado,html.travado body{background:#050605!important;overflow:hidden}
#boom{position:fixed;inset:0;z-index:999;display:flex;flex-direction:column;justify-content:center;padding:24px 16px;color:#a9c56f;background:#050605;
  font:400 13px/1.7 'JetBrains Mono',ui-monospace,Menlo,Consolas,monospace;text-transform:uppercase;letter-spacing:.08em;overflow:hidden}
#boom::before{content:'';position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(0,0,0,.35) 0 1px,transparent 1px 3px),radial-gradient(ellipse,transparent 40%,#000);z-index:2}
#boom::after{content:'';position:absolute;left:0;right:0;height:22%;top:-25%;pointer-events:none;background:linear-gradient(transparent,rgba(169,197,111,.07),transparent);animation:bScan 4s linear infinite;z-index:2}
@keyframes bScan{to{top:110%}}
#boom .in{position:relative;max-width:520px;width:100%;margin:0 auto}
#boom .bxCode{color:#ff3b1f;font-size:11px;letter-spacing:.25em;animation:bBlink 1.1s steps(1) infinite}
@keyframes bBlink{50%{opacity:.2}}
#boom h1{position:relative;margin:14px 0 18px;font:900 clamp(52px,17vw,96px)/.86 'Big Shoulders Stencil',Impact,'Arial Narrow',sans-serif;color:#ece4cc;animation:bJit 2.6s infinite}
#boom h1::before,#boom h1::after{content:attr(data-t);position:absolute;inset:0;white-space:pre-line}
#boom h1::before{color:#ff3b1f;transform:translate(-3px,0);clip-path:inset(0 0 62% 0);animation:bG1 2.3s infinite steps(2);mix-blend-mode:screen}
#boom h1::after{color:#3cf;transform:translate(3px,0);clip-path:inset(58% 0 0 0);animation:bG2 1.7s infinite steps(2);mix-blend-mode:screen}
@keyframes bG1{0%,82%{clip-path:inset(0 0 62% 0);transform:translate(-3px,0)}86%{clip-path:inset(30% 0 40% 0);transform:translate(-10px,2px)}92%{clip-path:inset(70% 0 5% 0);transform:translate(6px,-1px)}}
@keyframes bG2{0%,78%{clip-path:inset(58% 0 0 0);transform:translate(3px,0)}83%{clip-path:inset(10% 0 75% 0);transform:translate(12px,0)}90%{clip-path:inset(45% 0 30% 0);transform:translate(-7px,1px)}}
@keyframes bJit{0%,90%,100%{transform:none;opacity:1}91%{transform:skewX(-14deg) translateX(-6px);opacity:.7}93%{transform:skewX(9deg) translateX(5px)}95%{opacity:.2}96%{opacity:1}}
#boom .bxLog{min-height:9em;white-space:pre-wrap}
#boom .bxLog i{font-style:normal;color:#ff3b1f}
#boom form{margin-top:26px;display:flex;align-items:center;gap:8px;color:#7d7a62;font-size:11px}
#boom input{flex:1;min-width:0;background:none;border:0;border-bottom:1px solid #3a3d2c;color:#ece4cc;font:inherit;font-size:16px;letter-spacing:.2em;padding:6px 2px;outline:none;text-transform:none}
#boom input:focus{border-color:#a9c56f}
#boom .bxMsg{min-height:1.7em;margin-top:8px;font-size:11px;color:#ff3b1f}
#boom a{display:inline-block;margin-top:30px;color:#7d7a62;font-size:10px;letter-spacing:.2em;text-decoration:none;border-bottom:1px solid #3a3d2c;padding-bottom:3px}
#boom a:hover{color:#ffc928;border-color:#ffc928}
#boom .shk{animation:bShk .4s}
@keyframes bShk{20%{transform:translateX(-9px)}40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(3px)}}
@media(prefers-reduced-motion:reduce){#boom *,#boom::after,#boom h1::before,#boom h1::after{animation:none!important}}`;
  document.head.append(css);

  addEventListener('DOMContentLoaded',()=>{
    const b=document.createElement('div');b.id='boom';b.setAttribute('role','alert');
    b.innerHTML=`<div class="in">
      <div class="bxCode">ERRO 0x16 // MISSÃO DESCONHECIDA</div>
      <h1 data-t="ARQUIVO&#10;DESTRUÍDO">ARQUIVO<br>DESTRUÍDO</h1>
      <div class="bxLog"></div>
      <form><span>&gt; código de acesso:</span><input type="password" autocomplete="current-password" aria-label="Código de acesso"></form>
      <div class="bxMsg" aria-live="polite"></div>
      <a href="obrigado.html">Transmissão final recebida ›</a>
    </div>`;
    document.body.append(b);

    // log corrompido: cada linha aparece embaralhada e se "conserta"
    const LINES=['> protocolo de autodestruição: executado','> dados apagados: 100%','> agentes: <i>[redigido]</i>','> coordenadas: <i>[redigido]</i>','> esta missão nunca existiu.'];
    const G='█▓▒░#/\\<>_$%&@0123456789',log=b.querySelector('.bxLog');
    (async()=>{for(const l of LINES){
      const plain=l.replace(/<[^>]+>/g,'');
      for(let k=0;k<=8;k++){
        const n=Math.floor(plain.length*k/8);log.lastChild?.dataset?.tmp&&log.lastChild.remove();
        const s=document.createElement('span');s.dataset.tmp=1;
        s.textContent=plain.slice(0,n)+[...plain.slice(n)].map(c=>c===' '?' ':G[Math.random()*G.length|0]).join('');log.append(s);
        await new Promise(r=>setTimeout(r,45));
      }
      log.lastChild.remove();const s=document.createElement('span');s.innerHTML=l+'\n';log.append(s);
      await new Promise(r=>setTimeout(r,320));
    }})();

    const f=b.querySelector('form'),inp=f.querySelector('input'),msg=b.querySelector('.bxMsg');
    f.onsubmit=async e=>{
      e.preventDefault();const senha=inp.value;if(!senha)return;msg.style.color='#a9c56f';msg.textContent='> verificando...';
      let ok=false;
      try{const d=await (await fetch(window.API,{method:'POST',body:JSON.stringify({acao:'listar',senha})})).json();ok=!d.erro}catch{}
      if(!ok){msg.style.color='';msg.textContent='> acesso negado';inp.value='';b.querySelector('.in').classList.remove('shk');void b.offsetWidth;b.querySelector('.in').classList.add('shk');return}
      try{localStorage.setItem('liberado','1')}catch{}
      b.remove();R.classList.remove('travado');
      const pw=document.getElementById('pw');if(pw){pw.value=senha;pw.form.requestSubmit()} // painel de admin: entra direto
    };
  });
})();
