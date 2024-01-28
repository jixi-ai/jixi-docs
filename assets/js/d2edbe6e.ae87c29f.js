"use strict";(self.webpackChunkjixi_docs=self.webpackChunkjixi_docs||[]).push([[655],{9523:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=i(5893),s=i(1151);const o={sidebar_position:1},c="Actions",r={id:"tutorial-basics/create-an-action",title:"Actions",description:"Actions are building blocks for an AI system. Each action has its own API endpoint, so they",source:"@site/docs/tutorial-basics/create-an-action.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-an-action",permalink:"/docs/tutorial-basics/create-an-action",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/docs/category/quickstart"},next:{title:"Read and Save Data",permalink:"/docs/tutorial-basics/save-data"}},a={},d=[{value:"Create your first Action",id:"create-your-first-action",level:2},{value:"Action Page",id:"action-page",level:2},{value:"Update the Code",id:"update-the-code",level:3},{value:"Run the Action",id:"run-the-action",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"actions",children:"Actions"}),"\n",(0,t.jsx)(n.p,{children:"Actions are building blocks for an AI system. Each action has its own API endpoint, so they\ncan be called from third-party applications. Actions maintain their own analytics, have their\nown code, and maintain their own confidence score."}),"\n",(0,t.jsx)(n.h2,{id:"create-your-first-action",children:"Create your first Action"}),"\n",(0,t.jsxs)(n.p,{children:["To create an action, navigate to ",(0,t.jsx)(n.code,{children:"Actions"})," on the side navigation bar. Click the ",(0,t.jsx)(n.code,{children:"New Action"}),"\nbutton. Give your action a name and description, and click ",(0,t.jsx)(n.code,{children:"Click"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"new-action.png",src:i(4595).Z+"",width:"1728",height:"883"})}),"\n",(0,t.jsx)(n.h2,{id:"action-page",children:"Action Page"}),"\n",(0,t.jsx)(n.p,{children:"Click on the new action to see your new action's overview page."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"action-overview.png",src:i(4712).Z+"",width:"1810",height:"964"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Analytics:"})," The action ",(0,t.jsx)(n.code,{children:"Analytics"})," view gives you an overview of ",(0,t.jsx)(n.strong,{children:"key results"})," for your\naction including ",(0,t.jsx)(n.code,{children:"Total API Call"})," ",(0,t.jsx)(n.code,{children:"Average Response Time"})," and ",(0,t.jsx)(n.code,{children:"Average Cost Per API Call"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Analytics are tracked from API calls, not from running actions through the Jixi app. This\nis to help separate events from development, and maintain accuracy and quality."})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Code:"})," The action ",(0,t.jsx)(n.code,{children:"Code"})," view provides a built-in code editor to define your Action's\nbehavior. It uses ",(0,t.jsx)(n.code,{children:"Javascript"})," and provides an integrated SDK."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Confidence:"})," Each action has a ",(0,t.jsx)(n.strong,{children:"Confidence Score"})," which represents the expected quality\nof response. Because AI can be unpredictable, confidence scores give you an estimate of how\nmuch to trust a generated response."]}),"\n",(0,t.jsxs)(n.p,{children:["Confidence scores are determined through human-feedback, by rating responses as ",(0,t.jsx)(n.code,{children:"Good"})," or ",(0,t.jsx)(n.code,{children:"Bad"}),"\nresults."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information see ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://somepage.com",children:"Confidence Scores"})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Logs:"})," The logs of your action from API calls."]}),"\n",(0,t.jsx)(n.h3,{id:"update-the-code",children:"Update the Code"}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to your action's ",(0,t.jsx)(n.code,{children:"Code"})," section and replace the default code with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'async function execute(userInput) {\n\n  const config = {\n    prompt: "Write me a funny joke about " + userInput["topic"],\n    \n    response: {\n      setup: "string",\n      punchline: "string",\n    },\n  }\n  \n  // Generate with AI\n  const joke = await jixi.askAI(config);\n  return joke;\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"This action will create a new joke about any topic given. Jixi auto-saves as you type."}),"\n",(0,t.jsx)(n.h3,{id:"run-the-action",children:"Run the Action"}),"\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.code,{children:"Run"})," button to bring up the ",(0,t.jsx)(n.code,{children:"Run Menu"}),". The ",(0,t.jsx)(n.code,{children:"Run Menu"})," gives you the opportunity to\ntest your action with different inputs, view results, logs, and verify analytics."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"run-menu.png",src:i(3238).Z+"",width:"1810",height:"964"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Input:"})," This section helps to test actions under different user-input scenarios. When applications\ncall the Action's API, they can include a ",(0,t.jsx)(n.a,{href:"https://mixedanalytics.com/knowledge-base/request-bodies-explained/",children:"request body"}),"\nThis body is passed to our action as a ",(0,t.jsx)(n.code,{children:"userInput"})," parameter."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you are creating the ",(0,t.jsx)(n.code,{children:"Input"})," from end users, like we're doing here, It's good practice to test\nyour action with a large variety of inputs to make sure it behaves correctly. You never know what\nyour users will ask for!"]})}),"\n",(0,t.jsxs)(n.p,{children:["Replace the action's ",(0,t.jsx)(n.code,{children:"Input"})," with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n  "topic": "Ancient Egypt"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"RUN"})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Results:"})," This section is what the action will return. It's the information your application\nwill receive from calling the Action. Once we have a result, we can save it as either a ",(0,t.jsx)(n.code,{children:"Good"})," or\n",(0,t.jsx)(n.code,{children:"Bad"})," result. This will build up our Action's Confidence Score."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Logs:"})," This section shows logs from the Action, including errors and anything we've logged with"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'console.log("This is a log");\n'})}),"\n",(0,t.jsx)(n.p,{children:"Logs can help you develop actions and verify data. Try adding some logs to your Action's code\nand re-running!"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Info:"})," This section provides analytics results for running this action, including the response\ntime and cost."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4712:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/action-overview-7818675336b8ed5e8d236e5bdbb13014.png"},4595:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/new-action-c769422060100b367bba23dbb85a062b.png"},3238:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/run-menu-c075fdf68c25e9ef340713f36dde6473.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>c});var t=i(7294);const s={},o=t.createContext(s);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);