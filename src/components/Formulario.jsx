const Formulario = () => {
  const handleKeuUp = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      return e.target.value;
    }
  };

  return (
    <>
      <legend>Color</legend>
      <input
        type="text"
        placeholder="Ingrese el color de texto"
        onKeyUp={handleKeuUp}
      />
      {console.log(handleKeuUp)}
    </>
  );
};

export default Formulario;
