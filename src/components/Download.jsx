import React from "react";

import "./styles/Download.css";

function Download() {
  return (
    <section className="download">
      <div className="container">
        <h2>Clipboard for iOS and Mac OS</h2>
        <p>
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
        <button className="button button--ios">Download for iOS</button>
        <button className="button button--mac"> Download for Mac</button>
      </div>
    </section>
  );
}

export default Download;
