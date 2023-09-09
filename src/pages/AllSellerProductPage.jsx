import SellerListingItems from "../components/FeatureProducts";
import SellerListingBreadTitle from "../features/AllSellerProductPage/AllSellerListingBreadTitle";
import SellerListingListingFilter from "../features/AllSellerProductPage/AllSellerListingListingFilter";
import SellerListingSearchBar from "../features/AllSellerProductPage/AllSellerListingSearchBar";
import SellerListingPopularSearches from "../features/AllSellerProductPage/AllSellerListingPopularSearches";
import FeaturePagination from "../components/FeaturePagination";
import SellerListingInfo from "../features/AllSellerProductPage/AllSellerListingInfo";
export default function DashboardPage() {
  return (
    <>
      <div className="max-w-[1400px] border-b-2 border-gray-100 xl:px-14 mx-auto pt-8 px-4 sm:pb-6       ">
        <SellerListingBreadTitle />
        <SellerListingSearchBar />
        <SellerListingPopularSearches />
      </div>
      <div className="sm:2    pb-20 " style={{ backgroundColor: "#FCFCFC " }}>
        <div className="max-w-[1400px] xl:px-14 mx-auto  pt-8 px-2  ">
          <SellerListingListingFilter />
          <SellerListingItems />
          <FeaturePagination onchange={"sm:flex"} onchange2={"sm:hidden"} />
          <SellerListingInfo />
        </div>
      </div>
    </>
  );
}
