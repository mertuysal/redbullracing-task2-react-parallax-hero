import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ArticleCard from "./ArticleCard";
import '@testing-library/jest-dom';

describe("ArticleCard Component", () => {
    const defaultProps = {
      backgroundImage: "https://example.com/image.jpg",
      title: "Singapore Grand Prix 2024",
      tag: "Event",
      readTime: "5 min read",
      playButtonSvg: "https://example.com/play-icon.svg"
    };
  
    test("renders component with correct props", () => {
      render(<ArticleCard {...defaultProps} />);
  
      // Verify title is rendered
      expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  
      // Verify tag is rendered
      expect(screen.getByText(defaultProps.tag)).toBeInTheDocument();
  
      // Verify read time is rendered
      expect(screen.getByText(defaultProps.readTime)).toBeInTheDocument();
  
      // Verify play button image is rendered with the correct src and alt
      const playButtonImage = screen.getByAltText("Play Button");
      expect(playButtonImage).toBeInTheDocument();
      expect(playButtonImage).toHaveAttribute("src", defaultProps.playButtonSvg);
    });
  
    test("applies background image style correctly", () => {
      render(<ArticleCard {...defaultProps} />);
  
      const cardElement = screen.getByRole("button");
      expect(cardElement).toHaveStyle(`background-image: url(${defaultProps.backgroundImage})`);
    });
  
    test("opens the correct URL on card click", () => {
      render(<ArticleCard {...defaultProps} />);
  
      // Mock the window.open function
      const originalOpen = window.open;
      window.open = jest.fn();
  
      // Trigger the click event
      const cardElement = screen.getByRole("button");
      fireEvent.click(cardElement);
  
      expect(window.open).toHaveBeenCalledWith(
        "https://www.redbullracing.com/int-en/races/singapore-grand-prix-2024",
        "_blank"
      );
  
      // Restore the original window.open function
      window.open = originalOpen;
    });
  
    test("renders correctly with missing or empty title, tag, or readTime props", () => {
      const { rerender } = render(
        <ArticleCard
          backgroundImage={defaultProps.backgroundImage}
          title=""
          tag=""
          readTime=""
          playButtonSvg={defaultProps.playButtonSvg}
        />
      );
  
      // Check that an empty title does not break the component
      expect(screen.getByRole("button")).toBeInTheDocument();
  
      // Verify no text is rendered for title, tag, and readTime
      expect(screen.queryByText(defaultProps.title)).not.toBeInTheDocument();
      expect(screen.queryByText(defaultProps.tag)).not.toBeInTheDocument();
      expect(screen.queryByText(defaultProps.readTime)).not.toBeInTheDocument();
  
      // Re-render with missing props entirely
      rerender(
        <ArticleCard
          backgroundImage={defaultProps.backgroundImage}
          playButtonSvg={defaultProps.playButtonSvg}
        />
      );
  
      // Check that component still renders with missing props
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  
    test("play button renders correctly with SVG icon", () => {
      render(<ArticleCard {...defaultProps} />);
  
      // Verify that the play button image is rendered with the provided SVG URL
      const playButtonImage = screen.getByAltText("Play Button");
      expect(playButtonImage).toBeInTheDocument();
      expect(playButtonImage).toHaveAttribute("src", defaultProps.playButtonSvg);
      expect(playButtonImage).toHaveStyle("width: 12.42px; height: 14.18px;");
    });
  
    test("does not open a new window if handleCardClick is not triggered", () => {
      render(<ArticleCard {...defaultProps} />);
  
      // Mock the window.open function
      const originalOpen = window.open;
      window.open = jest.fn();
  
      // Ensure window.open has not been called without clicking
      expect(window.open).not.toHaveBeenCalled();
  
      // Restore the original window.open function
      window.open = originalOpen;
    });
  });
