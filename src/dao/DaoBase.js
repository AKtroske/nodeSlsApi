module.exports = function BuildDaoBase({ pool, tableName }) {
  return Object.freeze({
    create,
    update
  })
  // Inserts object into $tableName with $attribute
  async function create({ attributes }) {
    var columns = []
    var keys = []

    await Object.keys(attributes).map((k, i) => {
    	columns.push(k)
    	keys.push('$' + (i+1))
    })
    const query = {
    	text : ['INSERT INTO', tableName, '(', columns.join(','), ') VALUES (', keys.join(','), ');'].join(' '),
    	values : Object.values(attributes)
    }

    try {
      console.log(query);
      const res = await pool.query(query)
      return res.rows[0]
    } catch (err) {
      console.log(`DB create method: ${err.message}`)
      throw err
    }
  }

  async function update({ attributes, requirements }) {
    var columns = []
    var keys = []
    let size = 0

    await Object.keys(attributes).map((k, i) => {
      columns.push(k)
      keys.push('$' + (i+1))
      size += 1
    })

    const { where, values } = _constructWhereClause(requirements, size)

    const query = {
      text : 'UPDATE ' + tableName + ' SET (' + columns.join(',') + ') = (' + keys.join(',') + ')' + where + ';',
      values : Object.values(attributes) + values
    }

    try {
      console.log(query);
      const res = await pool.query(query)
      return await res.rows[0]
    } catch (err) {
      console.log(`ERROR: DB update method: ${err.message}`)
    }
  }

  function _constructWhereClause(requirements, size){
    var reqsArray = []
    var values = []

    Object.entries(requirements).map(obj => {
      reqsArray.push(`${obj[0]} = $${size++}`)
      values.append(obj[1])
    })

    const where = ' WHERE ' + reqsArray.join('AND')
    return { where, values };
  }
}
