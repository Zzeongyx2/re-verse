import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./PositionalAudio"));

function LazyAudio() {
  return (
    <div>
      <Suspense fallback={<div>로딩중...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default LazyAudio;
