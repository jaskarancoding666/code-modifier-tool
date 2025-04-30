import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Prism } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function App() {
  const [code, setCode] = useState('');
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!code.trim() || !prompt.trim()) {
      alert('Please enter both code and a prompt.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:8000/modify-code', {
        code,
        prompt,
      });
      setResponse(res.data);
    } catch (error) {
      console.error('Error modifying code:', error);
    }
  };

  const clearFields = () => {
    setCode('');
    setPrompt('');
    setResponse(null);
  };

  const integrateCode = () => {
    if (response?.updated_code) {
      setCode(response.updated_code);
      setResponse(null);
      alert('Code integrated successfully!');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response.updated_code);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="App">
      <h1>Code Modifier</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Paste your code here..."
          rows="10"
          cols="50"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="What should I do with the code?"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <br />
        <button type="submit">Modify Code</button>
        <button
          type="button"
          onClick={clearFields}
          style={{
            marginLeft: '10px',
            padding: '10px 20px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Clear
        </button>
      </form>

      {response && (
        <div className="output">
          <h2>Modified Code</h2>
          <Prism language="python" style={dracula}>
            {response.updated_code}
          </Prism>
          <button onClick={copyToClipboard}>Copy Code</button>
          <h3>Explanation</h3>
          <p>{response.explanation}</p>
          <button
            type="button"
            onClick={integrateCode}
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Integrate Code
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
