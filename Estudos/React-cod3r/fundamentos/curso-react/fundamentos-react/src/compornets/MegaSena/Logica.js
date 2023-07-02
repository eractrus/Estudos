
const maxNumber = 60
const listNumber = []

const runNumber = (qtNumber) => {
    for (let i = 0; i < qtNumber; i++) {

        listNumber.push(
            parseInt(Math.random() * maxNumber)
        )

        console.log(` ${i}) ${listNumber[i]} / `)
    }
}
runNumber(6)
export default listNumber
