// import { render } from 'node-sass';
import React from 'react';
import './header.scss';
import { Heading, Flex } from "@chakra-ui/react";

export default function Header() {
  return (
    <header>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        bg="#0f0f0f"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"} color="white">
            RESTy
          </Heading>
        </Flex>
      </Flex>
    </header>
  )
}
