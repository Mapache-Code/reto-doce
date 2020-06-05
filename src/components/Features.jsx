import React from "react";

import "./styles/Features.css";
import computer from "../images/image-computer.png";
function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2>Keep track of your snippets</h2>
        <p>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
        <div className="features__itemsBox">
          <img width="315" height="245" src={computer} alt="Computer" />
          <div>
            <div className="features__item">
              <h3>Quick Search</h3>
              <p>
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div className="features__item">
              <h3>iCloud Sync</h3>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </div>
            <div className="features__item">
              <h3>Complete History</h3>
              <p>
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
