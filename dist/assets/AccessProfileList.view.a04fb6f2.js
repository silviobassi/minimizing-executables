import{b as v,a as C,e as D,r as f,j as e,ad as g,c as t,P as w,S as r,al as R,am as d,B as a,an as I,ao as S,ap as k,aq as m,T as o,E as h,ar as x,n as E,as as A,u as z}from"./index.02d7c6f9.js";import{u as L}from"./useAccessProfiles.099dddd5.js";import{u as T}from"./useAccessProfile.ee5473a7.js";function j(){var u;v();const{fetching:P,roles:n,fetchRoles:c}=L();C();const{xs:l}=D(),{removeRole:p}=T(),[b,y]=f.exports.useState(!1);return f.exports.useEffect(()=>{c().catch(s=>{var i;if(((i=s==null?void 0:s.data)==null?void 0:i.status)===403){y(!0);return}throw s})},[c]),b?e(g,{children:"Voc\xEA n\xE3o pode visualizar esses dados!"}):t(w,{children:[t(r,{style:{width:"100%"},direction:l?"vertical":"horizontal",size:"middle",children:[e(R,{onReload:c}),e(d,{to:"/perfil-de-acesso/criar",children:e(a,{type:"primary",size:"large",block:!!l,style:l?{width:"100%"}:{display:"flex"},children:"CRIAR PERFIL DE ACESSO"})})]}),e(I,{}),e(S,{title:"Edi\xE7\xE3o de Perfis de Acesso",children:e(k,{loading:P,rowKey:"id",dataSource:(u=n==null?void 0:n._embedded)==null?void 0:u.roles,columns:[{title:"Colaboradores",responsive:["xs"],render(s){return e(r,{direction:"vertical",children:t(m,{column:1,size:"small",children:[e(m.Item,{label:"Nome:",children:s==null?void 0:s.name}),e(m.Item,{label:"A\xE7\xF5es",children:t(r,{size:"small",children:[e(o,{title:"Editar",children:e(d,{to:`/perfil-de-acesso/editar/${s.id}`,children:e(a,{type:"link",shape:"circle",icon:e(h,{})})})}),e(x,{popConfirmTitle:"Remover Perfil de Acesso?",popConfirmContent:"Deseja mesmo remover este Perfil?",onConfirm:async()=>{await p(Number(s.id)),E.success({message:"Sucesso",description:`Perfil de Acesso ${s.name} removido com sucesso`})},children:e(o,{title:"Excluir",placement:"bottom",children:e(a,{type:"link",children:e(A,{})})})})]})})]})})}},{title:"ID",dataIndex:"id",width:60,responsive:["sm"]},{title:"Nome",dataIndex:"name",responsive:["sm"]},{title:"A\xE7\xF5es",dataIndex:"actions",align:"center",width:200,responsive:["sm"],render:(s,i)=>t(r,{size:"middle",children:[e(o,{title:"Editar",children:e(d,{to:`/perfil-de-acesso/editar/${i.id}`,children:e(a,{type:"link",shape:"circle",icon:e(h,{})})})}),e(x,{popConfirmTitle:"Remover Perfil de Acesso?",popConfirmContent:"Deseja mesmo remover este Perfil?",onConfirm:async()=>{await p(Number(i.id)),E.success({message:"Sucesso",description:`Perfil de Acesso ${i.name} removido com sucesso`})},children:e(o,{title:"Excluir",placement:"bottom",children:e(a,{type:"link",children:e(A,{})})})})]})}],pagination:!1})})]})}function B(){return z("Lista de Perfis de Acesso"),v(),e(j,{})}export{B as default};
