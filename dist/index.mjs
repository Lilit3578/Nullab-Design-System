import*as B from"lucide-react";import{jsx as y}from"react/jsx-runtime";var A=({name:e,className:t,...o})=>{let r=B[e];return y("div",{className:`w-5 h-5 flex items-center justify-center ${t||""}`,children:y(r,{size:16,...o})})},c=A;import{jsx as O,jsxs as $}from"react/jsx-runtime";var H=({message:e,children:t,position:o="top"})=>{let i={top:"bottom-full left-1/2 transform -translate-x-1/2 mb-2",bottom:"top-full left-1/2 transform -translate-x-1/2 mt-2",left:"right-full top-1/2 transform -translate-y-1/2 mr-2",right:"left-full top-1/2 transform -translate-y-1/2 ml-2"}[o];return $("div",{className:"relative inline-block group/tooltip",children:[" ",t,O("span",{className:`
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
      `,children:e})]})},g=H;import{jsx as x,jsxs as _}from"react/jsx-runtime";var v={primary:"bg-ink-1000 text-ink-0 border border-ink-1000 hover:bg-ink-900",secondary:"bg-ink-0 text-ink-1000 border border-ink-1000 hover:bg-ink-200",accent:"bg-system-primary text-ink-0 border border-system-primary hover:bg-system-primary_hover dark:text-ink-1000",danger:"bg-system-danger text-ink-0 border border-system-danger hover:bg-system-danger_hover dark:text-ink-1000",text:"bg-transparent text-ink-1000 hover:bg-ink-200 dark:hover:bg-ink-800",icon:"bg-transparent text-ink-1000 hover:bg-ink-200 dark:hover:bg-ink-800"},M=({children:e,onClick:t,variant:o="primary",className:r="",disabled:i,icon:a,tooltip:l,tooltipPosition:m})=>{let s="inline-flex items-center justify-center gap-1 transition-colors duration-200 ease-in-out",T=o==="icon"?`${s} h-7 w-7 p-2 rounded-lg text-ink-700 hover:text-ink-1000`:`${s} h-10 px-6 py-3 label rounded-full`,L=i?"bg-ink-400 text-ink-800 cursor-not-allowed":v[o]||v.primary,w=_("button",{onClick:t,disabled:i,className:`${T} ${L} ${r}`,children:[a&&x(c,{name:a}),e]});return l?x(g,{message:l,position:m,children:w}):w},F=M;import{useState as E,createContext as D,useContext as k}from"react";import{Combobox as d}from"@headlessui/react";import{Fragment as I,jsx as n,jsxs as b}from"react/jsx-runtime";var h=D({query:""}),C="__ACTION_ID__",p=({children:e,value:t,onChange:o,placeholder:r,onCreateNew:i})=>{let[a,l]=E("");return n(d,{value:t,onChange:s=>{s&&s.id===C?i?.(a):o(s)},children:b("div",{className:"relative",children:[n(d.Input,{className:`
            w-full h-10 pl-4 pr-10 rounded-sm border-none outline-none body
            bg-ink-0 text-ink-1000
            ring-1 ring-ink-400 focus:ring-1 focus:ring-system-primary
            placeholder:text-ink-700
          `,onChange:s=>l(s.target.value),displayValue:s=>s?.name||"",placeholder:r||"select an option..."}),n(d.Button,{className:"absolute inset-y-0 right-0 flex items-center pr-3",children:n(c,{name:"ChevronDown",className:"text-ink-700"})}),n(h.Provider,{value:{query:a},children:n(d.Options,{className:`
            absolute mt-2 max-h-60 w-full rounded-sm p-2
            bg-ink-0 dark:bg-ink-900 z-10
            ring-1 ring-ink-300 dark:ring-ink-800 focus:outline-none
          `,children:e})})]})})},R=({value:e,children:t,leading:o,trailing:r})=>{let{query:i}=k(h);return i===""||e.name.toLowerCase().includes(i.toLowerCase())?n(d.Option,{value:e,className:({active:l})=>`group flex gap-4 items-center rounded-lg h-10 px-4 py-2 body cursor-pointer transition-colors duration-200 ${l?"bg-ink-200":"text-ink-1000"}`,children:b(I,{children:[o&&n("div",{className:"flex-shrink-0",children:o}),n("div",{className:"flex-grow truncate",children:t}),r&&n("div",{className:"flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity",children:r})]})},e.id):null};R.displayName="ComboboxItem";var N=()=>n("div",{className:"h-px my-2 bg-ink-200",role:"separator"});N.displayName="ComboboxSplitter";var z=({children:e,leading:t})=>{let{query:o}=k(h),r=o?`${e} "${o}"`:e;return n(d.Option,{value:{id:C,name:r},className:({active:i})=>`group flex gap-4 items-center rounded-lg h-10 px-4 py-2 body cursor-pointer transition-colors duration-200 ${i?"bg-ink-200":"text-ink-1000"}`,children:b(I,{children:[t&&n("div",{className:"flex-shrink-0",children:t}),n("div",{className:"flex-grow truncate",children:r})]})})};z.displayName="ComboboxAction";p.Item=R;p.Splitter=N;p.Action=z;var V=p;import{jsx as X}from"react/jsx-runtime";var U=({className:e,...t})=>X("input",{type:"text",className:`
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
      `,...t}),q=U;import{jsx as j}from"react/jsx-runtime";var Y=({children:e,className:t=""})=>j("div",{className:`flex flex-col gap-1 ${t}`,children:e}),J=Y;import{jsx as K}from"react/jsx-runtime";var Q=({className:e="",variant:t="horizontal"})=>K("div",{className:`
        ${t==="vertical"?"w-px h-full":"h-px w-full"} 
        bg-ink-300 dark:bg-ink-800 
        ${e}
      `}),G=Q;import W from"react";import{jsx as f,jsxs as Z}from"react/jsx-runtime";var P=W.forwardRef(({children:e,leading:t,trailing:o,className:r="",...i},a)=>Z("div",{ref:a,className:`
    group/item flex items-center gap-3 h-10 pl-4 pr-1.5 rounded-lg body
    transition-colors duration-200 cursor-pointer
    hover:bg-ink-200
   ${r}`,...i,children:[t&&f("div",{className:"flex-shrink-0",children:t}),f("div",{className:"flex-grow overflow-hidden whitespace-nowrap text-ellipsis",children:e}),o&&f("div",{className:"flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200",children:o})]}));P.displayName="Item";import{forwardRef as ee}from"react";import{jsx as u,jsxs as te}from"react/jsx-runtime";var S=ee(({children:e,className:t="",leading:o,trailing:r,...i},a)=>te("div",{ref:a,className:`
    group flex items-center gap-2 
    px-4 py-2 
    body whitespace-nowrap 
   ${t}`,...i,children:[o&&u("div",{className:"flex-shrink-0",children:o}),u("div",{className:"flex-grow",children:e}),r&&u("div",{className:"flex-shrink-0",children:r})]}));S.displayName="ItemHeader";export{F as Button,V as Combobox,c as Icon,q as Input,P as Item,S as ItemHeader,J as List,G as Splitter,g as Tooltip};
