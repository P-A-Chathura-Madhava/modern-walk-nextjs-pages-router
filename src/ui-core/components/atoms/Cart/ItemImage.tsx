function ItemImage({ ...props }) {
  const { image } = props;

  return <img src={image} alt="cart-item-image" className="w-16 h-16" />;
}

export default ItemImage;
