"use client"

import { render, screen, fireEvent } from "@testing-library/react"
import Header from "./Header"
import "@testing-library/jest-dom"

// Mock the next/navigation module
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }
  },
}))

// Mock the createClientComponentClient function
jest.mock("@supabase/auth-helpers-nextjs", () => ({
  createClientComponentClient: jest.fn(() => ({
    auth: {
      getUser: jest.fn(() => Promise.resolve({ data: { user: null } })),
      onAuthStateChange: jest.fn(() => ({ data: { subscription: { unsubscribe: jest.fn() } } })),
    },
  })),
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
    const { useRouter } = jest.requireMock("next/navigation")
    const pushMock = jest.fn()
    useRouter.mockImplementation(() => ({
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
    const { useRouter } = jest.requireMock("next/navigation")
    const pushMock = jest.fn()
    useRouter.mockImplementation(() => ({
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

