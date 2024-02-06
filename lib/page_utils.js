function flat (array) {
  let result = []
  array.forEach(function (a) {
    result.push(a)
    if (Array.isArray(a.children)) {
      result = result.concat(flat(a.children))
    }
  })
  return result
}

export function getFlattenArray (thisObject) {
  return flat(thisObject.children)
}
