const {chromium}=require('playwright');
(async()=>{
 const N=60,W=2000,H=1250;
 const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--allow-file-access-from-files']});
 const p=await b.newPage({viewport:{width:W,height:H}});
 p.on('pageerror',e=>console.log('PE',e.message));
 await p.goto('file://'+__dirname+`/render.html?w=${W}&h=${H}`);
 await p.waitForFunction(()=>window.ready);
 require('fs').mkdirSync('raw',{recursive:true});
 for(let i=0;i<N;i++){await p.evaluate(a=>setAngle(a),i*360/N+20);await p.locator('canvas').screenshot({path:`raw/f${String(i).padStart(2,'0')}.png`});}
 await b.close();
})();
