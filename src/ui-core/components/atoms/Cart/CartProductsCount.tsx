function CartProductsCount({ ...props }) {
  const { cartItemCount } = props;

  return <h4 className="font-bold text-red-800 text-md">{cartItemCount}</h4>;
}

export default CartProductsCount;
