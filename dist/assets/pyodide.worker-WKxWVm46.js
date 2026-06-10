(function(){"use strict";const c="https://cdn.jsdelivr.net/pyodide/v0.28.3/full/";importScripts(`${c}pyodide.js`);let s=null,n=!1;const o=new Int32Array(new SharedArrayBuffer(8)),p=1<<20,i=new Uint8Array(new SharedArrayBuffer(p));function _(t){return e=>self.postMessage({type:"output",stream:t,text:e})}function u(){if(Atomics.store(o,0,0),self.postMessage({type:"input-request"}),Atomics.wait(o,0,0),Atomics.load(o,0)===2)return null;const e=Atomics.load(o,1);return new TextDecoder().decode(i.slice(0,e))}async function d(){s=await loadPyodide({indexURL:c,stdout:_("stdout"),stderr:_("stderr")}),s.setStdin({stdin:u,autoEOF:!0}),await s.loadPackage("micropip"),n=!0,self.postMessage({type:"ready",version:s.version})}const l=d().catch(t=>{self.postMessage({type:"fatal",message:String(t)})}),y=`
import json, traceback
__ns = {}
__report = {"compileError": None, "tests": []}
try:
    exec(__user_code, __ns)
except Exception:
    __report["compileError"] = traceback.format_exc()
else:
    for __t in json.loads(__tests_json):
        __entry = {"name": __t["name"], "ok": False, "error": None}
        try:
            __entry["ok"] = bool(eval(__t["expr"], __ns))
        except Exception as __e:
            __entry["error"] = f"{type(__e).__name__}: {__e}"
        __report["tests"].append(__entry)
json.dumps(__report)
`;async function f(t,e,r){if(await l,!!n)try{await s.loadPackagesFromImports(e),s.globals.set("__user_code",e),s.globals.set("__tests_json",JSON.stringify(r));const a=await s.runPythonAsync(y);self.postMessage({type:"tests",id:t,report:JSON.parse(a)})}catch(a){self.postMessage({type:"tests-error",id:t,message:String(a.message||a)})}}async function g(t,e){if(await l,!!n)try{await s.loadPackagesFromImports(e,{messageCallback:m=>self.postMessage({type:"status",text:m})});const r=await s.runPythonAsync(e);let a;if(r!=null)try{a=s.globals.get("repr")(r)}catch{a=String(r)}self.postMessage({type:"done",id:t,result:a??null})}catch(r){self.postMessage({type:"error",id:t,message:String(r.message||r)})}}self.onmessage=t=>{const e=t.data;switch(e.type){case"handshake":self.postMessage({type:"shared",control:o.buffer,data:i.buffer});break;case"run":g(e.id,e.code);break;case"runtests":f(e.id,e.code,e.tests);break}}})();
