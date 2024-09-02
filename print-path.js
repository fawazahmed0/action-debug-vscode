const path = require('path')
const fs = require('fs/promises')

const logFilePath = path.join(__dirname, 'mylog.txt')

async function main() {

    let data = await fs.readFile(logFilePath, { encoding: 'utf8' })
    let url = Array.from(data.matchAll(/-{10,}.*?(?<url>https?:\/\/.*?)\s.*?-{10,}/sgi))?.[0]?.groups?.url
    url = new URL(url)

    let folderPath = process.cwd().replaceAll(path.sep, path.posix.sep)
    if (process.platform == 'win32')
        folderPath = path.posix.sep + folderPath

    url.searchParams.set('tkn', 'root')
    url.searchParams.set('folder', folderPath)

    console.log(url.toString())
}
main()
