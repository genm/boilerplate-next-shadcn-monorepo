import type { Meta, StoryObj } from "@storybook/react";
import { UserCard } from "./user-card";

const meta: Meta<typeof UserCard> = {
  title: "Composite/UserCard",
  component: UserCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "User's full name",
    },
    email: {
      control: "text",
      description: "User's email address",
    },
    avatar: {
      control: "text",
      description: "URL to user's avatar image",
    },
    jobTitle: {
      control: "text",
      description: "User's job title",
    },
    onEdit: {
      action: "edit",
      description: "Callback when edit button is clicked",
    },
    onDelete: {
      action: "delete",
      description: "Callback when delete button is clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "John Doe",
    email: "john.doe@example.com",
    jobTitle: "Software Engineer",
  },
};

export const WithAvatar: Story = {
  args: {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    jobTitle: "Product Manager",
  },
};

export const WithoutActions: Story = {
  args: {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    jobTitle: "Designer",
  },
  argTypes: {
    onEdit: { table: { disable: true } },
    onDelete: { table: { disable: true } },
  },
};

export const LongName: Story = {
  args: {
    name: "Christopher Alexander Johnson-Williams",
    email:
      "christopher.alexander.johnson.williams@verylongdomainname.example.com",
    jobTitle: "Senior Full Stack Developer",
  },
};

export const Minimal: Story = {
  args: {
    name: "Alice",
    email: "alice@example.com",
  },
  argTypes: {
    jobTitle: { table: { disable: true } },
    onEdit: { table: { disable: true } },
    onDelete: { table: { disable: true } },
  },
};
