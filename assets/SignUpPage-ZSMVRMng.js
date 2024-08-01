import{r,a as b,j as e,t as y,v as N,w as S}from"./index-B8xa_euy.js";import{A as C}from"./AdvantagesSection-xROuOKme.js";import{C as I,D as P}from"./DocTitle-BdvxYyo0.js";import{c as v,b as n,e as F,u as L,I as o,o as U}from"./Icon-Cl_krMXu.js";import{L as $}from"./LogoLink-DaHA_MZP.js";const E="_signUpContainer_ijljf_1",k="_logo_ijljf_10",q="_title_ijljf_19",A="_inputContainer_ijljf_29",V="_inputItem_ijljf_36",R="_label_ijljf_43",z="_field_ijljf_50",D="_toggleVisibility_ijljf_69",T="_button_ijljf_75",Z="_redirect_ijljf_95",O="_redirectLink_ijljf_104",B="_errorField_ijljf_120",G="_error_ijljf_120",H="_formContainer_ijljf_149",s={signUpContainer:E,logo:k,title:q,inputContainer:A,inputItem:V,label:R,field:z,toggleVisibility:D,button:T,redirect:Z,redirectLink:O,errorField:B,error:G,formContainer:H},J=/^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/,K=8,M=32,Q=v({email:n().required("Email is required!").matches(J,"Entered email address is not valid").email("Please enter a valid email address!"),password:n().required("Password is required!").min(K,"Too short").max(M,"Too long"),confirmPassword:n().oneOf([F("password"),null],"Passwords must match").required("Please confirm your password")}),W=()=>{var p,j,h;const[t,f]=r.useState(!1),l=r.useId(),c=r.useId(),d=r.useId(),_=b(),m=()=>{f(!t)},{register:a,handleSubmit:g,reset:x,formState:{errors:i}}=L({resolver:U(Q)}),w=u=>{_(N({email:u.email,password:u.password})).unwrap().then(()=>S.Notify.success("Registration success!")),x()};return e.jsxs("div",{className:s.signUpContainer,children:[e.jsx($,{}),e.jsxs("div",{className:s.formContainer,children:[e.jsx("h2",{className:s.title,children:"Sign Up"}),e.jsxs("form",{onSubmit:g(w),children:[e.jsxs("div",{className:s.inputContainer,children:[e.jsxs("div",{className:s.inputItem,children:[e.jsx("label",{htmlFor:l,className:s.label,children:"Email"}),e.jsx("input",{id:l,type:"email",className:`${s.field} ${i.email?s.errorField:""}`,...a("email"),placeholder:"Enter your email"}),e.jsx("p",{className:s.error,children:(p=i.email)==null?void 0:p.message})]}),e.jsxs("div",{className:s.inputItem,children:[e.jsx("label",{htmlFor:c,className:s.label,children:"Password"}),e.jsx("input",{id:c,...a("password"),type:t?"text":"password",className:`${s.field} ${i.password?s.errorField:""}`,placeholder:"Enter your password"}),e.jsx("button",{type:"button",onClick:()=>m(),className:s.toggleVisibility,children:t?e.jsx(o,{id:"eye",width:20,height:20}):e.jsx(o,{id:"eye-off",width:20,height:20})}),e.jsx("p",{className:s.error,children:(j=i.password)==null?void 0:j.message})]}),e.jsxs("div",{className:s.inputItem,children:[e.jsx("label",{htmlFor:d,className:s.label,children:"Repeat password"}),e.jsx("input",{id:d,...a("confirmPassword"),type:t?"text":"password",className:`${s.field} ${i.confirmPassword?s.errorField:""}`,placeholder:"Repeat your password"}),e.jsx("button",{type:"button",onClick:()=>m(),className:s.toggleVisibility,children:t?e.jsx(o,{id:"eye",width:20,height:20}):e.jsx(o,{id:"eye-off",width:20,height:20})}),e.jsx("p",{className:s.error,children:(h=i.confirmPassword)==null?void 0:h.message})]})]}),e.jsx("input",{type:"submit",className:s.button,value:"Sign Up"})]}),e.jsxs("p",{className:s.redirect,children:["Already have account?"," ",e.jsx(y,{to:"/signin",className:s.redirectLink,children:"Sign In"})]})]})]})},X="_hidenSection_1pqz1_1",Y={hidenSection:X},oe=()=>e.jsxs(I,{children:[e.jsx(P,{children:"SignUp"}),e.jsx(W,{}),e.jsx("div",{className:Y.hidenSection,children:e.jsx(C,{})})]});export{oe as default};
//# sourceMappingURL=SignUpPage-ZSMVRMng.js.map
