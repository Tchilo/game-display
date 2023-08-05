import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSeleton = () => {
  return (
    <Card width={'300px'} border={10}>
          <Skeleton height={'200px'} />
          <CardBody>
              <SkeletonText/>
          </CardBody>
    </Card>
  )
}

export default GameCardSeleton
