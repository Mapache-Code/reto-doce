import React from "react";

import "./styles/Tools.css";
import blacklist from "../images/icon-blacklist.svg";
import text from "../images/icon-text.svg";
import preview from "../images/icon-preview.svg";
function Tools() {
  return (
    <section className="tools">
      <div className="container">
        <h2>Supercharge your workflow</h2>
        <p>We’ve got the tools to boost your productivity.</p>
        <div className="tools__itemsBox">
          <div className="tools__item">
            <img src={blacklist} alt="Icon BlackList" />
            <h3>Create blacklists</h3>
            <p>
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </div>
          <div className="tools__item">
            <img src={text} alt="Icon Text" />
            <h3>Plain text snippets</h3>
            <p>
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          <div className="tools__item">
            <img src={preview} alt="Icon Preview" />
            <h3>Sneak preview</h3>
            <p>
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;
