/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

// Mock async component for testing
jest.mock("./page", () => ({
  __esModule: true,
  default: ({ params }: { params: { slug: string } }) => <h1>Slug: {params.slug}</h1>
}));

it("App Router: Works with dynamic route segments", () => {
  render(<Page params={{ slug: "Test" }} searchParams={{}} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});
