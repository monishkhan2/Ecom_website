export default function imageValidation(event) {
    let { name, files } = event.target
    let size = []
    let type = []
    for (let index in files) {
        if (files[index].size && files[index].size > 1048576) {
            size.push(`Pic ${parseInt(index) + 1} size is Larger then 1 MB`)
        }
        if (files[index].type == "" || files[index].type && files[index].type.split("/")[0] !== "image") {
            type.push(`File ${parseInt(index) + 1} size is Not an Image`)
        }
    }
    return size.concat(type)
}