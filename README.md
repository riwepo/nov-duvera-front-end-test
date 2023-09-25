# Solution for Quadra Challenge test

This app is a solution to a test called 'Quadra Challenge' found on Upwork.com.
Below are the requirements that were given for the challenge.
I believe this app meets all the requirements.

## Quadra Challenge Requirements

### Instructions

Create a project in NextJS 13 that will communicate via websocket and receive a number between 1000000 and 9999999 every 100ms, the number must be stored in the redux state. Create a client side component to display the numbers received, only the number must be client side. The prototype sent is very simple just to exemplify the idea, but feel free to create the style you prefer and show your skills with tailwindcss.

### Bonus

Change the number color under the following conditions:

- When the new value is greater than the previous one, it changes to green
- When the new value is lower than the previous one, it changes to red
- If it is the same, change it to white

### Requirements

- NextJS 13
- Tailwindcss
- Redux Toolkit
- Typescript
- Redux middleware to integrate websocket

### Run websocket server

> npm i
>
> node ./index.js
