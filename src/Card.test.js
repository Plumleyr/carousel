import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon";

it("should render without crashing", () => {
  render(
    <Card
      caption={TEST_IMAGES[0].caption}
      src={TEST_IMAGES[0].src}
      totalNum={1}
      currNum={1}
    />
  );
});

it("should match snapshot", () => {
  const { asFragment } = render(
    <Card
      caption={TEST_IMAGES[0].caption}
      src={TEST_IMAGES[0].src}
      totalNum={1}
      currNum={1}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
