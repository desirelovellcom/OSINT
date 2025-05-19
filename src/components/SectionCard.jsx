import { Draggable } from "react-beautiful-dnd"
import LinkTile from "./LinkTile"

function SectionCard({ section, index }) {
  return (
    <Draggable draggableId={section.title} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`
            bg-gradient-to-r ${section.color}
            rounded-xl shadow-lg overflow-hidden
            transform transition-all duration-200
            ${snapshot.isDragging ? "scale-105 rotate-1 shadow-xl" : ""}
          `}
        >
          <div className="p-5">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">≡</span> {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.links.map((link) => (
                <LinkTile key={link.name} link={link} />
              ))}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default SectionCard
