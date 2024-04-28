import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>

            <div className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Address</h5>
                            <p className="mb-2"><i className="fa fa-map-marker me-3"></i>C34,Shaheenbagh,Delhi</p>
                            <p className="mb-2"><i className="fa fa-phone me-3"></i><a href="tel:7521838398" className="text-light" target="/_blank" rel="noreferrer">+91-7521838398</a></p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i><a href="mailto:monishk043@gmail.com" className="text-light" target="/_blank" rel="noreferrer">monishk043@gmail.com</a></p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#" target="/_blank" rel="noreferrer"><i
                                    className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#" target="/_blank" rel="noreferrer"><i
                                    className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#" target="/_blank" rel="noreferrer"><i
                                    className="fab fa-youtube"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#" target="/_blank" rel="noreferrer"><i
                                    className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Quick Links</h5>
                            <Link className="btn btn-link" to="/">Home</Link>
                            <Link className="btn btn-link" to="/about">About</Link>
                            <Link className="btn btn-link" to="/shop">Shop</Link>
                            <Link className="btn btn-link" to="/contact">Contact</Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Policies</h5>
                            <Link className="btn btn-link" to="/Privacy Policy">Privacy Policy</Link>
                            <Link className="btn btn-link" to="/Terms & Condition">Terms & Condition</Link>
                            <Link className="btn btn-link" to="/Refund Policy">Refund Policy</Link>
                            <Link className="btn btn-link" to="/FAQ">FAQ</Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Newsletter</h5>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative w-100">
                                <input className="form-control bg-white border-0 w-100 py-3 ps-4 pe-5" type="text"
                                    placeholder="Your email" />
                                <button type="button"
                                    className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
