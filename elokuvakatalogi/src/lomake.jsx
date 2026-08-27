function ElokuvaLomake({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const movie = {
      title: formData.get("nimi"),
      year: formData.get("vuosi"),
      genre: formData.get("genre"),
    };

    onSubmit(movie);

    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="nimi" type="text" placeholder="Nimi" />
      <input name="vuosi" type="number" placeholder="Vuosi" />
      <input name="genre" type="text" placeholder="Genre" />

      <button type="submit">Lisää</button>
    </form>
  );
}

export default ElokuvaLomake;
