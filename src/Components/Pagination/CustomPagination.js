// import React, { useState } from 'react';
// import Pagination from 'react-bootstrap/Pagination';

// const CustomPagination = ({ page, totalPages, onSelect }) => {

//     /////////////////////////////// 3 dots////////////////////
//     const items = [];
//     const range = 2; // number of pages to show before and after current page

//     if (totalPages <= 1) {
//         return null; // don't show pagination if there is only one page
//     }

//     const renderPage = (pageNumber) => {
//         return (
//             <Pagination.Item
//                 key={pageNumber}
//                 active={pageNumber === page}
//                 onClick={() => onSelect(pageNumber)}
//             >
//                 {pageNumber}
//             </Pagination.Item>
//         );
//     };

//     // always render first page
//     items.push(renderPage(1));

//     // render '...' if currentPage > 4
//     if (page > 4) {
//         items.push(<Pagination.Ellipsis key="ellipsis-start" />);
//     }

//     // render pages before and after current page
//     for (let i = Math.max(2, page - range); i <= Math.min(totalPages - 1, page + range); i++) {
//         items.push(renderPage(i));
//     }

//     // render '...' if currentPage < totalPages - 3
//     if (page < totalPages - 3) {
//         items.push(<Pagination.Ellipsis key="ellipsis-end" />);
//     }

//     // always render last page
//     items.push(renderPage(totalPages));

//     return <Pagination style={{ justifyContent: 'center' }}>{items}</Pagination>;

//     ////////////////////////////without dots////////////////////////////////

//     // const items = [];

//     // for (let number = 1; number <= totalPages; number++) {
//     //     items.push(
//     //         <Pagination.Item
//     //             key={number}
//     //             active={number === page}
//     //             onClick={() => onSelect(number)}
//     //         >
//     //             {number}
//     //         </Pagination.Item>
//     //     )
//     // }

//     // return (
//     //     <Pagination style={{ justifyContent: 'center' }}>
//     //         {items}
//     //     </Pagination>
//     // );
// };


// export default CustomPagination;



