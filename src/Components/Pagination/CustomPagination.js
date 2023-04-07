import "./CustomPagination.css";

const CustomPagination = ({ currentPage, totalPages, setCurrentPage }) => {
    const totalNumbers = 5;
    const pageNeighbours = 2;

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const getRange = (from, to) => {
        const range = [];

        for (let i = from; i <= to; i++) {
            range.push(i);
        }

        return range;
    };

    const getPages = () => {
        if (totalPages <= totalNumbers) {
            return getRange(1, totalPages);
        }

        const leftBound = Math.max(1, currentPage - pageNeighbours);
        const rightBound = Math.min(totalPages, currentPage + pageNeighbours);
        const firstPage = 1;
        const lastPage = totalPages;

        const leftDots = leftBound > 2 ? ["..."] : [];
        const rightDots = rightBound < totalPages - 1 ? ["..."] : [];

        const pagesToShow = getRange(leftBound, rightBound);

        const pages = [...leftDots, ...pagesToShow, ...rightDots];

        if (pages[0] !== firstPage) {
            pages.unshift(firstPage);
        }

        if (pages[pages.length - 1] !== lastPage) {
            pages.push(lastPage);
        }

        return pages;
    };

    const pages = getPages();

    return (
        <div className="pagination-container">
            <nav>
                <ul className="pagination">
                    <li
                        className={`page-item${currentPage === 1 ? " disabled" : ""}`}
                        onClick={() => handleClick(currentPage - 1)}
                    >
                        <span className="page-link">Previous</span>
                    </li>
                    {pages.map((page, index) => {
                        if (page === "...") {
                            return (
                                <li key={index} className="page-item disabled">
                                    <span className="page-link">&hellip;</span>
                                </li>
                            );
                        }

                        return (
                            <li
                                key={index}
                                className={`page-item${page === currentPage ? " active" : ""}`}
                                onClick={() => handleClick(page)}
                            >
                                <span className="page-link">{page}</span>
                            </li>
                        );
                    })}
                    <li
                        className={`page-item${currentPage === totalPages ? " disabled" : ""}`}
                        onClick={() => handleClick(currentPage + 1)}
                    >
                        <span className="page-link">Next</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default CustomPagination;