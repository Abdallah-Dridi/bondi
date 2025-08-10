// src/data/bondiData.ts
import { Coins, CheckCircle, Repeat, BarChart } from 'lucide-react';

export const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
];

export const hero = {
  headline: "Simplify Shared Living.",
  subheadline: "Split bills, chores, and subscriptions effortlessly with Bondi, the friendly and transparent ledger for groups.",
  cta1: "Get Started Free",
  cta2: "See Demo",
};

export const features = [
  {
    icon: Coins,
    title: "Expense Tracking",
    description: "Log shared expenses in real-time, so everyone knows who paid for what.",
  },
  {
    icon: CheckCircle,
    title: "Chore Accountability",
    description: "Create and assign tasks to keep your shared space clean and organized.",
  },
  {
    icon: Repeat,
    title: "Subscription Sharing",
    description: "Manage recurring payments for services like Netflix and Spotify with ease.",
  },
  {
    icon: BarChart,
    title: "Transparent Ledger",
    description: "A clear and immutable record of all transactions ensures fairness and trust.",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Create Your Group",
    description: "Invite your friends, roommates, or family to join your Bondi group.",
  },
  {
    step: 2,
    title: "Add Expenses & Tasks",
    description: "Log bills, chores, and subscriptions as they come up. It’s quick and easy.",
  },
  {
    step: 3,
    title: "Settle Up Seamlessly",
    description: "Bondi calculates who owes what, making settlements simple and fair.",
  },
];

export const testimonials = [
  {
    quote: "Bondi has been a game-changer for our apartment. No more awkward conversations about bills!",
    name: "Sarah L.",
    avatar: "/avatars/sarah.png", // We will use placeholder avatars for now
  },
  {
    quote: "Finally, a fair way to manage subscriptions with my friends. The transparency is amazing.",
    name: "Michael B.",
    avatar: "/avatars/michael.png",
  },
  {
    quote: "As a student, splitting expenses can be tough. Bondi makes it incredibly simple and stress-free.",
    name: "Jessica P.",
    avatar: "/avatars/jessica.png",
  },
];