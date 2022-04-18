function childrenModify(parent, func) {
    const childrenList = Object.values(parent.children)
    childrenList.forEach(children  => {
         func(children, childrenList)
    })
}
