import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <>
                <footer>
                    <div className="container mt-3">
                        <div className="row pb-3">
                            <div className="col-4 mt-3">
                                <img src="../images/inclusion-logo-retina.png" alt="Inclusion" />
                                <p className="mt-3 text-light">Inclusion is a registered 501(c)3</p>
                                <p className="text-light">EIN: 81-2098422</p>
                                <p className="text-light">35-37 36th St,</p>
                                <p className="text-light">Astoria, NY 11106</p>
                                <p className="text-light">Tel: <a href="tel:1-646-598-4625">+1(646)598-4625</a></p>
                            </div>
                            <div className="col-4 mt-3">
                                <ul className=" bottom-links mt-3">
                                    <li className="mt-3"><a href="#">Apply</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Sponsorship opportunities</a></li>
                                    <li><a href="#">Volunteer</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                    <li><a href="#">Terms of service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}