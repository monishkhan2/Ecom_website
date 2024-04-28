import React from 'react'
import Breadcrum from './Breadcrum'

export default function About() {
    return (
        <>
             <Breadcrum title="About"/>
             <div className="container-xxl py-2">
                <div className="container">
                    <div className="row g-4 align-items-end mb-4">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid rounded" src="img/shop1.jpg" style={{ height: 500, width: "100%" }} />
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">

                            <h1 className="mb-4">We Help Our Customers in Case of Refund, Return and Other</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                                eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                            </p>
                            <div className="border rounded p-4">
                                <nav>
                                    <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                        <button className="nav-link fw-semi-bold active" id="nav-story-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-story" type="button" role="tab" aria-controls="nav-story"
                                            aria-selected="true">Refund</button>
                                        <button className="nav-link fw-semi-bold" id="nav-mission-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-mission" type="button" role="tab" aria-controls="nav-mission"
                                            aria-selected="false">Return</button>
                                        <button className="nav-link fw-semi-bold" id="nav-vision-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-vision" type="button" role="tab" aria-controls="nav-vision"
                                            aria-selected="false">Shipping</button>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-story" role="tabpanel"
                                        aria-labelledby="nav-story-tab">
                                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                            amet diam et eos labore.</p>
                                        <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                                            Clita erat ipsum et lorem et sit</p>
                                    </div>
                                    <div className="tab-pane fade" id="nav-mission" role="tabpanel"
                                        aria-labelledby="nav-mission-tab">
                                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                            amet diam et eos labore.</p>
                                        <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                                            Clita erat ipsum et lorem et sit</p>
                                    </div>
                                    <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                            amet diam et eos labore.</p>
                                        <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                                            Clita erat ipsum et lorem et sit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="row g-4">
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="h-100">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                            <i className="fa fa-times text-white"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h4>Fee Shipping Available</h4>
                                            <span>Fee Shipping if total cart balance is above 1000</span>
                                        </div>
                                        <div className="border-end d-none d-lg-block"></div>
                                    </div>
                                    <div className="border-bottom mt-4 d-block d-lg-none"></div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="h-100">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                            <i className="fa fa-users text-white"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h4>100% Original Products</h4>
                                            <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                        </div>
                                        <div className="border-end d-none d-lg-block"></div>
                                    </div>
                                    <div className="border-bottom mt-4 d-block d-lg-none"></div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="h-100">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                            <i className="fa fa-phone text-white"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h4>24/7 Customer Supports</h4>
                                            <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team Start --> */}
    <div className="container-xxl py-2">
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Team</p>
                <h1 className=" mb-5">Exclusive Team</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item">
                        <img className="img-fluid rounded" src="img/team-1.jpg" alt=""/>
                        <div className="team-text">
                            <h4 className="mb-0">Kate Winslet</h4>
                            <div className="team-social d-flex">
                                <a className="btn btn-square rounded-circle mx-1" href=""><i
                                        className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square rounded-circle mx-1" href=""><i
                                        className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                        <img className="img-fluid rounded" src="img/team-2.jpg" alt=""/>
                        <div className="team-text">
                            <h4 className="mb-0">Jac Jacson</h4>
                            <div className="team-social d-flex">
                                <a className="btn btn-square rounded-circle mx-1" href=""><i
                                        className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square rounded-circle mx-1" href=""><i
                                        className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item">
                        <img className="img-fluid rounded" src="img/team-3.jpg" alt=""/>
                        <div className="team-text">
                            <h4 className="mb-0">Doris Jordan</h4>
                            <div className="team-social d-flex">
                                <a className="btn btn-square rounded-circle mx-1" href=""><i
                                        className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square rounded-circle mx-1" href=""><i
                                        className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End --> */}

        </>
    )
}
