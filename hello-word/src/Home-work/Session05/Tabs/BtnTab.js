import React, { useState } from "react";
const tabs = [
  {
    title: "History",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
  },
  {
    title: "Approach",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
  },
  {
    title: "Culture",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.",
  },
  {
    title: "Method",
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
  },
];

export default function BtnTab() {
  const [about, setAbout] = useState(0);

  return (
    <div className="container">
      <h1>Button tab</h1>
      <div className="tab-content">
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => setAbout(index)}
              className={about === index ? "title  tt-click" : "title"}
            >
              {tab.title}
            </li>
          ))}
        </ul>
        <div>
          {tabs.map((tab, index) => (
            <span key={index} className={about === index ? "text-content" : "text-hind"}>
              {tab.description}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
