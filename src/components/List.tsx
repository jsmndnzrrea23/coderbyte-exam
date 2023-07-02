// Write a ReactJS component that renders a list of items. The user should be able to click on an item to remove it from the list.

import { useCallback, useState } from 'react'

const List = () => {
  const [items, setItems] = useState([
    'pliers',
    'drill',
    'hammer',
    'nails',
    'screw driver',
  ])

  const [itemsToRemove, setItemsToRemove] = useState<string[]>([])

  const handleAddItemsToRemove = useCallback(
    (newItem: string) => {
      if (itemsToRemove.find((item) => item === newItem)) {
        return setItemsToRemove(
          itemsToRemove.filter((item) => item !== newItem),
        )
      }

      setItemsToRemove([...itemsToRemove, newItem])
    },
    [itemsToRemove],
  )

  const handleRemoveItems = useCallback(() => {
    setItems(items.filter((item) => !itemsToRemove.includes(item)))
    setItemsToRemove([])
  }, [items, itemsToRemove])

  return (
    <div className="mt-8">
      <h2 className="mb-8 text-lg font-semibold">List of tools</h2>
      {items.map((item) => (
        <div key={item} className="flex gap-4">
          <input
            type="checkbox"
            checked={itemsToRemove.includes(item)}
            onChange={() => handleAddItemsToRemove(item)}
          />
          <p>{item}</p>
        </div>
      ))}
      {itemsToRemove.length > 0 && (
        <div className="mt-8 flex gap-4">
          Do you want to delete
          <span className="font-semibold">{itemsToRemove.toString()}</span>?
          <button
            onClick={() => handleRemoveItems()}
            className="py-1 px-2 rounded-md bg-red-500 text-white text-sm"
          >
            Yes, Delete
          </button>
          <button
            onClick={() => setItemsToRemove([])}
            className="py-1 px-2 rounded-md bg-gray-500 text-white text-sm"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}

export default List
