const docsMap = new Map()

export const getCascaders = () => {

  const obj = [
    {
      value: "Major",
      label: "萌芽引擎官方文档",
      children: []
    },
    {
      value: "Editor",
      label: "萌芽编辑官方文档",
      children: []
    },
    {
      value: "Affiliate",
      label: "萌芽附属插件文档",
      children: []
    }
  ]
  const list = [ ...docsMap.keys() ];

  list.forEach((key) => {

    let label = key, tKey = key
    let array = obj[2].children

    if( key === "Major,GermMC" ) {

      array = obj[0].children
      tKey = "GermMC"
      label = "官方文档"

    } else if( key === "Editor,GermMCEditor" ) {

      array = obj[1].children
      tKey = "GermMCEditor"
      label = "编辑文档"

    }

    array.push({
      value: tKey, label
    })

  })

  return obj

}

export const addDocument = ({ type, title, category, content, lastModified, author }) => {

  const val = docsMap.get(type) || {

    map: new Map(),
    categories: new Map()

  }

  const list = val.categories.get(category) || []

  list.push({
    title, author, content, category, lastModified, index: list.length
  })

  // 前面list加了一个obj 所以得-1

  val.map.set(title, {
    title, author, content, category, lastModified, index: list.length - 1
  })

  val.categories.set(category, list)

  docsMap.set(type, val)

}

export const getDocument = ( type, title ) => {

  return docsMap.get(type)?.map.get(title)

}

export const getCategories = ( type ) => {

  return [ ...(docsMap.get(type)?.categories.keys() || []) ];

}

export const getCategoryDocs = ( type, category ) => {

  return docsMap.get(type)?.categories.get(category);

}

export const getDocs = ( type ) => {

  return [ ...(docsMap.get(type)?.map.values() || []) ];

}

export const search = ( type, keyword ) => {

  if( !keyword || keyword.trim() === '' ) return null

  const list = []

  getDocs( type ).forEach(doc => {

    if( doc.title.indexOf(keyword) !== -1 || doc.content.indexOf(keyword) !== -1 ) {

      list.push( doc )

    }

  })

  return list

}
