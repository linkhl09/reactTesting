import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from '../like';

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like labelActive="Active" labelInactive="Inactive" />,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Like component", () => {
  it("Like buttom starts with 0", () => {
    const valor_likes = container.querySelector("p");
    expect(valor_likes.textContent).toBe("Likes: 0");
  });

  it("When buttom Like is pressed, it increases by 1", () => {
    const LikeBtn = container.querySelector("#increment");
    const valor_likes = container.querySelector("p");
    act(() => {
        LikeBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(valor_likes.textContent).toBe("Likes: 1");
  });

  it("When buttom Dislike is pressed, it decreases by 1", () => {
    const DislikeBtn = container.querySelector("#decrement");
    const valor_likes = container.querySelector("p");
    act(() => {
        DislikeBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(valor_likes.textContent).toBe("Likes: -1");
  });


});