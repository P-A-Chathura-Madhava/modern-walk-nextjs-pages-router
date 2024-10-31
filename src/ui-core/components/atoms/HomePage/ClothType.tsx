function ClothType({ ...props }) {
  const { clothType } = props;

  return <h2 className="text-white text-4xl font-bold">{clothType}</h2>;
}

export default ClothType;
