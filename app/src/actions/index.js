import axios from "axios";

const headers = {
    Accept: "Application/json"
};

export const getFact = () => dispatch => {
    dispatch({ type: "FETCHING_FACT_START" });
    axios
      .get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1", { headers })
      .then(res => {
        console.log(res);
        dispatch({ type: "FETCHING_FACT_SUCCESS", payload: res.data.text });
      })
      .catch(err => {
        console.log(err);
      });
  };