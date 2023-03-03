import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MovieObject from './MovieObject'

export default function MovieFinder() {
  return (
    <Container>
      <Row>
        <Col>
          <MovieObject />
        </Col>
      </Row>
    </Container>
  )
}
