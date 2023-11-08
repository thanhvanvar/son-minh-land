import React from "react";
import { CircularProgress, Spinner } from "@nextui-org/react";

function NextPageLoading() {
  return (
    <>
      <div>
        <div className="fixed bg-[#ffffffbf] w-[100%] h-[100%] t-0 r-0 z-40">
          {/* <CircularProgress
            style={{
              position: "absolute",
              zIndex: 1,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            color="success"
            aria-label="Đang tải..."
          /> */}
          <Spinner
            style={{
              position: "absolute",
              zIndex: 1,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            label="vui lòng đợi"
            color="primary"
            labelColor="primary"
          />
        </div>
      </div>
    </>
  );
}

export default NextPageLoading;
