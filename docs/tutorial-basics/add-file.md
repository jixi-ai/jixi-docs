---
sidebar_position: 4
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

## API
You can also upload files via a `POST` request to `api.jixi.ai/upload`. 

1. Include your API Key as a Bearer Token
2. Set `content-type` to `multipart/form-data`

### cURL

```
curl --location 'https://api.jixi.ai/upload' \
--header 'Content-Type: multipart/form-data' \
--header 'Authorization: Bearer YOUR_API_KEY' \
--form 'file=@"/YOUR-FILE.txt"'
```

### Javascript

```javascript
const myHeaders = new Headers();
myHeaders.append("Content-Type", "multipart/form-data");
myHeaders.append("Authorization", "Bearer YOUR_API_KEY");

const formdata = new FormData();
formdata.append("file", fileInput.files[0], "YOUR-FILE.txt");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: formdata,
  redirect: "follow"
};

fetch("https://api.jixi.ai/upload", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```