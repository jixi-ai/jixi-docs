"use strict";(self.webpackChunkjixi_docs=self.webpackChunkjixi_docs||[]).push([[78],{7099:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var c=o(5893),i=o(1151);const s={sidebar_position:2},t="Confidence Score",r={id:"tutorial-basics/confidence-score",title:"Confidence Score",description:"Generative data is unpredictable. But as developers, it's critical to have responses be reliable,",source:"@site/docs/tutorial-basics/confidence-score.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/confidence-score",permalink:"/docs/tutorial-basics/confidence-score",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Actions",permalink:"/docs/tutorial-basics/create-an-action"},next:{title:"Read and Save Data",permalink:"/docs/tutorial-basics/save-data"}},a={},d=[{value:"Building Action Confidence Score",id:"building-action-confidence-score",level:2},{value:"Console",id:"console",level:3},{value:"API",id:"api",level:3},{value:"Using the Confidence Score",id:"using-the-confidence-score",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"confidence-score",children:"Confidence Score"}),"\n",(0,c.jsxs)(n.p,{children:["Generative data is unpredictable. But as developers, it's critical to have responses be reliable,\nconsistent, and accurate. To tackle this, Jixi action's include a ",(0,c.jsx)(n.strong,{children:"confidence score"}),". A\n",(0,c.jsx)(n.strong,{children:"confidence score"})," is a percentage that represents the expected quality of generated response."]}),"\n",(0,c.jsxs)(n.admonition,{type:"tip",children:[(0,c.jsxs)(n.p,{children:["A ",(0,c.jsx)(n.strong,{children:"high"})," confidence score means we can expect a high-quality response."]}),(0,c.jsxs)(n.p,{children:["A ",(0,c.jsx)(n.strong,{children:"low"})," confidence score means the action is unreliable, or consistently generating low-quality\nresponses."]})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"confidence-score-page.png",src:o(4252).Z+"",width:"1810",height:"964"})}),"\n",(0,c.jsx)(n.h2,{id:"building-action-confidence-score",children:"Building Action Confidence Score"}),"\n",(0,c.jsxs)(n.p,{children:["An action's confidence score is determined from ",(0,c.jsx)(n.strong,{children:"human-feedback"}),", by saving an action's output as a\n",(0,c.jsx)(n.code,{children:"Good"})," or ",(0,c.jsx)(n.code,{children:"Bad"})," result. This is done through the console or through the API."]}),"\n",(0,c.jsx)(n.h3,{id:"console",children:"Console"}),"\n",(0,c.jsxs)(n.p,{children:["Build an action's confidence score during development by saving output as ",(0,c.jsx)(n.code,{children:"Good"})," or ",(0,c.jsx)(n.code,{children:"Bad"})," results.\nOn the action's ",(0,c.jsx)(n.code,{children:"Run Screen"})," there are two options on the bottom of the page: ",(0,c.jsx)(n.code,{children:"Save as Good Result"}),"\nand ",(0,c.jsx)(n.code,{children:"Save as Bad Result"}),". These buttons update the action's confidence."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"save-confidence.png",src:o(1260).Z+"",width:"1726",height:"883"})}),"\n",(0,c.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,c.jsxs)(n.p,{children:["You can build an action's confidence through API calls. End-users, QA testers, and\nother stakeholders can mark our action's response as ",(0,c.jsx)(n.code,{children:"Good"})," or ",(0,c.jsx)(n.code,{children:"Bad"})," and adjust our confidence after\nour action is live."]}),"\n",(0,c.jsxs)(n.p,{children:["To update a confidence score, make a ",(0,c.jsx)(n.code,{children:"POST"})," request to the action's ",(0,c.jsx)(n.code,{children:"confidenceScore"})," API endpoint."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"async function callJixiAction() {\n    const url = 'https://api.jixi.ai/YOUR-ACTION-ID/confidenceScore';\n    const apiKey = 'YOUR-API-KEY-HERE';\n    const body = { \n        result: 'good' \n    };\n\n    const response = await fetch(url, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n            'Authorization': `Bearer ${apiKey}`\n        },\n        body: JSON.stringify(body)\n    });\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["We can optionally include ",(0,c.jsx)(n.code,{children:"input"})," and ",(0,c.jsx)(n.code,{children:"output"})," in the body, to save that data to our console."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"    const body = { \n        result: 'good',\n        input: userInput,\n        output: jixiActionResult,\n    };\n"})}),"\n",(0,c.jsxs)(n.admonition,{type:"note",children:[(0,c.jsxs)(n.p,{children:["Imagine an AI chat bot. Now imagine next to every generated response, we've included a ",(0,c.jsx)(n.strong,{children:"thumbs-up"})," or ",(0,c.jsx)(n.strong,{children:"thumbs-down"}),"\nbutton."]}),(0,c.jsx)(n.p,{children:"We can use the API to update our Action's confidence based on this user input."})]}),"\n",(0,c.jsx)(n.h2,{id:"using-the-confidence-score",children:"Using the Confidence Score"}),"\n",(0,c.jsx)(n.p,{children:"We can access the action's current confidence score within the Action's code by calling:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const confidence = await jixi.getConfidenceScore();\n"})}),"\n",(0,c.jsx)(n.p,{children:"Navigate to your Action's code. Let's create a safeguard if our joke Action's confidence falls below 75%."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'async function execute(userInput) {\n\n  // \'getConfidenceScore\' will return a number between 0.0 and 1.0\n  const confidence = await jixi.getConfidenceScore();\n\n  // If, for whatever reason, our confidence score falls below 75%\n  // return a default joke\n  if (confidence <= 0.75) {\n    return {\n      setup: "Why did the chicken cross the road",\n      punchline: "To get to the other side!"\n    }\n  }\n  \n  const config = {\n    prompt: "Write me a funny joke",\n    \n    response: {\n      setup: "string",\n      punchline: "string",\n    },\n  }\n  \n  // Generate with AI\n  return await jixi.askAI(config);\n}\n'})}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsxs)(n.p,{children:["For ",(0,c.jsx)(n.strong,{children:"mission-critical"})," actions, we can create safeguards requiring higher confidence scores."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},4252:(e,n,o)=>{o.d(n,{Z:()=>c});const c=o.p+"assets/images/confidence-score-page-3f635ab7c87a44dc88c7525167882224.png"},1260:(e,n,o)=>{o.d(n,{Z:()=>c});const c=o.p+"assets/images/save-confidence-0fc38f79cd286186d601f7ccd883d447.png"},1151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>t});var c=o(7294);const i={},s=c.createContext(i);function t(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);