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
            title="Work in Progress"
            thumbnail={thumbinProgress}
            href="/"
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
