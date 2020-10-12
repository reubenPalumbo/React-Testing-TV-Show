import React from "react";
import { render, screen } from "@testing-library/react";

import Episodes from "./Episodes";

describe("Episodes Tests", () => {
  test("renders without errors", () => {
    render(<Episodes episodes={fakeData.episodes} />);

    expect(screen.queryAllByTestId("ep")).toHaveLength(3);
  });
});

const fakeData = {
  episodes: [
    {
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/553946",
        },
      },
      airdate: "2016-07-15",
      airstamp: "2016-07-15T12:00:00+00:00",
      airtime: "",
      id: 553946,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/16",
      },
      name: "Chapter One: The Vanishing of Will Byers",
      number: 1,
      runtime: 60,
      season: 1,
      summary:
        "<p>A young boy mysteriously disappears, and his panicked mother demanolice find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girlt.</p>",
      type: "regular",
      url:
        "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-thf-will-byers",
    },
    {
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/578663",
        },
      },
      airdate: "2016-07-15",
      airstamp: "2016-07-15T12:00:00+00:00",
      airtime: "",
      id: 578663,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/72/18",
      },
      name: "Chapter Two: The Weirdo on Maple Street",
      number: 2,
      runtime: 60,
      season: 1,
      summary:
        "<p>While the search for the missing Will continues, Joyce tells Jim ahe apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after halizes that she knows what happened to Will.</p>",
      type: "regular",
      url:
        "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-thaple-street",
    },
    {
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/578664",
        },
      },
      airdate: "2016-07-15",
      airstamp: "2016-07-15T12:00:00+00:00",
      airtime: "",
      id: 578664,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168920",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/16",
      },
      name: "Chapter Three: Holly, Jolly",
      number: 3,
      runtime: 60,
      season: 1,
      summary:
        "<p>While Nancy looks for a missing Barbara and realizes that Jonathann the last person to see her, Mike and his friends go out with Jane to find the missing Will. Mearacks Will to the lab.</p>",
      type: "regular",
      url:
        "http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-",
    },
  ],
};
