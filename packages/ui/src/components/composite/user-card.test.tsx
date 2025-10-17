import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { UserCard } from "./user-card";

describe("UserCard", () => {
  it("renders user information correctly", () => {
    render(
      <UserCard
        name="John Doe"
        email="john.doe@example.com"
        role="Software Engineer"
      />
    );

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
  });

  it("renders avatar when provided", () => {
    render(
      <UserCard
        name="Jane Smith"
        email="jane.smith@example.com"
        avatar="https://example.com/avatar.jpg"
      />
    );

    const avatar = screen.getByAltText("Jane Smith");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", "https://example.com/avatar.jpg");
  });

  it("renders initials when no avatar is provided", () => {
    render(<UserCard name="Bob Johnson" email="bob.johnson@example.com" />);

    expect(screen.getByText("B")).toBeInTheDocument();
  });

  it("calls onEdit when edit button is clicked", () => {
    const onEdit = vi.fn();
    render(
      <UserCard name="John Doe" email="john.doe@example.com" onEdit={onEdit} />
    );

    fireEvent.click(screen.getByText("Edit"));
    expect(onEdit).toHaveBeenCalledTimes(1);
  });

  it("calls onDelete when delete button is clicked", () => {
    const onDelete = vi.fn();
    render(
      <UserCard
        name="John Doe"
        email="john.doe@example.com"
        onDelete={onDelete}
      />
    );

    fireEvent.click(screen.getByText("Delete"));
    expect(onDelete).toHaveBeenCalledTimes(1);
  });

  it("does not render action buttons when callbacks are not provided", () => {
    render(<UserCard name="John Doe" email="john.doe@example.com" />);

    expect(screen.queryByText("Edit")).not.toBeInTheDocument();
    expect(screen.queryByText("Delete")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <UserCard
        name="John Doe"
        email="john.doe@example.com"
        className="custom-class"
      />
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("handles long names and emails with truncation", () => {
    render(
      <UserCard
        name="Christopher Alexander Johnson-Williams"
        email="christopher.alexander.johnson.williams@verylongdomainname.example.com"
      />
    );

    expect(
      screen.getByText("Christopher Alexander Johnson-Williams")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "christopher.alexander.johnson.williams@verylongdomainname.example.com"
      )
    ).toBeInTheDocument();
  });
});
