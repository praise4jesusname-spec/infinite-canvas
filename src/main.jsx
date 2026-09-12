import React from 'react'
import { createRoot } from 'react-dom/client'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
import './styles.css'

function App() {
  return (
    <main className="canvas-app">
      <Tldraw persistenceKey="infinite-canvas" />
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
