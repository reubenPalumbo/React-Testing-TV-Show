import React from "react";
import { render, screen, fireEvent, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { fetchShow as mockFetchShow } from "./api/fetchShow";
import App from "./App";
jest.mock("./api/fetchShow");

const fakeData = {
  data: {
    _embedded: {
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
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
          },
          name: "Chapter One: The Vanishing of Will Byers",
          number: 1,
          runtime: 60,
          season: 1,
          summary:
            "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
          type: "regular",
          url:
            "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
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
              "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg",
          },
          name: "Chapter Two: The Weirdo on Maple Street",
          number: 2,
          runtime: 60,
          season: 1,
          summary:
            "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
          type: "regular",
          url:
            "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
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
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg",
          },
          name: "Chapter Three: Holly, Jolly",
          number: 3,
          runtime: 60,
          season: 1,
          summary:
            "<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",
          type: "regular",
          url:
            "http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
        },
      ],
    },
    _links: {
      previousepisode: {
        href: "http://api.tvmaze.com/episodes/1576476",
      },
      self: {
        href: "http://api.tvmaze.com/shows/2993",
      },
    },
    externals: {
      imdb: "tt4574334",
      thetvdb: 305288,
      tvrage: 48493,
    },
    genres: ["Drama", "Fantasy", "Science-Fiction"],
    id: 2993,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
    },
    language: "English",
    name: "Stranger Things",
    network: null,
    officialSite: "https://www.netflix.com/title/80057281",
    premiered: "2016-07-15",
    rating: {
      average: 8.7,
    },
    runtime: 60,
    schedule: {
      days: ["Thursday"],
      time: "",
    },
    status: "Running",
    summary:
      "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    type: "Scripted",
    updated: 1599468817,

    webChannel: {
      country: null,
      id: 1,
      name: "Netflix",
    },
    weight: 98,
  },
};
describe("App Tests", () => {
  test("renders without errors", async () => {
    mockFetchShow.mockResolvedValueOnce(fakeData);

    render(<App />);

    const select = await screen.findByText(/select a season/i);
    userEvent.click(select);
    userEvent.click(screen.getByText(/season 1/i));

    await wait();
    expect(screen.queryAllByTestId("ep")).toHaveLength(3);
  });
});
