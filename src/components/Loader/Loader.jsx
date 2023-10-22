
import { css } from '@emotion/react'
import HashLoader from 'react-spinners/HashLoader'
import './Loader.css'

const Loader = () => {
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
`;

    return (
        <>
            <div className="loaderContainerMobile">
                <HashLoader color='#247182' css={override} size={60} />
            </div>
            <div className="loaderContainer">
                <HashLoader color='#247182' css={override} size={150} />
            </div>
        </>
    )
}

export default Loader
