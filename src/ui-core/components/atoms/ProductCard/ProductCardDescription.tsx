function ProductCardDescription({ ...props }) {
  return (
    <p className="text-xs font-medium text-center line-clamp-3">
      {props.description}
    </p>
  );
}

export default ProductCardDescription;
