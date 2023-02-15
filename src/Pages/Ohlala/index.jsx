import '../../Globalstyle.css'
import '../../FontProviders.css'
import { Main, Header, Div } from './style'

import fita01 from '../../assets/Fitapng.png'
import bandeirola from '../../assets/Bandeirapng.png'
import balloon from '../../assets/Balaopng.png'


function Ohlala() {
    return (
        <>
            <Main>
                <Header>
                    <img src={fita01} alt="fita01" id='fit01' />
                    <img src={bandeirola} alt="bandeirola" />
                    <img src={fita01} alt="fita02" id='fit02' />
                    <img src={fita01} alt="fita03" id='fit03' />
                    <img src={fita01} alt="fita04" id='fit04' />
                    <img src={fita01} alt="fita05" id='fit05' />
                    <img src={balloon} alt="balloon" id='balloon' />
                </Header>
                <Div>
                    <div id='box'></div>
                    <div className='teste'>
                        <h3>YOU'RE INVITED TO</h3>
                        <h1>CAKE <br />
                        PARTY</h1>
                        <small>20 JANUARY, 2024 <br />
                        2PM TO 6PM
                        </small>
                        <br /><br />
                        <small>
                            123 Anywhere St.Any City <br />
                            RSVP to: +123-456-7890
                        </small>
                    </div>
                </Div>
            </Main>
        </>
    )
}
export default Ohlala;