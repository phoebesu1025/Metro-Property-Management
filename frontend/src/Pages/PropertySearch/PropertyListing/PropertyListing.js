import Property from "../../../Components/CommonComponents/PropertyCarousel/ItemProperty/Property";
//import PropertyArray from "../../../Components/CommonComponents/PropertyCarousel/PropertyArray";

const PropertyListing = ({ properties }) => {
  return (
    <div
      className={`grid 2xl:grid-cols-4  md:grid-cols-3 xs:grid-cols-2  grid-cols-1
      gap-x-4 gap-y-12  2xl:px-24 xl:px-16 sm:px-12 px-6 py-20`}
    >
      {properties &&
        properties.map((property, index) => (
          <Property item={property} key={index} />
        ))}
    </div>
  );
};

export default PropertyListing;
