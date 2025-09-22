"use strict";var q=Object.create;var b=Object.defineProperty;var X=Object.getOwnPropertyDescriptor;var Y=Object.getOwnPropertyNames;var J=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var Q=(e,t)=>{for(var o in t)b(e,o,{get:t[o],enumerable:!0})},N=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Y(t))!j.call(e,i)&&i!==o&&b(e,i,{get:()=>t[i],enumerable:!(n=X(t,i))||n.enumerable});return e};var z=(e,t,o)=>(o=e!=null?q(J(e)):{},N(t||!e||!e.__esModule?b(o,"default",{value:e,enumerable:!0}):o,e)),G=e=>N(b({},"__esModule",{value:!0}),e);var ie={};Q(ie,{Button:()=>P,Combobox:()=>A,Icon:()=>p,Input:()=>H,Item:()=>k,ItemHeader:()=>C,List:()=>$,Splitter:()=>F,Tooltip:()=>f});module.exports=G(ie);var K=z(require("lucide-react")),v=require("react/jsx-runtime"),W=({name:e,className:t,...o})=>{let n=K[e];return(0,v.jsx)("div",{className:`w-5 h-5 flex items-center justify-center ${t||""}`,children:(0,v.jsx)(n,{size:16,...o})})},p=W;var u=require("react/jsx-runtime"),Z=({message:e,children:t,position:o="top"})=>{let i={top:"bottom-full left-1/2 transform -translate-x-1/2 mb-2",bottom:"top-full left-1/2 transform -translate-x-1/2 mt-2",left:"right-full top-1/2 transform -translate-y-1/2 mr-2",right:"left-full top-1/2 transform -translate-y-1/2 ml-2"}[o];return(0,u.jsxs)("div",{className:"relative inline-block group/tooltip",children:[" ",t,(0,u.jsx)("span",{className:`
        absolute
        px-3 py-1 rounded-full
        whitespace-nowrap
        opacity-0 group-hover/tooltip:opacity-100 group-focus/tooltip:opacity-100 {/* Target the named group */}
        transition-opacity duration-200 ease-in-out
        pointer-events-none

        // Themed styles
        bg-ink-1000 text-ink-0 body-small
        
        // Dynamic position class
        ${i}
      `,children:e})]})},f=Z;var h=require("react/jsx-runtime"),I={primary:"bg-ink-1000 text-ink-0 border border-ink-1000 hover:bg-ink-900",secondary:"bg-ink-0 text-ink-1000 border border-ink-1000 hover:bg-ink-200",accent:"bg-system-primary text-ink-0 border border-system-primary hover:bg-system-primary_hover dark:text-ink-1000",danger:"bg-system-danger text-ink-0 border border-system-danger hover:bg-system-danger_hover dark:text-ink-1000",text:"bg-transparent text-ink-1000 hover:bg-ink-200 dark:hover:bg-ink-800",icon:"bg-transparent text-ink-1000 hover:bg-ink-200 dark:hover:bg-ink-800"},ee=({children:e,onClick:t,variant:o="primary",className:n="",disabled:i,icon:a,tooltip:l,tooltipPosition:y})=>{let s="inline-flex items-center justify-center gap-1 transition-colors duration-200 ease-in-out",V=o==="icon"?`${s} h-7 w-7 p-2 rounded-lg text-ink-700 hover:text-ink-1000`:`${s} h-10 px-6 py-3 label rounded-full`,U=i?"bg-ink-400 text-ink-800 cursor-not-allowed":I[o]||I.primary,R=(0,h.jsxs)("button",{onClick:t,disabled:i,className:`${V} ${U} ${n}`,children:[a&&(0,h.jsx)(p,{name:a}),e]});return l?(0,h.jsx)(f,{message:l,position:y,children:R}):R},P=ee;var c=require("react"),d=require("@headlessui/react");var r=require("react/jsx-runtime"),x=(0,c.createContext)({query:""}),S="__ACTION_ID__",w=({children:e,value:t,onChange:o,placeholder:n,onCreateNew:i})=>{let[a,l]=(0,c.useState)("");return(0,r.jsx)(d.Combobox,{value:t,onChange:s=>{s&&s.id===S?i?.(a):o(s)},children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(d.Combobox.Input,{className:`
            w-full h-10 pl-4 pr-10 rounded-sm border-none outline-none body
            bg-ink-0 text-ink-1000
            ring-1 ring-ink-400 focus:ring-1 focus:ring-system-primary
            placeholder:text-ink-700
          `,onChange:s=>l(s.target.value),displayValue:s=>s?.name||"",placeholder:n||"select an option..."}),(0,r.jsx)(d.Combobox.Button,{className:"absolute inset-y-0 right-0 flex items-center pr-3",children:(0,r.jsx)(p,{name:"ChevronDown",className:"text-ink-700"})}),(0,r.jsx)(x.Provider,{value:{query:a},children:(0,r.jsx)(d.Combobox.Options,{className:`
            absolute mt-2 max-h-60 w-full rounded-sm p-2
            bg-ink-0 dark:bg-ink-900 z-10
            ring-1 ring-ink-300 dark:ring-ink-800 focus:outline-none
          `,children:e})})]})})},T=({value:e,children:t,leading:o,trailing:n})=>{let{query:i}=(0,c.useContext)(x);return i===""||e.name.toLowerCase().includes(i.toLowerCase())?(0,r.jsx)(d.Combobox.Option,{value:e,className:({active:l})=>`group flex gap-4 items-center rounded-lg h-10 px-4 py-2 body cursor-pointer transition-colors duration-200 ${l?"bg-ink-200":"text-ink-1000"}`,children:(0,r.jsxs)(r.Fragment,{children:[o&&(0,r.jsx)("div",{className:"flex-shrink-0",children:o}),(0,r.jsx)("div",{className:"flex-grow truncate",children:t}),n&&(0,r.jsx)("div",{className:"flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity",children:n})]})},e.id):null};T.displayName="ComboboxItem";var L=()=>(0,r.jsx)("div",{className:"h-px my-2 bg-ink-200",role:"separator"});L.displayName="ComboboxSplitter";var B=({children:e,leading:t})=>{let{query:o}=(0,c.useContext)(x),n=o?`${e} "${o}"`:e;return(0,r.jsx)(d.Combobox.Option,{value:{id:S,name:n},className:({active:i})=>`group flex gap-4 items-center rounded-lg h-10 px-4 py-2 body cursor-pointer transition-colors duration-200 ${i?"bg-ink-200":"text-ink-1000"}`,children:(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsx)("div",{className:"flex-shrink-0",children:t}),(0,r.jsx)("div",{className:"flex-grow truncate",children:n})]})})};B.displayName="ComboboxAction";w.Item=T;w.Splitter=L;w.Action=B;var A=w;var O=require("react/jsx-runtime"),te=({className:e,...t})=>(0,O.jsx)("input",{type:"text",className:`
        // Base styles from your design
        w-full py-2 px-4 rounded-[4px] border-none outline-none
        body
        
        // Background and border
        bg-ink-0 text-ink-1000
        ring-1 ring-ink-400 focus:ring-1 focus:ring-offset- focus:ring-system-primary
        
        // Placeholder and caret styles
        placeholder:text-ink-700
        
        // Optional class for user overrides
        ${e}
      `,...t}),H=te;var M=require("react/jsx-runtime"),oe=({children:e,className:t=""})=>(0,M.jsx)("div",{className:`flex flex-col gap-1 ${t}`,children:e}),$=oe;var _=require("react/jsx-runtime"),re=({className:e="",variant:t="horizontal"})=>(0,_.jsx)("div",{className:`
        ${t==="vertical"?"w-px h-full":"h-px w-full"} 
        bg-ink-300 dark:bg-ink-800 
        ${e}
      `}),F=re;var E=z(require("react")),m=require("react/jsx-runtime"),k=E.default.forwardRef(({children:e,leading:t,trailing:o,className:n="",...i},a)=>(0,m.jsxs)("div",{ref:a,className:`
    group/item flex items-center gap-3 h-10 pl-4 pr-1.5 rounded-lg body
    transition-colors duration-200 cursor-pointer
    hover:bg-ink-200
   ${n}`,...i,children:[t&&(0,m.jsx)("div",{className:"flex-shrink-0",children:t}),(0,m.jsx)("div",{className:"flex-grow overflow-hidden whitespace-nowrap text-ellipsis",children:e}),o&&(0,m.jsx)("div",{className:"flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200",children:o})]}));k.displayName="Item";var D=require("react"),g=require("react/jsx-runtime"),C=(0,D.forwardRef)(({children:e,className:t="",leading:o,trailing:n,...i},a)=>(0,g.jsxs)("div",{ref:a,className:`
    group flex items-center gap-2 
    px-4 py-2 
    body whitespace-nowrap 
   ${t}`,...i,children:[o&&(0,g.jsx)("div",{className:"flex-shrink-0",children:o}),(0,g.jsx)("div",{className:"flex-grow",children:e}),n&&(0,g.jsx)("div",{className:"flex-shrink-0",children:n})]}));C.displayName="ItemHeader";0&&(module.exports={Button,Combobox,Icon,Input,Item,ItemHeader,List,Splitter,Tooltip});
