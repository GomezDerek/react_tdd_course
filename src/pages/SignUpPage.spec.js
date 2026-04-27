import SignUpPage from './SignUpPage'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe("Sign Up page", () => {
    
    describe("Layout", () => {
        it("has header", () => {
            render(<SignUpPage />)
            const header = screen.queryByRole("heading", {name: "Sign Up"})
            expect(header).toBeInTheDocument()
        })
        it("has username input", () => {
            render(<SignUpPage />)
            const usernameInput = screen.getByLabelText("username")
            expect(usernameInput).toBeInTheDocument()
        })
        it("has email input", () => {
            render(<SignUpPage />)
            const emailInput = screen.getByLabelText("email")
            expect(emailInput).toBeInTheDocument()
        })
        it("has password input", () => {
            render(<SignUpPage />)
            const passwordInput = screen.getByLabelText("password")
            expect(passwordInput).toBeInTheDocument()
        })
        it("has password repeat input", () => {
            render(<SignUpPage />)
            const passwordRepeatInput = screen.getByLabelText("password repeat")
            expect(passwordRepeatInput).toBeInTheDocument()
        })
        it("has password type for password inputs", () => {
            render(<SignUpPage />)
            const passwordInput = screen.getByLabelText("password")
            const passwordRepeatInput = screen.getByLabelText("password repeat")
            expect(passwordInput.type).toBe("password")
            expect(passwordRepeatInput.type).toBe("password")
        })
        it("has Sign Up button", () => {
            render(<SignUpPage />)
            const button = screen.queryByRole("button", {name: "Sign Up"})
            expect(button).toBeInTheDocument()
        })
        it("disables the Sign Up button initially", () => {
            render(<SignUpPage />)
            const button = screen.queryByRole("button", {name: "Sign Up"})
            expect(button).toBeDisabled()
        })
    })

    describe("Interactions", () => {
        it("enables the button when password and password repeat fields match", () => {
            render(<SignUpPage />)
            const passwordInput = screen.getByLabelText("password")
            const passwordRepeatInput = screen.getByLabelText("password repeat")
            userEvent.type(passwordInput, "P4ssw0rd")
            userEvent.type(passwordRepeatInput, "P4ssw0rd")
            const button = screen.queryByRole("button", {name: "Sign Up"})
            expect(button).toBeEnabled()
        })
    })
})
