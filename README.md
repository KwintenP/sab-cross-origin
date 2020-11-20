## Installation

- Run yarn in the root dir
- add the following to your hosts file

  127.0.0.1 example.com

- Open up the 'rootcert/myCA.pem' file and trust it in your local certificate store (in keychain (osx)). The cert is called 'root' (srr for the bad naming)

## Running it

- cd top && node top.js
- cd iframe && node iframe.js

Go to 'https://localhost:7681'.
