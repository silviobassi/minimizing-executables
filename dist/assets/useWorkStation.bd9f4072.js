import{ai as S,r as t,d1 as k,d0 as p,aj as W}from"./index.02d7c6f9.js";function h(){const r=S(),[a,s]=t.exports.useState(),[n,c]=t.exports.useState(),i=t.exports.useCallback(async o=>await r(k(o)).unwrap(),[r]),u=t.exports.useCallback(async o=>{try{await p.getWorkStation(o).then(s)}catch(e){if(e instanceof W)c(!0);else throw e}},[]);return{removeWorkStation:i,fetchWorkStation:u,workStation:a,notFound:n}}export{h as u};
