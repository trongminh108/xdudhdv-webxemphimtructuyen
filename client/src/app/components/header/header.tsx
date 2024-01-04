import './header.scss';

import Image from 'next/image';

function Header() {
    return (
        <div className="header">
            <div className="logoHeaderLeftDiv">
                <Image
                    id={'logoHeaderLeft'}
                    alt="film poster"
                    className="logoHeaderLeft"
                    src={'/../../../../images/LogoTGex.png'}
                    width={150}
                    height={150}
                />
            </div>
            <div>
                <h1 className="text-white">T - Gex Films</h1>
            </div>
            <div className="logoHeaderRight">
                <Image
                    id={'logoHeaderRight'}
                    alt="film poster"
                    className="logoHeaderRight"
                    src={'/../../../../images/LogoTGex.png'}
                    width={150}
                    height={150}
                />
            </div>
        </div>
    );
}

export default Header;
