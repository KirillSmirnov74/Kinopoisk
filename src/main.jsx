import './../src/styles/index.css';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';

const rootElement = document.querySelector('#root');
createRoot(rootElement).render(<App />);
