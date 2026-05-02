# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Project Overview
This repository is a React frontend application built with Vite, utilizing Tailwind CSS for styling and React Icons for iconography. The project is primarily focused on frontend development with minimal backend dependencies.

# Development Workflow
- `npm run dev`: Starts the development server at http://localhost:5173
- `npm run build`: Generates production-ready builds in the `dist` directory
- `npm run preview`: Serves the built application for local testing
- `npm run lint`: Executes ESLint for code quality checks

# Codebase Architecture
The application follows a standard React component structure with ES module syntax. Key characteristics:
- **Styling**: Tailwind CSS utility-first approach
- **UI Components**: Enhanced with React Icons and Framer Motion
- **State Management**: Local component state with potential for global context
- **Build Process**: Configured via Vite's React plugin and Tailwind plugin

# Dependencies
- React 19, ReactDOM 19, Vite 7
- Tailwind CSS 4, React Icons 5, Framer Motion 12

# Testing
No formal test suite is configured. Future test additions should use Vitest or Jest following Vite's recommended practices.

# Scripting
All development workflows are containerized within npm scripts defined in package.json. Contextual execution (e.g., `npm test` for tests) should be added only after establishing a testing framework.