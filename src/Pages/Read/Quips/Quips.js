import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router";
import React, { useEffect, useState } from "react";

import Breadcrumb from "../../../Components/Structural/Breadcrumb/Breadcrumb";
import QuipButton from "../../../Components/Buttons/QuipButton/QuipButton";
import QuipsDisplay from "./QuipsDisplay/QuipsDisplay";
import PageTitle from "../../../Components/Structural/PageTitle/PageTitle";

import "./Quips.scss";

/**
 * @function Quips
 * @description The main parent component for all of the screens and components
 * that are in the Quips tab.
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 2.0.0
 * @component
 * @example
 * <Quips />
 */
export default function Quips() {
  const [quips, setQuips] = useState([]);
  const [latestQuip, setLatestQuip] = useState({});

  useEffect(
    /**
     * @function Quips~useEffect~getQuips
     * @description A synchronous wrapper for fetchQuips and getLatestQuip()
     */
    function getQuips() {
      fetchQuips();
      getLatestQuip();
    },
    []
  );

  /**
   * @async
   * @function Quips~fetchQuips
   * @description Fetches All of the quips from the drupal backend and adds
   * them to the state variable in this component.
   * @author Alexander Burdiss
   * @since 5/27/21
   * @version 1.1.0
   */
  function fetchQuips() {
    fetch("https://drupal.bedtimeproject.dev/rest/views/quips")
      .then((resp) => resp.json())
      .then((data) => setQuips(data));
  }

  function getLatestQuip() {
    fetch("https://drupal.bedtimeproject.dev/rest/views/quips/latest")
      .then((resp) => resp.json())
      .then((data) => setLatestQuip(data[0]))
      .catch(() => {});
  }

  return (
    <Switch>
      <Route exact path="/read/quips">
        <Helmet>
          <title>Quips | The Bedtime Project</title>
        </Helmet>
        <PageTitle>Quips</PageTitle>
        <div className="Limerick-Display-Container">
          {quips.map((quip, index) => {
            return (
              <QuipButton key={index} link={`/read/quips/${quip.title}`}>
                {quip.title}
              </QuipButton>
            );
          })}
        </div>
      </Route>

      <Route exact path="/read/quips/latest">
        <Helmet>
          <title>Latest Quip | The Bedtime Project</title>
        </Helmet>
        <Breadcrumb link="/read/quips/">Quips</Breadcrumb>
        <QuipsDisplay quip={latestQuip} />
      </Route>

      {quips.map((quip, index) => {
        return (
          <Route key={index} path={`/read/quips/${quip.title}`}>
            <Helmet>
              <title>{quip.title} | The Bedtime Project</title>
            </Helmet>
            <Breadcrumb link="/read/quips/">Quips</Breadcrumb>
            <QuipsDisplay quip={quip} />
          </Route>
        );
      })}
    </Switch>
  );
}
