function CartProductCardImage({ ...props }) {
  const { image } = props;

  return (
    <img
      className="h-[100px] w-[100px] my-2"
      src={image}
      alt="mens-cloth-img"
    />
  );
}

export default CartProductCardImage;
