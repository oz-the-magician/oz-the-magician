/* Animated tesseract logo: injects its styles, then draws every svg.tess on the page. */
(function(){const st=document.createElement('style');st.textContent='svg.tess line{stroke-linecap:round}svg.tess line{stroke:#9FE3CF;stroke-width:.8}svg.tess .core{fill:#fff;filter:drop-shadow(0 0 1.2px #ffd2b0)}svg.tess .halo{fill:url(#tessGlow);transform-origin:32px 32px;animation:tessPulse 2.8s cubic-bezier(.45,0,.55,1) infinite}@keyframes tessPulse{0%,100%{transform:scale(1);opacity:1}37%{transform:scale(.88);opacity:.8}61%{transform:scale(1.08);opacity:.95}}@media (prefers-reduced-motion:reduce){svg.tess .halo{animation:none}}svg.tess{display:block;width:64px;height:64px;overflow:visible}';document.head.appendChild(st)})();
/* tesseract mark: 16 vertices of a 4D cube, rotated in XW and YZ planes, projected 4D→3D→2D */
(function(){
const V=[];for(let i=0;i<16;i++)V.push([i&1?1:-1,i&2?1:-1,i&4?1:-1,i&8?1:-1]);
const E=[];for(let i=0;i<16;i++)for(let b=0;b<4;b++){const j=i^(1<<b);if(i<j)E.push([i,j])}
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('svg.tess').forEach(svg=>{
  const NS='http://www.w3.org/2000/svg',lines=E.map(([a,b])=>{const l=document.createElementNS(NS,'line');
    l.setAttribute('class',(V[a][3]<0&&V[b][3]<0)?'in':(V[a][3]>0&&V[b][3]>0)?'out':'link');svg.appendChild(l);return l});
  function draw(t){const a=t*0.00035,b=t*0.00022,ca=Math.cos(a),sa=Math.sin(a),cb=Math.cos(b),sb=Math.sin(b);
    const P=V.map(([x,y,z,w])=>{let x1=x*ca-w*sa,w1=x*sa+w*ca;let y1=y*cb-z*sb,z1=y*sb+z*cb;
      const k4=1/(2.6-w1);let X=x1*k4,Y=y1*k4,Z=z1*k4;const r=.5,cr=Math.cos(r),sr=Math.sin(r);const X2=X*cr-Z*sr,Z2=X*sr+Z*cr;
      const k3=1/(2.4-Z2);return [32+X2*k3*48,32+Y*k3*48]});
    lines.forEach((l,i)=>{const [p,q]=E[i];l.setAttribute('x1',P[p][0].toFixed(2));l.setAttribute('y1',P[p][1].toFixed(2));l.setAttribute('x2',P[q][0].toFixed(2));l.setAttribute('y2',P[q][1].toFixed(2))});
    if(!reduce)requestAnimationFrame(draw)}
  const g=document.createElementNS(NS,'g');g.innerHTML='<defs><radialGradient id="tessGlow"><stop offset="0" stop-color="#fff" stop-opacity="1"/><stop offset=".12" stop-color="#ffe7d4" stop-opacity=".95"/><stop offset=".3" stop-color="#ffab7a" stop-opacity=".5"/><stop offset=".6" stop-color="#ff7a59" stop-opacity=".14"/><stop offset="1" stop-color="#ff7a59" stop-opacity="0"/></radialGradient></defs><circle class="halo" cx="32" cy="32" r="12"/><circle class="core" cx="32" cy="32" r="1.3"/>';svg.appendChild(g);draw(reduce?4200:0);if(!reduce)requestAnimationFrame(draw)})})();
