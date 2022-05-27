import React from "react";

function Cat() {
  const cats = [
    {
      id: 1,
      name: "Lenses",
    },
    {
      id: 2,
      name: "Frames",
    },
    {
      id: 3,
      name: "Accessories",
    },
    {
      id: 4,
      name: "Lenses",
    },
    {
      id: 5,
      name: "Frames",
    },
    {
      id: 6,
      name: "Lab Equipment",
    },
    {
      id: 7,
      name: "Optical Materials",
    },
    {
      id: 8,
      name: "Frames",
    },
  ];

  return (
    <div>
      <ul className="flex items-center text-center">
        {cats.map((cat) => (
          <li key={cat.id} className="mx-2 items-center text-center">
            <h3 className="text-sm text-center">{cat.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cat;
