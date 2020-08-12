import React from "react";
import { fireEvent, render, waitForDomChange } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "../../context";
import Login from "./";

describe("Login", () => {
  test("Email Format", () => {
    const { getByTestId } = render(
      <Provider>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(getByTestId("email-input-feedback").style.display).toBe("none");

    fireEvent.change(getByTestId("email-input"), {
      target: { value: "WrongEmailFormat.com" },
    });

    expect(getByTestId("email-input-feedback").style.display).toBe("block");

    fireEvent.change(getByTestId("email-input"), {
      target: { value: "correct@email.com" },
    });

    expect(getByTestId("email-input-feedback").style.display).toBe("none");
  });

  test("Password Format", () => {
    const { getByTestId } = render(
      <Provider>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(getByTestId("password-input-feedback").style.display).toBe("none");

    fireEvent.change(getByTestId("password-input"), {
      target: { value: "wrongpassword" },
    });

    expect(getByTestId("password-input-feedback").style.display).toBe("block");

    fireEvent.change(getByTestId("password-input"), {
      target: { value: "correct123456password" },
    });

    expect(getByTestId("password-input-feedback").style.display).toBe("none");
  });

  test("Disabled - Email and Password Format", () => {
    const { getByTestId } = render(
      <Provider>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.change(getByTestId("email-input"), {
      target: { value: "WrongEmailFormat.com" },
    });

    fireEvent.change(getByTestId("password-input"), {
      target: { value: "WrongPassword" },
    });

    expect(getByTestId("signin-btn").disabled).toBeTruthy();

    fireEvent.change(getByTestId("email-input"), {
      target: { value: "correct@email.com" },
    });

    fireEvent.change(getByTestId("password-input"), {
      target: { value: "WrongPassword" },
    });

    expect(getByTestId("signin-btn").disabled).toBeTruthy();

    fireEvent.change(getByTestId("email-input"), {
      target: { value: "WrongEmailFormat.com" },
    });

    fireEvent.change(getByTestId("password-input"), {
      target: { value: "correct123456password" },
    });

    expect(getByTestId("signin-btn").disabled).toBeTruthy();

    fireEvent.change(getByTestId("email-input"), {
      target: { value: "correct@email.com.com" },
    });

    fireEvent.change(getByTestId("password-input"), {
      target: { value: "correct123456password" },
    });

    expect(getByTestId("signin-btn").disabled).toBeFalsy();
  });
});
