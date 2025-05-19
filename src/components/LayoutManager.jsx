import { Droppable } from "react-beautiful-dnd"
import SectionCard from "./SectionCard"

function LayoutManager({ sections }) {
  return (
    <Droppable droppableId="sections" direction="vertical">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sections.map((section, index) => (
            <SectionCard key={section.title} section={section} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default LayoutManager
