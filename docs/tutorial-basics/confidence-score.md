---
sidebar_position: 2
---

# Confidence Score

Generative data is unpredictable. But as developers, it's critical to have responses be reliable,
consistent, and accurate. To tackle this, Jixi action's include a **confidence score**. A 
**confidence score** is a percentage that represents the expected quality of generated response. 

:::tip
A **high** confidence score means we can expect a high-quality response.

A **low** confidence score means the action is unreliable, or consistently generating low-quality
responses. 
:::

![confidence-score-page.png](..%2F..%2Fstatic%2Fimg%2Fconfidence-score-page.png)


## Building Action Confidence Score

An action's confidence score is determined from **human-feedback**, by saving an action's output as a
`Good` or `Bad` result. This is done through the console or through the API.

### Console

Build an action's confidence score during development by saving output as `Good` or `Bad` results. 
On the action's `Run Screen` there are two options on the bottom of the page: `Save as Good Result`
and `Save as Bad Result`. These buttons update the action's confidence. 

![save-confidence.png](..%2F..%2Fstatic%2Fimg%2Fsave-confidence.png)


### API

You can build an action's confidence through API calls. End-users, QA testers, and
other stakeholders can mark our action's response as `Good` or `Bad` and adjust our confidence after
our action is live.

To update a confidence score, make a `POST` request to the action's `confidenceScore` API endpoint.

```javascript
async function callJixiAction() {
    const url = 'https://api.jixi.ai/YOUR-ACTION-ID/confidenceScore';
    const apiKey = 'YOUR-API-KEY-HERE';
    const body = { 
        result: 'good' 
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(body)
    });
}
```

We can optionally include `input` and `output` in the body, to save that data to our console.

```javascript
    const body = { 
        result: 'good',
        input: userInput,
        output: jixiActionResult,
    };
```

:::note
Imagine an AI chat bot. Now imagine next to every generated response, we've included a **thumbs-up** or **thumbs-down**
button.

We can use the API to update our Action's confidence based on this user input.
:::

## Using the Confidence Score

We can access the action's current confidence score within the Action's code by calling:
```javascript
const confidence = await jixi.getConfidenceScore();
```

Navigate to your Action's code. Let's create a safeguard if our joke Action's confidence falls below 75%.

```javascript
async function execute(userInput) {

  // 'getConfidenceScore' will return a number between 0.0 and 1.0
  const confidence = await jixi.getConfidenceScore();

  // If, for whatever reason, our confidence score falls below 75%
  // return a default joke
  if (confidence <= 0.75) {
    return {
      setup: "Why did the chicken cross the road",
      punchline: "To get to the other side!"
    }
  }
  
  const config = {
    prompt: "Write me a funny joke",
    
    response: {
      setup: "string",
      punchline: "string",
    },
  }
  
  // Generate with AI
  return await jixi.askAI(config);
}
```

:::tip
For **mission-critical** actions, we can create safeguards requiring higher confidence scores.
:::