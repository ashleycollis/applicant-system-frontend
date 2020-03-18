import React, { Component } from 'react'
import ListCohorts from './ListCohorts'

export default class LandingContent extends Component {
    render() {
        return (
            <>
            <div className="row">
                <div className="col-md-6">
                <p>Inclusion is a technology non-profit that is providing tuition free access to our Career Accelerator Program (CAP).</p>
                <p>Our CAP program focuses on skills review, technical, and career prep. In this 6 week part-time intensive we will integrate your previous knowledge of coding and focus on building projects for your portfolio so that you’re better prepared for your technical interviews. This course is ideal for bootcamp/CS grads and self-learners.</p>
                <p>At Inclusion, our programs are not just about coding. Each student will receive a mentor from an industry leading company,  and have access to networking opportunities, and lunch and learns. If you’re a dedicated learner looking to level up, then this is the course for you.</p>
                <h4>Be a part of the next cohort!</h4>
                <ListCohorts />
                </div>
                <div className="col-md-6">
                    <img src="../images/lp-header.png" alt=""/>
                    <ul className="mt-3">
                        <li>Curriculum & Instructors</li>
                        <li>Student Perks</li>
                        <li>FAQ</li>
                        <li>Program Info & Requirements</li>
                    </ul>
                </div>
            </div>
                <h2>Program info and requirements</h2>
            <div className="row">
                <div className="col-md-6">
                    <p>Application Deadline: Jan 10th, 2020</p>
                    <p>Course Dates: Jan 27th – Mar 6th, 2020</p>
                    <p>Class Days: Monday, Wednesday, & Friday</p>
                    <p>Class Time: 6:00pm – 9:00pm</p>
                    <p>Ages: 18 and older</p>
                    <p>Location: Near Union Square, NY</p>
                    <p>Cost: $7,500 – Free thanks to our donors</p>
                    <p>Commitment Fee: $55 Non-refundable</p>
                    <p>Contact Info: 646.598.4625 or contact@incl.us</p>

                </div>
                <div className="col-md-6">
                    <h4>Requirements:</h4>
                    <p>Experience using APIs</p>
                    <p>Proficient in JavaScript and Node.js</p>
                    <p>Have an income of under $40,000</p>
                    <p>Be a resident of NY or the tri-state area</p>
                    <p>Unemployed or underemployed</p>
                    <p>Be able to commit to our program</p>
                </div>
            </div>
            </>
        )
    }
}
