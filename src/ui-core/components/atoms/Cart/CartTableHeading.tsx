function CartTableHeading({ ...props }) {
  const { width, title } = props;

  return <h4 className={`w-[${width}%] font-bold text-md`}>{title}</h4>;
}

export default CartTableHeading;
