import TablelOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function CabinTableOperation() {
  return (
    <TablelOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", lable: "All" },
          { value: "no-discount", lable: "No discount" },
          {
            value: "with-discount",
            lable: "With discount",
          },
        ]}
      />
      <SortBy
        options={[
          {
            value: "name-asc",
            lable: "Sort by name (A-Z)",
          },
          {
            value: "name-desc",
            lable: "Sort by name (Z-A)",
          },
          {
            value: "regularPrice-desc",
            lable: "Sort by price (high first)",
          },
          {
            value: "regularPrice-asc",
            lable: "Sort by price (low first)",
          },
          {
            value: "maxCapacity-asc",
            lable: "Sort by capactiy (low first)",
          },
          {
            value: "maxCapacity-desc",
            lable: "Sort by capactiy (high first)",
          },
        ]}
      />
    </TablelOperations>
  );
}

export default CabinTableOperation;
