---
sidebar_position: 3
---

# Read and Save Data

Every Jixi application is backed by a fully managed MongoDB database. We can easily save
and read data to keep long-term memory, cache responses, and avoid unnecessary AI generation. 

## Save the result

Navigate to the Action we created, update your Action's code to:
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

    // Save the joke
    joke["topic"] = userInput["topic"];
    await jixi.saveData(joke);

    return joke;
}
```

In our code, we added the `topic` to the joke so we can find it later. Jixi also added a unique id to our data. 
Try re-running the action, then navigate to your application's `Saved Data` page on the
navigation bar.

![saved-data.png](..%2F..%2Fstatic%2Fimg%2Fsaved-data.png)

We see our saved joke! 

## Read the result

Generating a brand new result might not always be necessary. In our case, we should only
generate a new joke if it's a new topic. Navigate back to your Action's code and replace
the existing code with:

```javascript
async function execute(userInput) {

    // Search for an existing joke about the topic
    const existingJokes = await jixi.readData({
      "topic": userInput["topic"] 
    });

    // If a joke already exists, use it
    if (existingJokes.length > 0) {
      return existingJokes[0];
    }
  
    const config = {
        prompt: "Write me a funny joke about " + userInput["topic"],

        response: {
            setup: "string",
            punchline: "string",
        },
    }

    // Generate with AI
    const joke = await jixi.askAI(config);
    
    // Save the joke
    joke["topic"] = userInput["topic"];
    await jixi.saveData(joke);
    
    return joke;
}
```

We've added a `readData` call that will search our saved data for jokes where `topic` matches
the userInput's `topic`.