
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix) return []
    let isDirect = true
    const sortedMatrix = matrix.map(item => {
        if(isDirect) {
            isDirect = false
            return item
        } else {
            isDirect = true
            return item.reverse()
        }
    })
    return sortedMatrix.flat()
}
