// import React from 'react'
// import { Pagination } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";

// const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
//   return (
//     pages > 1 && (
//         <Pagination>
//             { [...Array(pages).keys()].map((x) =>(
//                 <LinkContainer
//                     key={x + 1}
//                     to={
//                         !isAdmin
//                             ? keyword
//                             ? `/search/${keyword}/page/${x+1}`
//                             : `/page/${x + 1}`
//                             : `/admin/productlist/${x + 1}`
//                     }>
//                     <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
//                     </LinkContainer>
//             )) }
//         </Pagination>
//     )
//   )
// }

// export default Paginate

import React from 'react';
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import '../assets/styles/Paginate.css';
import '../assets/styles/index.css';

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <div className="paginate-container"> {/* Container to center the Pagination component */}
        <Pagination>
          {[...Array(pages).keys()].map((x) => (
            <LinkContainer
              key={x + 1}
              to={
                !isAdmin
                  ? keyword
                    ? `/search/${keyword}/page/${x + 1}`
                    : `/page/${x + 1}`
                  : `/admin/productlist/${x + 1}`
              }
            >
              <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
            </LinkContainer>
          ))}
        </Pagination>
      </div>
    )
  );
}

export default Paginate;
