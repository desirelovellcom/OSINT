"use client"

import { useEffect, useState } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import LayoutManager from "./components/LayoutManager"
import defaultData from "./data/default.json"

function App() {
  const [sections, setSections] = useState([])

  useEffect(() => {
    // Load saved layout from localStorage or use default
    const savedLayout = localStorage.getItem("osintflow-layout")
    if (savedLayout) {
      setSections(JSON.parse(savedLayout))
    } else {
      setSections(defaultData.sections)
    }
  }, [])

  // Save layout to localStorage whenever it changes
  useEffect(() => {
    if (sections.length > 0) {
      localStorage.setItem("osintflow-layout", JSON.stringify(sections))
    }
  }, [sections])

  const handleDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(sections)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setSections(items)
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">OSINTFlow</h1>
        <p className="text-gray-400">Your personal OSINT research dashboard</p>
      </header>

      <DragDropContext onDragEnd={handleDragEnd}>
        <LayoutManager sections={sections} />
      </DragDropContext>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>OSINTFlow - Open Source Intelligence Dashboard</p>
        <p className="mt-1">
          <a
            href="https://github.com/yourusername/osintflow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
