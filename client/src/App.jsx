import React from "react";
import Test from "./test/test.jsx";
import Skeleton from '@material-ui/lab/Skeleton';
export default function App() {
  return (
    <div className="App">
      <Skeleton width={200} height={40} variant="text" />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={118} />
    </div>
  );
}
