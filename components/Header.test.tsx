"use client"

import { render, screen, fireEvent } from "@testing-library/react"
import Header from "./Header"
import "@testing-library/jest-dom"
import { useRouter } from "next/navigation"

// Mock the next/navigation module
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))

describe("Header", () => {
  it("renders the logo", () => {
    render(<Header />)
    const logoElement = screen.getByAltText("LaburandoApps Logo")
    expect(logoElement).toBeInTheDocument()
  })

  it("renders navigation links", () => {
    render(<Header />)
    expect(screen.getByText("Inicio")).toBeInTheDocument()
    expect(screen.getByText("Servicios")).toBeInTheDocument()
    expect(screen.getByText("Profesionales")).toBeInTheDocument()
  })

  it("renders login and register buttons", () => {
    render(<Header />)
    expect(screen.getByText("Iniciar sesión")).toBeInTheDocument()
    expect(screen.getByText("Registrarse")).toBeInTheDocument()
  })

  it("handles navigation clicks", () => {
    const pushMock = jest.fn()
    jest.spyOn({ useRouter }, "useRouter").mockImplementation(() => ({
      push: pushMock,
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }))

    render(<Header />)

    fireEvent.click(screen.getByText("Inicio"))
    expect(pushMock).toHaveBeenCalledWith("/")

    fireEvent.click(screen.getByText("Servicios"))
    expect(pushMock).toHaveBeenCalledWith("/services")

    fireEvent.click(screen.getByText("Profesionales"))
    expect(pushMock).toHaveBeenCalledWith("/professionals")
  })

  it("handles login and register clicks", () => {
    const pushMock = jest.fn()
    jest.spyOn({ useRouter }, "useRouter").mockImplementation(() => ({
      push: pushMock,
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }))

    render(<Header />)

    fireEvent.click(screen.getByText("Iniciar sesión"))
    expect(pushMock).toHaveBeenCalledWith("/login")

    fireEvent.click(screen.getByText("Registrarse"))
    expect(pushMock).toHaveBeenCalledWith("/register")
  })
})

