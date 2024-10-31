import SubHeading from "../components/atoms/HomePage/SubHeading";
import CategoriesRaw from "../components/molecules/HomePage/CategoriesRaw";
import ProductRaw from "../components/molecules/HomePage/ProductRaw";

function HomeSection({ ...props }) {
  const { productState } = props;

  return (
    <section className="container mx-auto mt-2 px-60 font-poppins">        
      <SubHeading {...{ title: "Flash Sale" }} />
      <ProductRaw {...{ productState }} />
      <div className="mt-7"></div>
      <SubHeading {...{ title: "Categories" }} />
      <CategoriesRaw />
    </section>
  );
}

export default HomeSection;
