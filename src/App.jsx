import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import TableList from "./components/table/TableList";
import AddModal from "./components/modal/AddModal";

const INITAL_PAID = [
  {
    id: 1,
    title: "hamburger",
    amount: 259,
    category: "food",
    type: "expense",
    method: "cash",
  },
  {
    id: 2,
    title: "shampoo",
    amount: 199,
    category: "food",
    type: "expense",
    method: "cash",
  },
];

function App() {
  const [list, setList] = useState(INITAL_PAID);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [filterType, setFilterType] = useState("all");

  const handleAdd = (newItem) => {
    const addNewList = [...list, { ...newItem, id: list.length + 1 }];
    setList(addNewList);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    const deleteList = list.filter((item) => item.id !== id);
    setList(deleteList);
  };

  const openEditModal = (item) => {
    setEditItem(item);
    setShowModal(true);
  };

  const handleEdit = (updatedItem) => {
    const updatedList = list.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setList(updatedList);
    setShowModal(false);
    setEditItem(null);
  };

  const filteredList = list.filter((item) => {
    if (filterType === "all") return true;
    return item.type === filterType;
  });

  return (
    <>
      <Header
        onAdd={() => {
          setShowModal(true);
          setEditItem(null);
        }}
        filterType={filterType}
        onFilterChange={setFilterType}
      />

      <TableList
        list={filteredList}
        handleDelete={handleDelete}
        onEdit={openEditModal}
      />

      <AddModal
        show={showModal}
        onHide={() => {
          setShowModal(false);
          setEditItem(null);
        }}
        onSave={editItem ? handleEdit : handleAdd}
        editItem={editItem}
      />
    </>
  );
}

export default App;
