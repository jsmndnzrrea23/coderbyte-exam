import { useState } from 'react'

const DragDrop = () => {
  const [widgets, setWidgets] = useState<string[]>([])

  const handleOnDrag = (e: React.DragEvent, widgetType: string) => {
    e.dataTransfer.setData('widgetType', widgetType)
  }

  const handleOnDrop = (e: React.DragEvent) => {
    const widgetType = e.dataTransfer.getData('widgetType') as string
    console.log('widgetType', widgetType)
    setWidgets([...widgets, widgetType])
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-4">
        <div draggable onDragStart={(e) => handleOnDrag(e, 'Widget A')}>
          Widget A
        </div>
        <div draggable onDragStart={(e) => handleOnDrag(e, 'Widget B')}>
          Widget B
        </div>
        <div draggable onDragStart={(e) => handleOnDrag(e, 'Widget C')}>
          Widget C
        </div>
      </div>
      <div
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
        className="p-4 border-slate-600 border-4"
      >
        {widgets.length < 1 && <p>Drop here</p>}
        {widgets.map((widget, index) => (
          <div key={index}>{widget}</div>
        ))}
      </div>
    </div>
  )
}

export default DragDrop
