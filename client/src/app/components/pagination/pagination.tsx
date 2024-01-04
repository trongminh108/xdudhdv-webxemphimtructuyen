import { Button, Container } from 'react-bootstrap';
import './pagination.scss';

interface Paginate {
    pagination: {
        page: number;
        limit: number;
        totalElements: number;
    };
    onPageChange: any;
}

function Pagination({ pagination, onPageChange }: Paginate) {
    const { page, limit, totalElements } = pagination;
    const totalPages = Math.ceil(totalElements / limit);
    const lstBtns = [page - 1, page, page + 1];
    let btnPos = ' btn-left';

    function handleOnClick(newPage: any): undefined {
        if (onPageChange) onPageChange(newPage);
    }

    return (
        <Container
            className="paginationContainer 
            d-flex 
            justify-content-center
            align-items-center"
        >
            <button
                disabled={page <= 1}
                onClick={() => handleOnClick(page - 1)}
                className="btn-paginate btn-prev"
            >
                Prev
            </button>
            {page > 1 && page - 1 != 1 && (
                <button
                    className={'btn-paginate btn-num' + btnPos}
                    onClick={() => handleOnClick(1)}
                    disabled={page == 1}
                >
                    1
                </button>
            )}
            {lstBtns[0] - 1 > 1 && (
                <button className={'btn-paginate btn-num' + btnPos} disabled>
                    ...
                </button>
            )}
            {lstBtns.map((btn) => {
                if (btn >= 1 && btn <= totalPages) {
                    if (btn == page) {
                        btnPos = ' btn-right';
                        return (
                            <button
                                key={btn}
                                className="btn-paginate btn-num btn-center"
                                disabled
                            >
                                {btn}
                            </button>
                        );
                    }
                    return (
                        <button
                            key={btn}
                            className={'btn-paginate btn-num' + btnPos}
                            onClick={() => handleOnClick(btn)}
                        >
                            {btn}
                        </button>
                    );
                }
            })}
            {lstBtns[2] + 1 < totalPages && (
                <button className={'btn-paginate btn-num' + btnPos} disabled>
                    ...
                </button>
            )}
            {page < totalPages && page + 1 != totalPages && (
                <button
                    className={'btn-paginate btn-num' + btnPos}
                    onClick={() => handleOnClick(totalPages)}
                    disabled={page == totalPages}
                >
                    {totalPages}
                </button>
            )}
            <button
                disabled={page >= totalPages}
                onClick={() => handleOnClick(page + 1)}
                className="btn-paginate btn-next"
            >
                Next
            </button>
        </Container>
    );
}

export default Pagination;
