function CartItemDescription({ ...props }) {
  const { description } = props;

  return (
    <p className="mb-1 text-xs font-bold">
      {description.length < 20 ? description : description.substring(0, 20)}
    </p>
  );
}

export default CartItemDescription;
