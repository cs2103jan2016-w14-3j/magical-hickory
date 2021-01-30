import React from "react";
import _ from "lodash";

import { htmlToReact, withPrefix } from "../utils";

export default class SectionOverview extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    return (
      <section
        id={_.get(section, "section_id", null)}
        className={
          "block overview-block bg-" +
          _.get(section, "background", null) +
          " outer"
        }
      >
        <div className="review-block">
          {_.get(section, "subtitle", null) && (
            <p className="block-subtitle">
              {htmlToReact(_.get(section, "subtitle", null))}
            </p>
          )}
          {_.get(section, "title", null) && (
            <h2 className="block-title">{_.get(section, "title", null)}</h2>
          )}
        </div>
        {_.get(section, "reviews", null) && (
          <div className="inner">
            <div className="grid">
              {_.map(_.get(section, "reviews", null), (review, review_idx) => (
                // <blockquote key={review_idx} className="cell overview">
                //   <div className="card">
                //     <p className="overview-text">
                //       {htmlToReact(_.get(review, "content", null))}
                //     </p>
                //     <footer className="overview-footer">
                //       {_.get(review, "avatar", null) && (
                //         <img
                //           className="overview-avatar"
                //           src={withPrefix(_.get(review, "avatar", null))}
                //           alt={_.get(review, "author", null)}
                //         />
                //       )}
                //       <cite className="overview-author">
                //         {_.get(review, "author", null)}
                //       </cite>
                //     </footer>
                //   </div>
                // </blockquote>
                <div className="cell overview">
                  {_.get(review, "background", null) && (
                    <img
                      className="overview-avatar"
                      src={withPrefix(_.get(review, "background", null))}
                    />
                  )}

                  <footer className="overview-footer">
                    <p className="overview-text">
                      {htmlToReact(_.get(review, "title", null))}
                    </p>
                    <p className="overview-subtitle">
                      {htmlToReact(_.get(review, "content", null))}
                    </p>
                  </footer>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }
}
