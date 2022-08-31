import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Content, setContent] = React.useState({ title: "", content: "" });
  const [items, setItem] = React.useState([]);
  function handleChange(event) {
    const { name, value } = event.target;
    setContent(function (previousValue) {
      if (name === "title") {
        return { title: value, content: previousValue.content };
      } else {
        return { title: previousValue.title, content: value };
      }
    });
  }
  function addItem(event) {
    setItem(function (prevItem) {
      return [...prevItem, Content];
    });
    seContent({title:"", content:""});
    event.preventDefault();
  }
  function deleteItem(id) {
    setItem(function (prevItem) {
      return prevItem.filter(function (element, index) {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea Changed={handleChange} Clicked={addItem} />
      {items.map(function (x, index) {
        return (
          <Note
            key={index}
            id={index}
            title={x.title}
            content={x.content}
            dClicked={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
