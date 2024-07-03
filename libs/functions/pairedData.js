import { heroContentData } from "../data/heroContentData"

export const pairedData = []
for (let i = 0; i < heroContentData.length; i += 2) {
  pairedData.push({
    title: heroContentData[i].content,
    content: heroContentData[i + 1]?.content,
  })
}
