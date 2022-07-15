import _clone from 'lodash/clone'
import _escapeRegExp from 'lodash/escapeRegExp'
import _uniqBy from 'lodash/uniqBy'

export function swapTags(text){
  let displayText = _clone(text)
  const tags = text.match(/@\{\{[^\}]+\}\}/gi) || []
  tags.map(myTag => {
    const tagData = myTag.slice(3, -2)
    const tagDataArray = tagData.split('||')
    const tagDisplayValue = tagDataArray[2]
    displayText = displayText.replace(new RegExp(_escapeRegExp(myTag), 'gi'), tagDisplayValue)
  })
  return displayText

  //export users from index??