import{ai as c,r as i,bO as m,bP as p,at as o,bQ as P,bR as b}from"./index.02d7c6f9.js";function h(){const s=c(),a=i.exports.useCallback(async(e,t)=>await s(m({roleId:e,permissionId:t})).unwrap(),[s]),n=i.exports.useCallback(async(e,t)=>await s(p({roleId:e,permissionId:t})).unwrap(),[s]);return{grantingPermissions:a,revokingPermissions:n}}function w(){const[s,a]=i.exports.useState([]),n=c(),e=o(r=>r.permissionsNotOrGranted.list);o(r=>r.permissionsNotOrGranted.fetching);const t=i.exports.useCallback(async()=>await P.getAllPermissions({}).then(a),[]),u=i.exports.useCallback(async(r,l)=>await n(b({roleId:r,permissionParam:l})).unwrap(),[n]);return{fetchPermissions:t,fetchPermissionsAllNotOrGranted:u,permissions:s,permissionsNotOrGranted:e}}export{h as a,w as u};
