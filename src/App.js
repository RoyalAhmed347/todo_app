import { useEffect, useState } from "react";
import "./App.css";
import ListItems from "./compunent/ListItems";
const LSData = () => {
  let todoItems = localStorage.getItem("todoItems");
  if (todoItems) {
    return JSON.parse(todoItems);
  } else {
    return [];
  }
};
function App() {
  const [inputText, setInputText] = useState("");
  const [listItem, setListItem] = useState(LSData());

  const inputEvent = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      btnEvent();
    }
  };

  const delItems = (id) => {
    setListItem((oldData) => {
      return oldData.filter((cruntVal, index) => {
        return index != id;
      });
    });
  };

  const btnEvent = () => {
    if (!inputText) {
    } else {
      setListItem((e) => {
        return [...e, inputText];
      });
      setInputText("");
    }
  };

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(listItem));
  }, [listItem]);

  return (
    <>
      <div className="mani_box">
        <div className="box">
          <input
            onChange={inputEvent}
            onKeyDown={handleKeyDown}
            value={inputText}
            placeholder="Write somthing hear..."
            autoFocus
          />
          <button onClick={btnEvent}>Add</button>
          <ul className="toListBox">
            {listItem.map((item, index) => {
              return (
                <ListItems
                  text={item}
                  key={index}
                  id={index}
                  onSelect={delItems}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
