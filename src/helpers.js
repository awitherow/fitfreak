function handleData(type, data) {
  switch(type) {
    case 'string': return data;
    case 'json': return JSON.parse(data)
    case 'number': return parseInt(data)
    default: return data
  }
}

export {
  handleData
}
