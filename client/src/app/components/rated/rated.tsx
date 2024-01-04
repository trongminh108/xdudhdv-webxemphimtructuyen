import './rated.scss';

function Rated({ rated }: { rated: number }) {
    const stars = 5;
    const integer = Math.floor(rated);
    const decimal = (rated - integer) * 100;
    const rest = stars - Math.ceil(rated);

    return (
        <div className="ratedContainer">
            <div className="starsContainer">
                {Array.from({ length: integer }, (_, index) => (
                    <div className="star full" key={index}>
                        ⭐
                    </div>
                ))}
                {decimal !== 0 && (
                    <div
                        className="star"
                        style={{
                            backgroundImage: `linear-gradient(to right, yellow ${decimal}%, black 0%)`,
                        }}
                    >
                        ⭐
                    </div>
                )}

                {Array.from({ length: rest }, (_, index) => (
                    <div className="star empty" key={index}>
                        ⭐
                    </div>
                ))}
            </div>

            <div className="rated">
                {rated}/{stars}
            </div>
        </div>
    );
}

export default Rated;
