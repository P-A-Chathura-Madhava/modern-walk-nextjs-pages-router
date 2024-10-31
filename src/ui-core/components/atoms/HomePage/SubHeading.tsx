function SubHeading({ ...props }) {
  const { title } = props;
  return <h2 className="mb-4 text-xl font-bold">{title}</h2>;
}

export default SubHeading;
