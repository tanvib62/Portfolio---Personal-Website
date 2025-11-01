console.log('App module loaded');
export default function App({counter}) {
  return (
    <>
      <h1>Hello, world! {counter}</h1>
      <input placeholder="Type something here" />
    </>
  );
}

// App.js
export function initApp() {
  console.log('App initialized');
  // other startup logic
}