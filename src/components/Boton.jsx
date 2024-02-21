const Button = (props) => {
  return (
    <button
      style={{
        backgroundColor: "#0000FF",
        color: "white",
        borderRadius: "15px",
        padding: "10px",
        fontSize: "16px",
        border: "none",
        cursor: "pointer",
        border: "none",
        margin: "50px",
      }}
    >
      {props.texto}
    </button>
  );
};

export default Button;
