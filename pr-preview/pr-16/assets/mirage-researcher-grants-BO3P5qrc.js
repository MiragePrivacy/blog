import{u as a,j as e}from"./index-B1Uw5Hbo.js";const s={layout:"minimal",title:"Mirage Researcher Grants for Independent Privacy Research",description:"Announcing grants for independent researchers studying Mirage’s privacy guarantees.",cover:"/assets/researcher-grants.webp",authors:["[Nima Rasooli](https://nimara.xyz)"],authorImg:"/assets/nima.jpg",date:"2026-04-23",tags:["announcement","grants & bounties"]},t="/pr-preview/pr-16".replace(/\/?$/,"/");function i(r){const n={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.header,{children:[e.jsxs(n.h1,{id:"mirage-researcher-grants-for-independent-privacy-research",children:["Mirage Researcher Grants for Independent Privacy Research",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mirage-researcher-grants-for-independent-privacy-research",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),e.jsx(n.div,{"data-authors":!0})]}),`
`,e.jsx(n.div,{}),`
`,e.jsx("img",{src:`${t}assets/researcher-grants.webp`,alt:"Mirage Researcher Grants",className:"article-cover-image"}),`
`,e.jsx(n.p,{children:"Privacy infrastructure only earns trust when its claims hold up under independent scrutiny. Mirage Researcher Grants fund external researchers to test those claims directly."}),`
`,e.jsx(n.p,{children:"We’re offering grants of up to $5,000 for rigorous, adversarial analysis of Mirage’s privacy properties under realistic conditions."}),`
`,e.jsx(n.p,{children:"Mirage is designed to make private stablecoin transactions indistinguishable from ordinary onchain activity. Each transaction deploys a unique escrow contract via Azoth (our open-source EVM bytecode obfuscator), so there is no stable bytecode signature to track. Execution occurs inside Trusted Execution Environments, preventing nodes from accessing decrypted request data. The Nomad network processes signals in a distributed manner, ensuring that no single node has full visibility. Unlike mixers, Mirage avoids shared pools that cluster users by default."}),`
`,e.jsx(n.p,{children:"These are strong claims. We want them tested."}),`
`,e.jsxs(n.h2,{id:"what-were-looking-for",children:["What we're looking for",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-were-looking-for",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"We're most interested in research that tests the system under conditions that reflect how an adversary would actually approach it. What matters here are realistic attempts to trace transactions, cluster behavior, or extract metadata from routing and timing patterns. Theoretical edge cases are not a priority."}),`
`,e.jsx(n.p,{children:"Relevant directions include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Network analytics against Mirage transaction flows"}),`
`,e.jsx(n.li,{children:"Obfuscation analysis of Azoth and Mirage network behavior"}),`
`,e.jsx(n.li,{children:"Deanonymization attempts using realistic threat models"}),`
`,e.jsx(n.li,{children:"Metadata leakage across routing, timing, or transaction patterns"}),`
`,e.jsx(n.li,{children:"Empirical measurement of privacy guarantees in production-like conditions"}),`
`,e.jsx(n.li,{children:"Reproducible attack or measurement frameworks"}),`
`]}),`
`,e.jsx(n.p,{children:"If your work doesn't fit neatly into one of these categories but is clearly relevant, we encourage you to apply anyway and explain why."}),`
`,e.jsxs(n.h2,{id:"grant-amounts",children:["Grant amounts",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#grant-amounts",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Grants range from $500 to $5,000."}),`
`,e.jsx(n.p,{children:"The final amount depends on scope, rigor, novelty, and how useful the findings are in practice. We may decline, partially fund, or ask you to revise the scope before approving anything."}),`
`,e.jsxs(n.h2,{id:"what-to-include-in-your-application",children:["What to include in your application",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-to-include-in-your-application",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Applications should be concise but specific. Focus on clarity over length. Your application should cover:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Research objective and hypothesis"}),`
`,e.jsx(n.li,{children:"Scope of analysis"}),`
`,e.jsx(n.li,{children:"Methodology and evaluation approach"}),`
`,e.jsx(n.li,{children:"Expected outputs (report, code, datasets, etc.)"}),`
`,e.jsx(n.li,{children:"Timeline and requested funding"}),`
`,e.jsx(n.li,{children:"Relevant prior work, publications, repos, talks, or anything else that shows you know this space"}),`
`,e.jsx(n.li,{children:"Any assumptions, prerequisites, or access you'll need from us"}),`
`]}),`
`,e.jsx(n.p,{children:"We evaluate submissions based on technical quality, realism, reproducibility, and practical relevance to Mirage users and infrastructure."}),`
`,e.jsxs(n.h2,{id:"deliverables",children:["Deliverables",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deliverables",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Before starting"}),": a short, approved proposal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"During the project"}),": progress updates for longer engagements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"At completion"}),": a written report, with supporting data, code, or proofs of concept where appropriate"]}),`
`]}),`
`,e.jsx(n.p,{children:"We value clear conclusions, explicit limitations, and actionable recommendations."}),`
`,e.jsxs(n.h2,{id:"the-application-form",children:["The application form",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-application-form",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"It's one page. You'll pick your research track, describe your background, and answer a few quick self-assessment questions on languages (Python, Solidity/Vyper, Rust, Go) and topic areas such as timing analysis, smart contract security, and cryptographic protocol design. You'll also tell us whether you've already started or need the grant to begin, when you could kick off, and your rough timeline. Options range from 1–3 months to over a year."}),`
`,e.jsx(n.p,{children:"No lengthy document is required at this stage."}),`
`,e.jsxs(n.h2,{id:"a-few-things-to-know-before-applying",children:["A few things to know before applying",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#a-few-things-to-know-before-applying",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Grants are discretionary. Applying doesn't guarantee funding."}),`
`,e.jsx(n.li,{children:"Work isn't eligible for payment until we've approved it in advance."}),`
`,e.jsx(n.li,{children:"This is separate from the bug bounty program."}),`
`,e.jsx(n.li,{children:"Submitting a proposal doesn't create any employment or partnership relationship."}),`
`,e.jsx(n.li,{children:"Research must be conducted lawfully. Avoid unnecessary privacy violations, service disruption, or destructive testing."}),`
`]}),`
`,e.jsxs(n.h2,{id:"apply",children:["Apply",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#apply",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["If this is the kind of work you do, we want to hear from you: ",e.jsx(n.a,{href:"https://forms.gle/KEbiwBEDUGgfgrZ67",children:"https://forms.gle/KEbiwBEDUGgfgrZ67"})]})]})}function o(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}const l=Object.freeze(Object.defineProperty({__proto__:null,base:t,default:o,frontmatter:s},Symbol.toStringTag,{value:"Module"}));export{l as _};
