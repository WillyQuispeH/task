"use client";

import { useEffect, useState } from "react";

interface Item {
  id: number;
  name: string;
  description: string;
}

const CrudClient: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<Item>({
    id: 0,
    name: "",
    description: "",
  });

  const handleAdd = () => {
    setData([...data, { ...newItem, id: Date.now() }]);
    setNewItem({ id: 0, name: "", description: "" });
  };

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `data_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadPDF = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "document.pdf"; // Puedes cambiar el nombre del archivo aquí
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button
        onClick={() => {
          downloadPDF(
            "https://westayrentspa.pipedrive.com/documents/p/1MvVsn48o1bmkEcirggjLJqF7vrtJa5IXBxNEmN5cEy"
          );
        }}
      >
        descatga
      </button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} - {item.description}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <textarea
          name="description"
          value={newItem.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <button onClick={handleSave}>Save Data as New File</button>
    </div>
  );
};

export default CrudClient;
