import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="LeoKrypt">
    <Container>
      <Title>
        LeoKrypt <Badge>2022</Badge>
      </Title>
      <P>
        Web Application, which will transfer ethereum crypto currency from your
        wallet to the provided wallet address.
        <br />
        Frontend has been deployed using react via vite tool. Smart-Contract has
        been created using solidity via hardhat(ethereum development
        environment) and deployed on ethereum blockchain using Alchemy.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://leokrypt.live/" target="_blank">
            LeoKrypt <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/AryanBagade/LeoKrypt" target="_blank">
            github.com/LeoKrypt <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Hardhat, Alchemy, Solidity</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/leokrypt_1.png" alt="LeoKrypt_1" />
      <WorkImage src="/images/works/leokrypt_2.png" alt="LeoKrypt_2" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
