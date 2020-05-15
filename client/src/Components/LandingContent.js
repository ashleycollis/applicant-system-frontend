import React, { Component } from 'react'
import ListCohorts from './ListCohorts'

export default class LandingContent extends Component {
    render() {
        return (
            <>
                <div className="page-header">
                    <h1>Improve your skills & launch your career in tech!</h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>Inclusion is a technology non-profit that is providing tuition free access to our Career Accelerator Program (CAP).</p>
                        <p>Our CAP program focuses on skills review, technical, and career prep. In this 6 week part-time intensive we will integrate your previous knowledge of coding and focus on building projects for your portfolio so that you’re better prepared for your technical interviews. This course is ideal for bootcamp/CS grads and self-learners.</p>
                        <p>At Inclusion, our programs are not just about coding. Each student will receive a mentor from an industry leading company,  and have access to networking opportunities, and lunch and learns. If you’re a dedicated learner looking to level up, then this is the course for you.</p>
                        <h4>Be a part of the next cohort!</h4>
                        <ListCohorts />
                    </div>
                    <div className="col-md-6">
                        <img src="../images/lp-header.png" alt="" />
                        <ul className="mt-3">
                            <li>Curriculum & Instructors</li>
                            <li>Student Perks</li>
                            <li>FAQ</li>
                            <li>Program Info & Requirements</li>
                        </ul>
                    </div>
                </div>
                <hr className="style15" />
                <h4 className="text-center mt-3">Program info and requirements</h4>
                <div className="row">
                    <div className="col-md-6">
                        <p className="my-0"><strong>Application Deadline</strong>: Jan 10th, 2020</p>
                        <p className="my-0"><strong>Course Dates</strong>: Jan 27th – Mar 6th, 2020</p>
                        <p className="my-0"><strong>Class Days</strong>: Monday, Wednesday, & Friday</p>
                        <p className="my-0"><strong>Class Time</strong>: 6:00pm – 9:00pm</p>
                        <p className="my-0"><strong>Ages</strong>: 18 and older</p>
                        <p className="my-0"><strong>Location</strong>: Near Union Square, NY</p>
                        <p className="my-0"><strong>Cost</strong>: $7,500 – Free thanks to our donors</p>
                        <p className="my-0"><strong>Commitment Fee</strong>: $55 Non-refundable</p>
                        <p className="my-0"><strong>Contact Info</strong>: 646.598.4625 or contact@incl.us</p>

                    </div>
                    <div className="col-md-6">
                        <ul>
                            <h4>Requirements:</h4>
                            <li>Experience using APIs</li>
                            <li>Proficient in JavaScript and Node.js</li>
                            <li>Have an income of under $40,000</li>
                            <li>Be a resident of NY or the tri-state area</li>
                            <li>Unemployed or underemployed</li>
                            <li>Be able to commit to our program</li>
                        </ul>
                    </div>
                </div>
                <hr className="style15" />
                <h4 className="text-center mt-4">Curriculum and instructors</h4>
                <div className="row">
                    <div className="col-md-6">
                        <p>Our curriculum is designed from the ground up to prepare you to filling those missing skill gaps and go further in your technical interviews. Our portfolio projects are not your typical boiler plate projects, they are designed to highlight your best work.</p>
                        <ul>
                            <li>CI/CD</li>
                            <li>Dev Ops</li>
                            <li>Headshots</li>
                            <li>Frontend OOP</li>
                            <li>Resume Review</li>
                            <li>Portfolio Projects</li>
                            <li>Lunch and Learns</li>
                            <li>Frontend Performance</li>
                            <li>Mindfulness & Mindset</li>
                            <li>Technical Interview Prep</li>
                            <li>Unit & AcceptanceTesting</li>
                            <li>Data Structures & Algorithms</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <p>Meet your world class instructors with years of both industry and teaching experience.</p>
                        <figure className="figure text-center mr-5">
                            <img className="profile" src="../images/isaac.png" alt="Isaac" />
                            <h5>Isaac Kang</h5>
                            <figcaption className="figure-caption">Software Engineer at Consensys</figcaption>
                        </figure>
                        <figure className="figure text-center">
                            <img className="profile" src="../images/fizal.png" alt="Fizal" />
                            <h5>Fizal Sarif</h5>
                            <figcaption className="figure-caption">Engineer at Rent the runway</figcaption>
                        </figure>
                        <button className="btn btn-success btn-block">Apply to Inclusion now!</button>
                    </div>

                </div>
                <hr className="style15" />
                <h4 className="text-center mt-4">Testimonials</h4>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <img className="centered-img" src="../images/kam.png" alt="" />
                        <blockquote className="blockquote">
                            <p>I received an offer an industry leading tech company and could not have done this without the Inclusion CAP Program. The fact that I did this program impressed them. During the onsite technical interviews, they had a question about async requests, which I had a lot of practice with during the projects we built in class.</p>
                            <h6 className="text-center">Kwasi A.</h6>
                        </blockquote>
                    </div>
                </div>

            </>
        )
    }
}
