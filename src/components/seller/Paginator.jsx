import { Button } from "flowbite-react";

function Paginator({ data, currentPageIndex, setcurrentPageIndex }) {
  const changePage = (changetype) => {
    if (changetype === "prev") {
      if (currentPageIndex === 1) {
        return;
      }
      setcurrentPageIndex((prev) => prev - 1);
    } else {
      if (currentPageIndex === data?.last_page || 0) {
        return;
      }
      setcurrentPageIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="border-t border-gray-200 flex justify-between py-3 px-3">
      <h6>
        Showing page {data && data.current_page} of {data && data.total} Total
        Item
      </h6>
      <div className="flex gap-3 items-center">
        <Button
          outline={true}
          gradientDuoTone="redToYellow"
          onClick={(e) => changePage("prev")}
        >
          Previous
        </Button>{" "}
        <Button
          outline={true}
          gradientDuoTone="redToYellow"
          onClick={(e) => changePage("next")}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Paginator;
