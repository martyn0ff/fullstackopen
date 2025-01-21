```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    NoteComponent right of browser: The browser overrides default onsubmit event handler for the note<br/>form with custom POST request that stores the new note in<br/>persistent storage
    NoteComponent right of browser: On page load, the browser loads all stored notes and stores them<br/>in-memory

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    user->>browser: Enter note (e.g. "look at my fancy note")
    user->>browser: Click "Save" button

    activate browser
    NoteComponent right of browser: Browser stores the note in-memory, clears the input field, redraws<br/>all notes and sends the note to the server for persistent storage
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    deactivate browser

    activate server
    server-->>browser: {"message": "note created"}

```