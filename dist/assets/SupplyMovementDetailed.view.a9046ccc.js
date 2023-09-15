import{j as t,ao as U,c as l,R as y,C as c,an as A,cl as V,aq as n,S as h,bK as m,u as z,ab as P,r as g,ac as j,ad as L,ae as k}from"./index.02d7c6f9.js";import{u as Q}from"./useSuppliesMovement.a31d4505.js";import{E as q}from"./EmployeesResponsible.2a3e03d6.js";import{N as B}from"./NotificationDescription.ff3dc24c.js";import{E as F}from"./ElementNotFound.5e8cb0bb.js";import"./generateFormatterData.22098d6b.js";import"./index.8c7b72a7.js";import"./index.d7c688b0.js";function K(e){var a,o,r,u,d,i,s,v,E,M,D,p,f,b,x,I,S,N,O,R,C,T,w;return t(U,{title:"Detalhes do Movimento do Recurso",children:l(y,{justify:"space-between",gutter:60,children:[t(c,{xs:24,lg:12,children:t(y,{justify:"space-between",children:l(c,{xs:24,children:[t(A,{orientation:"left",children:"DADOS DO MOVIMENTO DO RECURSO"}),t(V,{level:4,style:{marginBottom:20,textDecoration:"underline"},children:(o=(a=e==null?void 0:e.supplyMovement)==null?void 0:a.supply)==null?void 0:o.name}),l(n,{column:1,bordered:!0,size:"small",children:[t(n.Item,{label:"Desocupado?",children:t(h,{direction:"horizontal",children:(r=e.supplyMovement)!=null&&r.notBusy?t(m,{color:"blue",children:"DESOCUPADO"}):t(m,{color:"red",children:"OCUPADO"})})}),t(n.Item,{label:"Moviment\xE1vel?",children:t(h,{direction:"horizontal",children:(u=e.supplyMovement)!=null&&u.movable?t(m,{color:"blue",children:"MOVIMENT\xC1VEL"}):t(m,{color:"red",children:"IMOVIMENT\xC1VEL"})})}),l(n.Item,{label:"Quantidade Alocada",children:[(d=e.supplyMovement)==null?void 0:d.allocatedQuantity," UNIDADE"]}),l(n.Item,{label:"Quantidade Dispon\xEDvel",children:[(v=(s=(i=e.supplyMovement)==null?void 0:i.supply)==null?void 0:s.supplyDescription)==null?void 0:v.quantity," ","UNIDADE"]}),l(n.Item,{label:"Quantidade em Esp\xE9cie",children:[(D=(M=(E=e.supplyMovement)==null?void 0:E.supply)==null?void 0:M.supplyDescription)==null?void 0:D.total," "," ",(b=(f=(p=e.supplyMovement)==null?void 0:p.supply)==null?void 0:f.supplyDescription)==null?void 0:b.measureUnitType]}),t(n.Item,{label:"Setor",children:(S=(I=(x=e==null?void 0:e.supplyMovement)==null?void 0:x.workStation)==null?void 0:I.sector)==null?void 0:S.name}),t(n.Item,{label:"Esta\xE7\xE3o de Trabalho",children:(O=(N=e==null?void 0:e.supplyMovement)==null?void 0:N.workStation)==null?void 0:O.name}),t(n.Item,{label:"Localiza\xE7\xE3o",children:(C=(R=e==null?void 0:e.supplyMovement)==null?void 0:R.workStation)==null?void 0:C.localization})]})]})})}),t(c,{xs:24,lg:12,children:t(y,{children:l(h,{direction:"vertical",children:[l(c,{xs:24,children:[t(A,{orientation:"left",children:"RESPONS\xC1VEL PELO RECURSO"}),t(q,{employeeResponsible:(T=e==null?void 0:e.supplyMovement)==null?void 0:T.employeeResponsible})]}),t(c,{xs:24,children:t(B,{notification:(w=e.supplyMovement)==null?void 0:w.notification})})]})})})]})})}function $(){z("Detalhes do Movimento do Recurso");const e=P(),{fetchSupplyMovement:a,supplyMovement:o,notFound:r}=Q(),[u,d]=g.exports.useState(!1);return g.exports.useEffect(()=>{isNaN(Number(e.supplyMovementId))||a(Number(e.supplyMovementId)).catch(i=>{var s;if(((s=i==null?void 0:i.data)==null?void 0:s.status)===403){d(!0);return}throw i})},[a,e.supplyMovementId]),isNaN(Number(e.supplyMovementId))?t(j,{to:"/movimento-recursos"}):r?t(F,{description:"Tarefa n\xE3o encontrada"}):u?t(L,{children:"Esse dado n\xE3o pode ser visualizado!"}):o?t(K,{supplyMovement:o}):t(k,{})}export{$ as default};
