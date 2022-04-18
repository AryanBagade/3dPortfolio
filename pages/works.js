import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbLeokrypt from '../public/images/works/thumbLeokrypt1.png'
import thumbNFT from '../public/images/works/thumbNFT.png'
import thumbBank from '../public/images/works/thumbBank.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="leokrypt"
            title="LeoKrypt"
            thumbnail={thumbLeokrypt}
          >
            ETH Transfer Application
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="NFT" title="NFT Gallery" thumbnail={thumbNFT}>
            NFT Display Application
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="Bank" title="Banking System" thumbnail={thumbBank}>
            Online Bank Management Application
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
