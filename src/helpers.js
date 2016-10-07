import config from './config';

function processUserData(res) {
  const userDataColumns = config.userDataColumns;
  let data = {};
  for (let i = 0; i < userDataColumns.length; i++) {
    const col = userDataColumns[i]
    const key = col.name
    const type = col.type
    data[key] = handleData(type, res[i])
  }
  return data;
}

function handleData(type, data) {
  if (!data) return null
  switch(type) {
    case 'string': return data;
    case 'json': return JSON.parse(data)
    case 'number': return parseInt(data)
    default: return data
  }
}

export {
  handleData,
  processUserData
}
