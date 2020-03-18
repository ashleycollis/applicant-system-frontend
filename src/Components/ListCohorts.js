import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ListCohorts extends Component {

    state = {
        cohorts: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/cohorts')
            .then(res => res.json())
            .then(cohorts => this.setState({ cohorts }))
    }

    listCohorts = () => {
        return this.state.cohorts.map(cohort => {
            return (
                <li key={cohort.id}><Link to={{ pathname: "/form-create", state: { cohort_id: cohort.id } }}>{cohort.cohort_nickname}</Link></li>
            )
        });
    }

    render() {
        return (
            <ul>
                {this.listCohorts()}
            </ul>
        )
    }
}
