---
sidebar_position: 1
---

# Actions

Actions are building blocks for an AI system. Each action has its own API endpoint, so they
can be called from third-party applications. Actions maintain their own analytics, have their 
own code, and maintain their own confidence score.

## Create your first Action

To create an action, navigate to `Actions` on the side navigation bar. Click the `New Action` 
button. Give your action a name and description, and click `Click`

![new-action.png](..%2F..%2Fstatic%2Fimg%2Fnew-action.png)

## Action Page

Click on the new action to see your new action's overview page. 

![action-overview.png](..%2F..%2Fstatic%2Fimg%2Faction-overview.png)

**Analytics:** The action `Analytics` view gives you an overview of **key results** for your
action including `Total API Call` `Average Response Time` and `Average Cost Per API Call`. 

:::tip
Analytics are tracked from API calls, not from running actions through the Jixi app. This
is to help separate events from development, and maintain accuracy and quality.
:::

**Code:** The action `Code` view provides a built-in code editor to define your Action's
behavior. It uses `Javascript` and provides an integrated SDK.

**Confidence:** Each action has a **Confidence Score** which represents the expected quality
of response. Because AI can be unpredictable, confidence scores give you an estimate of how
much to trust a generated response.

Confidence scores are determined through human-feedback, by rating responses as `Good` or `Bad` 
results. 

For more information see **[Confidence Scores](https://somepage.com)**

**Logs:** The logs of your action from API calls.

### Update the Code

Navigate to your action's `Code` section and replace the default code with:

```javascript
async function execute(userInput) {

  const config = {
    prompt: "Write me a funny joke about " + userInput["topic"],
    
    response: {
      setup: "string",
      punchline: "string",
    },
  }
  
  // Generate with AI
  const joke = await jixi.askAI(config);
  return joke;
}
```
This action will create a new joke about any topic given. Jixi auto-saves as you type.

### Run the Action

Click the `Run` button to bring up the `Run Menu`. The `Run Menu` gives you the opportunity to 
test your action with different inputs, view results, logs, and verify analytics.

![run-menu.png](..%2F..%2Fstatic%2Fimg%2Frun-menu.png)

**Input:** This section helps to test actions under different user-input scenarios. When applications
call the Action's API, they can include a [request body](https://mixedanalytics.com/knowledge-base/request-bodies-explained/)
This body is passed to our action as a `userInput` parameter. 

:::tip
If you are creating the `Input` from end users, like we're doing here, It's good practice to test 
your action with a large variety of inputs to make sure it behaves correctly. You never know what
your users will ask for!
:::

Replace the action's `Input` with:
```javascript
{
  "topic": "Ancient Egypt"
}
```

Click **`RUN`**

**Results:** This section is what the action will return. It's the information your application
will receive from calling the Action. Once we have a result, we can save it as either a `Good` or
`Bad` result. This will build up our Action's Confidence Score.

**Logs:** This section shows logs from the Action, including errors and anything we've logged with
```javascript
console.log("This is a log");
```
Logs can help you develop actions and verify data. Try adding some logs to your Action's code 
and re-running!

**Info:** This section provides analytics results for running this action, including the response
time and cost.