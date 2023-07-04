import { LinkedList } from "@/LinkedList"

export default function Home() {
  const list = LinkedList()
  list.append('testNode1')
  console.log(list.tail())
  return (
    <>
    </>
  )
}
