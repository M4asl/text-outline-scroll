import './App.css';

const imageUrl =
  'https://images.unsplash.com/photo-1668197819665-e6d3bc7c4f1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

function App() {
  return (
    <div className="page-wrapper">
      <div className="text-parent">
        <h1>The strength of the team is each individual member</h1>

        <h1>I really get motivated when I have doubters</h1>
      </div>

      <img src={imageUrl} alt="Mountain" />

      <div className="text-parent">
        <h1>The strength of the team is each individual member</h1>

        <h1>I really get motivated when I have doubters</h1>
      </div>
    </div>
  );
}

export default App;
