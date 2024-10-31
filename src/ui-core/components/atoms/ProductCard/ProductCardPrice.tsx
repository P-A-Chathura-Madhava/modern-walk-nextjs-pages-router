function ProductCardPrice({ ...props }) {
  return (
    <h2 className="text-xl font-bold text-center text-blue-600">
      {props.price}
    </h2>
  );
}

export default ProductCardPrice;
