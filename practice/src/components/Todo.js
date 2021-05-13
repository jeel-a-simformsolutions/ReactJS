import { useState } from "react";
import Backdrop from "./Backdrop";
import Model from "./Model";

function Todo(props) {
  const [modelIsOpen, setModelIsOpen] = useState(false);

  function deleteHandler() {
    setModelIsOpen(true);
  }

  function closeModelHandler() {
    setModelIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modelIsOpen && (
        <Model onCancel={closeModelHandler} onConform={closeModelHandler} />
      )}
      {modelIsOpen && <Backdrop onCancel={closeModelHandler} />}
    </div>
  );
}

export default Todo;
