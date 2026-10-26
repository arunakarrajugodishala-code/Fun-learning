/* Loaded only inside the isolated test frame, before any app scripts. */
const localStorage=(()=>{const m=new Map();return {getItem:k=>m.get(String(k))??null,setItem:(k,v)=>m.set(String(k),String(v)),removeItem:k=>m.delete(String(k)),clear:()=>m.clear(),get length(){return m.size},key:i=>Array.from(m.keys())[i]||null}})();
window.__academyIsolatedStore=localStorage;window.__academyLab=true;
