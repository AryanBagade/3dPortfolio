import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbinProgress from '../public/images/works/wip.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Articles
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <GridItem
            title="Build your first dApp from scratch (part-1)"
            thumbnail="https://miro.medium.com/max/1400/1*f797kY4_Rn1lj0fZ8utFdQ.png"
            href="https://medium.com/@AryanBagade/build-your-first-dapp-from-scratch-part-1-d04eddb02116"
          />
        </SimpleGrid>
      </Section>
    </Container>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Publications
      </Heading>
      <Section delay={0.3}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <GridItem
            title="Work In Progress"
            thumbnail={thumbinProgress}
            href="/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
