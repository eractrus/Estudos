

// Decoraator Class

function logInfo(novoIp: string) {
    return (target: any) => {
        return class extends target {
            ip = novoIp
        }
    }
}


@logInfo('196.198.200.0.0')
class Sistema {


}

const sistema01 = new Sistema()
console.log(sistema01)