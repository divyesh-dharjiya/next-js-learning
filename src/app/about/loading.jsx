import React, { Suspense } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading feed...</p>}>
        <p>...Loading</p>
      </Suspense>
      {/* <SkeletonTheme baseColor="grey" highlightColor="grey">
        <p>
          <Skeleton count={1} />
        </p>
      </SkeletonTheme> */}
    </div>
  )
}

export default Loading;