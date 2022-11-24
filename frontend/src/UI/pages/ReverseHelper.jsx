import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./Reverse"));

function ReverseHelper() {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default ReverseHelper;
