```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    browser->>server: (*) GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    NoteComponent right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    NoteComponent right of browser: The browser executes the callback function that renders the notes

    user->>browser: Enter note (e.g. "look at my fancy note")
    user->>browser: Click "Save" button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note<br/>(note=look+at+my+fancy+note)
    activate server

    NoteComponent right of server: Server adds note to persistent storage

    server->>browser: 302 Found (Location: /exampleapp/notes)
    deactivate server

    NoteComponent right of browser: Browser follows the location indicated in Location header.<br/>The flow resumes from (*).
```