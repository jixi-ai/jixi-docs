"use strict";(self.webpackChunkjixi_docs=self.webpackChunkjixi_docs||[]).push([[285],{1721:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(5893),i=t(1151);const s={sidebar_position:2},o="Read and Save Data",r={id:"tutorial-basics/save-data",title:"Read and Save Data",description:"Every Jixi application is backed by a fully managed MongoDB database. We can easily save",source:"@site/docs/tutorial-basics/save-data.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/save-data",permalink:"/docs/tutorial-basics/save-data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Actions",permalink:"/docs/tutorial-basics/create-an-action"},next:{title:"Files",permalink:"/docs/tutorial-basics/add-file"}},c={},d=[{value:"Save the result",id:"save-the-result",level:2},{value:"Read the result",id:"read-the-result",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"read-and-save-data",children:"Read and Save Data"}),"\n",(0,a.jsx)(n.p,{children:"Every Jixi application is backed by a fully managed MongoDB database. We can easily save\nand read data to keep long-term memory, cache responses, and avoid unnecessary AI generation."}),"\n",(0,a.jsx)(n.h2,{id:"save-the-result",children:"Save the result"}),"\n",(0,a.jsx)(n.p,{children:"Navigate to the Action we created, update your Action's code to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'async function execute(userInput) {\n\n    const config = {\n        prompt: "Write me a funny joke about " + userInput["topic"],\n\n        response: {\n            setup: "string",\n            punchline: "string",\n        },\n    }\n\n    // Generate with AI\n    const joke = await jixi.askAI(config);\n\n    // Save the joke\n    joke["topic"] = userInput["topic"];\n    await jixi.saveData(joke);\n\n    return joke;\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In our code, we added the ",(0,a.jsx)(n.code,{children:"topic"})," to the joke so we can find it later. Jixi also added a unique id to our data.\nTry re-running the action, then navigate to your application's ",(0,a.jsx)(n.code,{children:"Saved Data"})," page on the\nnavigation bar."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"saved-data.png",src:t(9093).Z+"",width:"1810",height:"964"})}),"\n",(0,a.jsx)(n.p,{children:"We see our saved joke!"}),"\n",(0,a.jsx)(n.h2,{id:"read-the-result",children:"Read the result"}),"\n",(0,a.jsx)(n.p,{children:"Generating a brand new result might not always be necessary. In our case, we should only\ngenerate a new joke if it's a new topic. Navigate back to your Action's code and replace\nthe existing code with:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'async function execute(userInput) {\n\n    // Search for an existing joke about the topic\n    const existingJokes = await jixi.readData({\n      "topic": userInput["topic"] \n    });\n\n    // If a joke already exists, use it\n    if (existingJokes.length > 0) {\n      return existingJokes[0];\n    }\n  \n    const config = {\n        prompt: "Write me a funny joke about " + userInput["topic"],\n\n        response: {\n            setup: "string",\n            punchline: "string",\n        },\n    }\n\n    // Generate with AI\n    const joke = await jixi.askAI(config);\n    \n    // Save the joke\n    joke["topic"] = userInput["topic"];\n    await jixi.saveData(joke);\n    \n    return joke;\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["We've added a ",(0,a.jsx)(n.code,{children:"readData"})," call that will search our saved data for jokes where ",(0,a.jsx)(n.code,{children:"topic"})," matches\nthe userInput's ",(0,a.jsx)(n.code,{children:"topic"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},9093:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/saved-data-53fe19bb601e2140c56fa79fcb935d5a.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var a=t(7294);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);