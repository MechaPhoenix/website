

import React from 'react';
import '../css/404.css'
const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Page Not Found</p>
      <a href='/' className='Button'>Home</a>
    </div>
  );
};

export default NotFoundPage;

// import { useRouteError } from "react-router-dom";
// {}
//   const error = useRouteError();
//   return (
//     <div>
//       <p style={{color: "red", fontSize:"30px"}}>
//         {error.status == "404" ? "404 Page Not Found" : ""}
//       </p>
//     </div>
//   );
// }

// import { useRouteError } from "react-router-dom";
// const Page = () => {
//     const error = useRouteError();
// return (
//     <div>
// /     <p style={{color: "red", fontSize:"30px"}}>
//          {error.status == "404" ? "404 Page Not Found" : ""}
//        </p>
//     </div>
// )
// }

// export default Page