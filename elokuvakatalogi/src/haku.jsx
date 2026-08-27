function Haku({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Hae elokuva"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Haku;
