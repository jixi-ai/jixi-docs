---
sidebar_position: 3
---

# Files

Adding files gives your actions specific information about topics that it might not know.
This could include product information for a customer support bot, lore for a video game NPC, 
historical information for data processing, and more. 

## Add a File

To add a file, navigate to your Application's `My Files` page. 

For our example, you can use your own files or [download our .txt example](https://jixi-public.s3.us-east-2.amazonaws.com/John-James.txt)

:::tip
Jixi accepts `.TXT` `.PDF` `.PPTX` `.WORD` `.DOC` `.HTML` `.PNG` `.CSV` files and more
:::

Drag the file onto the page, or click `Upload` and choose the file. Wait a few a seconds for
the upload to complete.

![files.png](..%2F..%2Fstatic%2Fimg%2Ffiles.png)

Navigate back to your Action. Replace your action's code with:

```javascript
async function execute(userInput) {

    const config = {
        prompt: "Write me a funny joke about John James",

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

Click `RUN` and wait for the joke to generate.

Normally, our action would have no knowledge about "John James". Because we added a file
with information about him, our action is aware of who he is, and can make a joke about him!

## Folders

By default, actions read **all files** within the `My Files` page. We can specific exactly
where to search by including an array of folder names in our Action's code.

For example to ignore all files, we can pass an empty list:

```javascript
async function execute(userInput) {

    const config = {
        prompt: "Write me a funny joke about John James",

        response: {
            setup: "string",
            punchline: "string",
        },

        // Ignore everything in My Files
        folders: []
    }

    // Generate with AI
    const joke = await jixi.askAI(config);
    return joke;
}
```

To search for information only in the `My Friends` folder we include the name of the folder:
```javascript
async function execute(userInput) {

    const config = {
        prompt: "Write me a funny joke about John James",

        response: {
            setup: "string",
            punchline: "string",
        },

        // Use all the information in 'My Friends'
        folders: ["My Friends"]
    }

    // Generate with AI
    const joke = await jixi.askAI(config);
    return joke;
}
```