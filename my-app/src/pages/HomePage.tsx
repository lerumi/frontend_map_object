import { Link } from "react-router-dom";
import { ROUTES } from "../Routes.tsx";
import { Button, Col, Container, Row } from "react-bootstrap";
import NavBar from '../components/NavBar.tsx'
import { FC, useState} from 'react'
import './HomePage.css'
export const HomePage: FC = () => {
  return (
      <>
      <NavBar
        Home = {ROUTES.HOME}
        Tags ={ROUTES.TAGS}
        Objects = {ROUTES.OBJECTS}
      />
      <p className="text_homePage fade-in">Добро пожаловать! </p>
      </>
      )
}