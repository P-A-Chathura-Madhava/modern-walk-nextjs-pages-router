function CartHeading({ ...props }) {
  const { title } = props;

  return (
    <h2 className="text-xl font-bold border border-b-black border-r-transparent border-l-transparent border-t-transparent">
      {title}
    </h2>
  );
}

export default CartHeading;
