function CartItemTitle({ ...props }) {
  const { title } = props;

  return (
    <h2 className="text-xs font-bold">
      {title.length < 20 ? title : title.substring(0, 20)}
    </h2>
  );
}

export default CartItemTitle;
