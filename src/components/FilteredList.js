import { useMemo } from "react";

export function FilteredList() {
  const filterList = useMemo(() => {
    const list = [
      { id: 1, name: "Jimmy", age: 5 },
      { id: 2, name: "Jenny", age: 25 },
      { id: 3, name: "Valerio", age: 27 },
      { id: 4, name: "Erika", age: 25 },
    ]

    return list.filter((item) => item.age > 18)
  }, [])

  return (
    <div>
        {filterList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
    </div>
  )
}