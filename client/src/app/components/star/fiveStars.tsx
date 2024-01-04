import Star from './star';

function FiveStars() {
    return (
        <div
            className="fiveStar"
            style={{
                display: 'flex',
            }}
        >
            <Star></Star>
            {/* <Star></Star>
            <Star></Star>
            <Star></Star>
            <Star></Star> */}
        </div>
    );
}

export default FiveStars;
