import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renderds post if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        { id: "p1", title: "Post 1" },
        { id: "p2", title: "Post 2" },
      ],
    });

    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
