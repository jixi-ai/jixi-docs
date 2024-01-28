"use strict";(self.webpackChunkjixi_docs=self.webpackChunkjixi_docs||[]).push([[691],{9766:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(5893),o=t(1151);const r={sidebar_position:4},s="Calling An Action",a={id:"tutorial-basics/calling-your-action",title:"Calling An Action",description:"So far, we've created our first Action, used Saved Data to re-use responses, and added custom data to make our",source:"@site/docs/tutorial-basics/calling-your-action.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/calling-your-action",permalink:"/docs/tutorial-basics/calling-your-action",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Files",permalink:"/docs/tutorial-basics/add-file"}},c={},l=[{value:"Javascript",id:"javascript",level:3},{value:"Python",id:"python",level:3},{value:"Java",id:"java",level:3},{value:"C#",id:"c",level:3},{value:"Unity",id:"unity",level:3}];function u(n){const e={admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"calling-an-action",children:"Calling An Action"}),"\n",(0,i.jsx)(e.p,{children:"So far, we've created our first Action, used Saved Data to re-use responses, and added custom data to make our\naction aware of new information."}),"\n",(0,i.jsxs)(e.p,{children:["Now, we're going to ",(0,i.jsx)(e.strong,{children:"integrate Jixi into an application"})," so we can call our Action from anywhere."]}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"Make sure you have a Jixi API key, as you'll need it to continue"})}),"\n",(0,i.jsx)(e.p,{children:"When we created our Action, Jixi automatically created a unique URL that we can use to trigger our action."}),"\n",(0,i.jsx)(e.p,{children:"To call our Jixi Action:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Make a ",(0,i.jsx)(e.code,{children:"POST"})," request to the Action's URL"]}),"\n",(0,i.jsxs)(e.li,{children:["Include our API Key as a ",(0,i.jsx)(e.code,{children:"Bearer"})," Token"]}),"\n",(0,i.jsx)(e.li,{children:"Include a response body if needed"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"javascript",children:"Javascript"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"async function callJixiAction() {\n    const url = 'https://api.jixi.ai/3d45g2a21';\n    const apiKey = 'YOUR-API-KEY-HERE';\n    const body = { topic: 'Ancient Egypt' };\n\n    try {\n        const response = await fetch(url, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json',\n                'Authorization': `Bearer ${apiKey}`\n            },\n            body: JSON.stringify(body)\n        });\n\n        if (!response.ok) {\n            throw new Error(`HTTP error! status: ${response.status}`);\n        }\n\n        const data = await response.json();\n        console.log(data);\n    } catch (error) {\n        console.error('Error:', error);\n    }\n}\n"})}),"\n",(0,i.jsx)(e.h3,{id:"python",children:"Python"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import requests\n\ndef call_jixi_action():\n    url = 'https://api.jixi.ai/3d45g2a21'\n    headers = {\n        'Authorization': 'Bearer YOUR-API-KEY-HERE',\n        'Content-Type': 'application/json'\n    }\n    data = {'topic': 'Ancient Egypt'}\n\n    try:\n        response = requests.post(url, json=data, headers=headers)\n        response.raise_for_status()\n        print(response.json())\n    except requests.exceptions.HTTPError as err:\n        print(f\"HTTP Error: {err}\")\n    except Exception as err:\n        print(f\"Error: {err}\")\n\ncall_jixi_action()\n"})}),"\n",(0,i.jsx)(e.h3,{id:"java",children:"Java"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'import java.io.OutputStream;\nimport java.net.HttpURLConnection;\nimport java.net.URL;\nimport java.util.Scanner;\n\npublic class CallJixiAction {\n    public static void main(String[] args) {\n        try {\n            String url = "https://api.jixi.ai/3d45g2a21";\n            String apiKey = "YOUR-API-KEY-HERE";\n            String jsonInputString = "{\\"topic\\": \\"Ancient Egypt\\"}";\n\n            HttpURLConnection httpURLConnection = (HttpURLConnection) new URL(url).openConnection();\n\n            httpURLConnection.setRequestMethod("POST");\n            httpURLConnection.setRequestProperty("Content-Type", "application/json; utf-8");\n            httpURLConnection.setRequestProperty("Authorization", "Bearer " + apiKey);\n            httpURLConnection.setDoOutput(true);\n\n            try(OutputStream os = httpURLConnection.getOutputStream()) {\n                byte[] input = jsonInputString.getBytes("utf-8");\n                os.write(input, 0, input.length);\n            }\n\n            int responseCode = httpURLConnection.getResponseCode();\n\n            try(Scanner scanner = new Scanner(httpURLConnection.getInputStream())) {\n                String responseBody = scanner.useDelimiter("\\\\A").next();\n                System.out.println(responseBody);\n            }\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"c",children:"C#"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-csharp",children:'using System;\nusing System.Net.Http;\nusing System.Text;\nusing System.Threading.Tasks;\n\nclass CallJixiAction\n{\n    static async Task Main(string[] args)\n    {\n        var url = "https://api.jixi.ai/3d45g2a21";\n        var apiKey = "YOUR-API-KEY-HERE";\n        var json = "{\\"topic\\": \\"Ancient Egypt\\"}";\n\n        try\n        {\n            using (var httpClient = new HttpClient())\n            {\n                httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");\n\n                var content = new StringContent(json, Encoding.UTF8, "application/json");\n\n                var response = await httpClient.PostAsync(url, content);\n\n                if (response.IsSuccessStatusCode)\n                {\n                    var responseContent = await response.Content.ReadAsStringAsync();\n                    Console.WriteLine(responseContent);\n                }\n                else\n                {\n                    Console.WriteLine($"Error: {response.StatusCode}");\n                }\n            }\n        }\n        catch (Exception ex)\n        {\n            Console.WriteLine($"Exception: {ex.Message}");\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"unity",children:"Unity"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-csharp",children:'using UnityEngine;\nusing UnityEngine.Networking;\n\npublic class CallJixiAction : MonoBehaviour\n{\n    void Start()\n    {\n        StartCoroutine(PostRequest("https://api.jixi.ai/3d45g2a21"));\n    }\n\n    IEnumerator PostRequest(string url)\n    {\n        string apiKey = "YOUR-API-KEY-HERE";\n        string json = "{\\"topic\\": \\"Ancient Egypt\\"}";\n\n        using (UnityWebRequest webRequest = new UnityWebRequest(url, "POST"))\n        {\n            byte[] jsonToSend = new System.Text.UTF8Encoding().GetBytes(json);\n            webRequest.uploadHandler = (UploadHandler)new UploadHandlerRaw(jsonToSend);\n            webRequest.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer();\n            webRequest.SetRequestHeader("Content-Type", "application/json");\n            webRequest.SetRequestHeader("Authorization", "Bearer " + apiKey);\n\n            yield return webRequest.SendWebRequest();\n\n            if (webRequest.result != UnityWebRequest.Result.Success)\n            {\n                Debug.Log("Error: " + webRequest.error);\n            }\n            else\n            {\n                Debug.Log("Response: " + webRequest.downloadHandler.text);\n            }\n        }\n    }\n}\n'})})]})}function p(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);