function Model(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function conformHandler() {
    props.onConform();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={conformHandler}>
        Conform
      </button>
    </div>
  );
}

export default Model;
