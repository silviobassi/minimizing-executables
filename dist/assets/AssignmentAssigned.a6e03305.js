import{r as h,j as e,M as _,N as j,e as K,ao as W,c as s,R as G,C as k,an as P,aq as o,S as y,bK as J,ah as x,B as d,bp as X,cB as Y,n as q,I as $,cq as Z,cC as p}from"./index.02d7c6f9.js";import{E as H}from"./EmployeesResponsible.2a3e03d6.js";import{F as c}from"./index.d0d82724.js";import{f as ee}from"./index.d7c688b0.js";import{L as Q}from"./index.8c7b72a7.js";var ae={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 655.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 518 759.6 444.7 759.6 362c0-137-110.8-248-247.5-248S264.7 225 264.7 362c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 901.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 641.2 432.2 610 512.2 610c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 534c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 362c0-45.9 17.9-89.1 50.3-121.6S466.3 190 512.2 190s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 362c0 45.9-17.9 89.1-50.3 121.6C601.1 516.1 558 534 512.2 534zM880 772H640c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-delete",theme:"outlined"};const te=ae;var V=function(E,n){return e(_,{...j(j({},E),{},{ref:n,icon:te})})};V.displayName="UserDeleteOutlined";const ie=h.exports.forwardRef(V);function de(a){var A,b,R,O,C,D,I,T,v,z,U,B;const[E,n]=h.exports.useState(!1),[f]=c.useForm(),[u,S]=h.exports.useState(),{xs:m,sm:g,lg:ne}=K(),l=h.exports.useMemo(()=>u,[u]);return e(W,{title:"Atribui\xE7\xE3o de Tarefas",children:s(G,{justify:"space-between",gutter:60,children:[s(k,{xs:24,xl:12,children:[e(P,{orientation:"left",children:"TAREFA A ATRIBUIR"}),s(o,{column:1,bordered:!0,size:"small",children:[e(o.Item,{label:"Prazo para Conclus\xE3o",children:e(y,{direction:"horizontal",children:e(J,{color:"red",children:ee(new Date((A=a==null?void 0:a.assignment)==null?void 0:A.deadline),"dd/MM/yyyy")})})}),e(o.Item,{label:"Tipo da Tarefa",children:(b=a==null?void 0:a.assignment)==null?void 0:b.nature}),e(o.Item,{label:"Setor",children:(C=(O=(R=a==null?void 0:a.assignment)==null?void 0:R.workStation)==null?void 0:O.sector)==null?void 0:C.name}),e(o.Item,{label:"Esta\xE7\xE3o de Trabalho",children:(I=(D=a==null?void 0:a.assignment)==null?void 0:D.workStation)==null?void 0:I.name})]}),m||g?e(x.Title,{level:5,style:{marginTop:30},children:"RESPONS\xC1VEIS PELA TAREFA"}):e(P,{orientation:"left",children:"RESPONS\xC1VEIS PELA TAREFA"}),e(Q,{style:m||g?{marginBottom:40}:{},itemLayout:"vertical",pagination:{pageSize:4},dataSource:(T=a==null?void 0:a.assignment)==null?void 0:T.employeesResponsible,renderItem:t=>e(H,{employeeResponsible:t})})]}),s(k,{xs:24,sm:24,xl:12,children:[a.assign?e(x.Title,{level:5,children:"COLABORADORES QUE PODEM SER ATRIBU\xCDDOS"}):e(x.Title,{level:5,children:"COLABORADORES QUE PODEM SER DESATRIBU\xCDDOS"}),e(Q,{size:"small",className:"demo-loadmore-list",itemLayout:"vertical",dataSource:(z=(v=a==null?void 0:a.users)==null?void 0:v._embedded)==null?void 0:z.users,renderItem:t=>e(H,{employeeResponsible:t,children:a.assign?e(d,{block:!!(m||g),type:"primary",onClick:()=>{n(!0),S({...u,name:t==null?void 0:t.name,id:t==null?void 0:t.id})},children:"ATRIBUIR"}):e(d,{block:!!(m||g),type:"primary",danger:!0,onClick:()=>{n(!0),S({...u,name:t==null?void 0:t.name,id:t==null?void 0:t.id})},children:"DESATRIBUIR"})}),pagination:{onChange:a.onPage,total:(B=(U=a==null?void 0:a.users)==null?void 0:U.page)==null?void 0:B.totalElements,pageSize:4}})]}),e(X,{title:"Notifica\xE7\xE3o",open:E,footer:null,onCancel:()=>n(!1),children:s(c,{layout:"vertical",autoComplete:"off",form:f,onFinish:async t=>{var N,F,M;try{a.onAssigned(t,Number(l==null?void 0:l.id),l==null?void 0:l.name),f.resetFields(),n(!1)}catch(r){r instanceof Y?(N=r.data)!=null&&N.objects?f.setFields(r.data.objects.map(w=>{var L;return{name:(L=w.name)==null?void 0:L.split(/(\.|\[|\])/gi).filter(i=>i!=="."&&i!=="["&&i!=="]"&&i!=="").map(i=>isNaN(Number(i))?i:Number(i)),errors:[w.userMessage]}})):q.error({message:r.message,description:((F=r.data)==null?void 0:F.detail)==="Network Error"?"Erro de Rede":(M=r.data)==null?void 0:M.detail}):q.error({message:`Houve um erro: ${r.message}`})}},children:[e(c.Item,{label:"T\xEDtulo:",name:["notification","title"],rules:[{required:!0,message:"O t\xEDtulo \xE9 obrigat\xF3rio"}],children:e($,{size:"large",placeholder:"e.g.: Seu T\xEDtulo"})}),e(c.Item,{label:"Objetivo:",name:["notification","goal"],rules:[{required:!0,message:"O t\xEDtulo \xE9 obrigat\xF3rio"}],children:e($,{size:"large",placeholder:"e.g.: Seu objetivo"})}),e(c.Item,{label:"Raz\xE3o:",name:["notification","reason"],rules:[{required:!0,message:"O motivo \xE9 obrigat\xF3rio"}],children:e(Z,{rows:6,maxLength:300,size:"large",placeholder:"e.g.: Sua raz\xE3o",showCount:!0})}),e(c.Item,{style:{marginTop:40},children:s(y,{direction:"horizontal",children:[a.assign?e(d,{type:"primary",htmlType:"submit",icon:e(p,{}),children:"ASSOCIAR"}):e(d,{type:"primary",danger:!0,htmlType:"submit",icon:e(ie,{}),children:"DESASSOCIAR"}),e(d,{danger:!0,onClick:()=>n(!1),children:"CANCELAR"})]})})]})})]})})}export{de as A};
