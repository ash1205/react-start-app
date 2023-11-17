import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Container className=" p-4">
        <Outlet />
      </Container>
    </>
  );
}
