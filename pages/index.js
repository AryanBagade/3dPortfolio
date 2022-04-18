import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Section from '../components/section'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear, BioScore } from '../components/bio'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello!, I'm Aryan; Full Stack developer based in India!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Aryan Bagade
            </Heading>
            <p>
              (more than) A FullStack Developer ( Artist / Developer / Trader )
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="/images/aryan2.png"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Info
          </Heading>
          <Paragraph>
            Proficient in Javascript and Java programming, working on its
            frameworks and its realtime web-applications.
          </Paragraph>
          <Paragraph>
            Exploring solidity and rust for building dapps and smart contracts
            for blockchain application like cryptocurrencies &nbsp;
            <NextLink href="https://leokrypt.live/">
              <Link>LeoKrypt</Link>
            </NextLink>
            .
          </Paragraph>
          <Paragraph>
            Keen Interest in finance, Extensive knowledge of Market Patterns and
            Self-taught several aspects of the trading market including trading
            strategies, computer software, and future.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink
              href="https://drive.google.com/file/d/1oGPAO2kxYSxgq7jxdYmGWZuChf6o_BYN/view?usp=sharing"
              scroll={false}
            >
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Resume
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <b>Bachelor&apos;s in Engineering</b>
            <i>, Pune Institute of Computer Technology</i>
            <BioScore>9.54</BioScore>
            <br></br>
            <i>Electronics & Telecommunications</i>
            <br></br>
            <b>Honors</b>, <i>Cybersecurity</i>
            <br></br>
            <BioYear>2019-PRESENT</BioYear>
            <hr></hr>
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Music,{' '}
            <Link
              href="https://testnets.opensea.io/collection/cp-punks-uph6ef61qt/"
              target="_blank"
            >
              NFTs
            </Link>
            , Playing Piano & Violin, Animation, Development
          </Paragraph>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/AryanBagade" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @AryanBagade
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/thexryxn" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @thexryxn
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/aryanbagade/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @AryanBagade
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/thexryxn/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @thexryxn
                </Button>
              </Link>
            </ListItem>
          </List>
          <Box align="center" my={4}>
            <NextLink href="/works" scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Work
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
