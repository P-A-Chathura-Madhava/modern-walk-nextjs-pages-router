function CartProductCardHeading({ ...props }) {
    return (
      <h2 className="text-sm font-bold text-center truncate px-2">
        {props?.title?.length < 20 ? props?.title : props?.title?.substring(0, 20)}
      </h2>
    );
  }
  
  export default CartProductCardHeading;
  