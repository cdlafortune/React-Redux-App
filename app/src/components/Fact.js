import React, {useEffect} from "react";
import {connect} from "react-redux";
import { getFact } from "../actions";


const Fact = (props) => {
    useEffect(() => {
        getFact();
    });

    if (props.isFetching) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <p>{props.fact}</p>
            <button onClick={() => props.getFact()}>New Fact</button>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        fact: state.fact,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getFact})(Fact);